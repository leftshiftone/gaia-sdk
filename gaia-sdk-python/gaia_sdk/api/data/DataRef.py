import functools
import logging
import shutil
import time
from math import ceil
from pathlib import Path
from typing import List, Union

import rx
import rx.operators as ops
from requests import Response
from rx.core.abc import Scheduler
from rx.core.typing import Observable

from gaia_sdk.api.data.DataRefRequestConfig import DataRefRequestConfig
from gaia_sdk.api.data.DataUpload import DataUpload
from gaia_sdk.api.data.DataUploadContent import DataUploadContentBytes, DataUploadContentPath
from gaia_sdk.http.GaiaStreamClient import GaiaStreamClient
from gaia_sdk.http.request.BinaryReadImpulse import BinaryReadImpulse
from gaia_sdk.http.request.ListFilesImpulse import ListFilesImpulse
from gaia_sdk.http.request.RemoveFileImpulse import RemoveFileImpulse
from gaia_sdk.http.response.FileListing import FileListing
from gaia_sdk.http.response.FileRemoved import FileRemoved

CHUNK_SIZE = 1024 * 1024 * 5


class DataRef:
    def __init__(self, uri: str, client: GaiaStreamClient, scheduler: Scheduler):
        self.uri = uri
        self.client = client
        self.scheduler = scheduler
        self.logger = logging.getLogger("HttpTransporter")

    def add(self, file_name: str, content: Union[bytes, Path], override: bool = False,
            config: DataRefRequestConfig = None) -> Observable['DataRef']:
        r"""Uploads a file with a given name and content to the storage.

        :param file_name: Name of the file to be uploaded.
        :param content: Content of the file to be uploaded in bytes or a Path pointing to a file location.
        :param override: (optional) Flag to specify if existing files should be overwritten. If set to false, the method
        will throw an exception when trying to overwrite an existing file.
        :param config: (optional) Interface which currently only contains onUploadProgress callback
        :return: :class:`Observable[DataRef]` object: Reference to the newly uploaded file
        :exception HttpError: Error thrown if the upload fails due to override being set to false.
        """
        file_uri = DataRef.concat_uri(self.uri, file_name)

        if isinstance(content, bytes):
            upload_content = DataUploadContentBytes(content)
        else:
            upload_content = DataUploadContentPath(content)

        number_of_chunks = ceil(upload_content.total_size_in_bytes / CHUNK_SIZE)
        upload = DataUpload(file_uri, upload_content, number_of_chunks, override, config)

        def execute_upload() -> DataRef:
            self.logger.debug(f"Started upload to uri {file_uri}")
            new_file_data_ref = upload.execute(self.client, self.scheduler)
            self.logger.debug(f"Finished upload to uri {file_uri}")
            return new_file_data_ref

        return rx.from_callable(execute_upload).pipe(ops.do_action(on_error=lambda: upload_content.close(),
                                                                   on_completed=lambda: upload_content.close()))

    def list(self) -> Observable[List[FileListing]]:
        r"""Lists all files sharing the current uri as prefix.

        :return: :class:`Observable[List[FileListing]]` object: List of files that share the current uri as prefix.
        :exception HttpError: Error thrown if the list operation fails.
        """
        def execute_list() -> List[FileListing]:
            self.logger.debug(f"Started list at uri {self.uri}")
            response = self.client.post_json(ListFilesImpulse(self.uri), "/data/list").json()
            self.logger.debug(f"Completed list at uri {self.uri}")
            return [FileListing(listing) for listing in response]

        return rx.from_callable(execute_list)

    def as_bytes(self) -> Observable[bytes]:
        r"""Downloads the file at the current uri and returns it as bytes.

        :return: :class:`Observable[bytes]` object: File as bytes.
        :exception HttpError: Error thrown if the download operation fails.
        """
        return rx.from_callable(
            lambda: self.client.post_json(BinaryReadImpulse(self.uri),
                                          url_postfix="/data/source"),
            self.scheduler) \
            .pipe(
            ops.map(lambda response: response.content))

    def as_file(self, file_path: str = f"SDK-DataRef.as_file-{time.time()}") -> Observable[Path]:
        r"""Downloads the file at the current uri and saves it at specified/returned location.

        :param file_path: Location where the file should be saved.
        :return: :class:`Observable[bytes]` object: File as bytes.
        :exception HttpError: Error thrown if the download operation fails.
        """
        def send_request_and_copy(fp: str) -> Path:
            response: Response = self.client.post_json(BinaryReadImpulse(self.uri),
                                                       url_postfix="/data/source")
            # https://stackoverflow.com/a/39217788/4644044
            with open(fp, 'wb+') as f:
                shutil.copyfileobj(response.raw, f)
                return Path(fp)

        return rx.from_callable(lambda: send_request_and_copy(file_path), self.scheduler)

    def as_stream(self):
        r"""Not implemented in backend"""
        raise NotImplementedError("as_stream is not implemented. Use as_bytes or as_file instead.")

    def remove(self) -> Observable[FileRemoved]:
        r"""Removes the file at the current uri and provides information if it existed.

        :return: :class:`Observable[FileRemoved]` object: Response to remove request that contains information if the
        file existed.
        :exception HttpError: Error thrown if the remove operation fails.
        """
        return self.remove_file("")

    def remove_file(self, file_name: str) -> Observable[FileRemoved]:
        r"""Removes the specified file in the directory at the current uri.

        :param file_name: Name of the file at the current uri to be removed.
        :return: :class:`Observable[FileRemoved]` object: Response to remove request that contains information if the
        file existed.
        :exception HttpError: Error thrown if the remove operation fails.
        """
        def execute_remove_file() -> FileRemoved:
            file_uri = DataRef.concat_uri(self.uri, file_name)
            self.logger.debug(f"Started removing file at {file_uri}")
            response = self.client.post_json(RemoveFileImpulse(file_uri), "/data/remove").json()
            self.logger.debug(f"Completed removing file at {file_uri}")
            return FileRemoved(response)

        return rx.from_callable(execute_remove_file)

    def append(self):
        r"""Not implemented in backend"""
        pass

    @staticmethod
    def concat_uri(*parts: str):
        return functools.reduce(lambda uri, part: f"{uri.rstrip('/')}/{part.lstrip('/')}", parts).rstrip('/')
