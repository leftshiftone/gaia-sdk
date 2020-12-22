import math
from math import ceil
from rx import of
from rx.core.abc import Scheduler
from rx.core.typing import Observable
from typing import List, Callable
import functools
import logging
import rx
import rx.operators as ops

from gaia_sdk.http.GaiaStreamClient import GaiaStreamClient
from gaia_sdk.http.request.BinaryReadImpulse import BinaryReadImpulse
from gaia_sdk.http.request.BinaryWriteChunkImpulse import BinaryWriteChunkImpulse
from gaia_sdk.http.request.CompleteBinaryWriteImpulse import CompleteBinaryWriteImpulse
from gaia_sdk.http.request.InitBinaryWriteImpulse import InitBinaryWriteImpulse
from gaia_sdk.http.request.ListFilesImpulse import ListFilesImpulse
from gaia_sdk.http.request.RemoveFileImpulse import RemoveFileImpulse
from gaia_sdk.http.response.BinaryChunkWritten import BinaryChunkWritten
from gaia_sdk.http.response.FileListing import FileListing
from gaia_sdk.http.response.FileRemoved import FileRemoved
from gaia_sdk.http.response.InitializedBinaryWrite import InitializedBinaryWrite

CHUNK_SIZE = 1024 * 1024 * 5


class DataRefRequestConfig:
    def __init__(self, on_upload_progress: Callable[[int], None]):
        self.on_upload_progress = on_upload_progress

    def on_upload_progress(self, progress: int):
        """Return current upload progress"""
        pass


class DataRef:
    def __init__(self, uri: str, client: GaiaStreamClient, scheduler: Scheduler):
        self.uri = uri
        self.client = client
        self.scheduler = scheduler
        self.logger = logging.getLogger("HttpTransporter")

    def add(self, file_name: str, content: bytes, override: bool = False,
            config: DataRefRequestConfig = None) -> Observable['DataRef']:
        r"""Uploads a file with a given name and content to the storage.

        :param file_name: Name of the file to be uploaded.
        :param content: Content of the file to be uploaded in bytes.
        :param override: (optional) Flag to specify if existing files should be overwritten. If set to false, the method
        :param config: (optional) Interface which currently only contains onUploadProgress callback
        will throw an exception when trying to overwrite an existing file.
        :return: :class:`Observable[DataRef]` object: Reference to the newly uploaded file
        :exception HttpError: Error thrown if the upload fails due to override being set to false.
        """
        file_uri = DataRef.concat_uri(self.uri, file_name)
        number_of_chunks = ceil(len(content) / CHUNK_SIZE)
        upload = DataUpload(file_uri, content, number_of_chunks, override, config)

        def execute_upload() -> DataRef:
            self.logger.debug(f"Started upload to uri {file_uri}")
            new_file_data_ref = upload.execute(self.client, self.scheduler)
            self.logger.debug(f"Finished upload to uri {file_uri}")
            return new_file_data_ref

        return rx.from_callable(execute_upload)

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

    def as_stream(self):
        r"""Not implemented in backend"""
        pass

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


class DataUpload:
    uri: str
    content: bytes
    number_of_chunks: int
    override: bool = False
    config: DataRefRequestConfig = None

    def __init__(self, uri: str, content: bytes, number_of_chunks: int, override: bool = False,
                 config: DataRefRequestConfig = None):
        self.uri = uri
        self.content = content
        self.number_of_chunks = number_of_chunks
        self.override = override
        self.config = config

    def __eq__(self, other):
        return self.uri == other.uri \
               and self.content == other.content \
               and self.number_of_chunks == other.number_of_chunks \
               and self.override == other.override \
               and self.config == other.config

    def __repr__(self):
        return {'uri': self.uri,
                'content': self.content,
                'number_of_chunks': self.number_of_chunks,
                'override': self.override,
                'config': self.config}

    def execute(self, client: GaiaStreamClient, scheduler: Scheduler) -> DataRef:
        upload_id = self.init_upload(client).upload_id
        chunk_ids = self.upload_chunks(client, upload_id)
        self.complete_upload(client, upload_id, chunk_ids)
        return DataRef(self.uri, client, scheduler)

    def init_upload(self, client: GaiaStreamClient) -> InitializedBinaryWrite:
        response = client.post_json(InitBinaryWriteImpulse(self.uri,
                                                           self.override), "/data/sink/init")
        return InitializedBinaryWrite(response.json())

    def upload_chunks(self, client: GaiaStreamClient, upload_id: str) -> List[str]:
        chunk_ids: List[str] = []
        current_chunk: int = 1
        for index in range(self.number_of_chunks):
            chunk_data = self.content[index * CHUNK_SIZE: min((index + 1) * CHUNK_SIZE, len(self.content))]
            chunk_impulse = BinaryWriteChunkImpulse(self.uri, upload_id, index + 1, len(chunk_data), chunk_data)
            response = client.post_stream(chunk_impulse.data(), chunk_impulse.request_parameters(),
                                          "/data/sink/chunk").json()
            chunk_ids.insert(index, BinaryChunkWritten(response).chunk_id)
            if self.config is not None:
                progress = (100 * current_chunk) / self.number_of_chunks
                current_chunk += 1
                self.config.on_upload_progress(math.ceil(progress))
        return chunk_ids

    def complete_upload(self, client: GaiaStreamClient, upload_id: str, chunk_ids: List[str]) -> dict:
        return client.post_json(CompleteBinaryWriteImpulse(self.uri, upload_id, chunk_ids),
                                "/data/sink/complete").json()
