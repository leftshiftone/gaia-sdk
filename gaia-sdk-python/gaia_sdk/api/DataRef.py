import functools
import logging
from dataclasses import dataclass
from math import ceil
from typing import List

from rx import of
from rx.core.typing import Observable

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

CHUNK_SIZE = 1024 * 1024 * 1024 * 5


class DataRef:
    def __init__(self, uri: str, client: GaiaStreamClient):
        self.uri = uri
        self.client = client
        self.logger = logging.getLogger("HttpTransporter")

    def add(self, file_name: str, content: bytes, override: bool = False) -> Observable['DataRef']:
        r"""Uploads a file with a given name and content to the storage.

        :param file_name: Name of the file to be uploaded.
        :param content: Content of the file to be uploaded in bytes.
        :param override: (optional) Flag to specify if existing files should be overwritten. If set to false, the method
        will throw an exception when trying to overwrite an existing file.
        :return: :class:`Observable[DataRef]` object: Reference to the newly uploaded file
        :exception ValueError: Error thrown if the upload fails due to override being set to false.
        """
        file_uri = DataRef.concat_uri(self.uri, file_name)
        number_of_chunks = ceil(len(content) / CHUNK_SIZE)
        self.logger.debug(f"Started upload to uri {self.uri}")
        new_file_data_ref = DataUpload(file_uri, content, number_of_chunks, override).execute(self.client)
        self.logger.debug(f"Finished upload to uri {self.uri}")
        return of(new_file_data_ref)

    def list(self) -> Observable[List[FileListing]]:
        r"""Lists all files sharing the current uri as prefix.

        :return: :class:`Observable[List[FileListing]]` object: List of files that share the current uri as prefix."""
        self.logger.debug(f"Started list at uri {self.uri}")
        response = self.client.post_json(ListFilesImpulse(self.uri), "/sink/data/list").json()
        self.logger.debug(f"Completed list at uri {self.uri}")
        return of([FileListing(listing) for listing in response])

    def as_bytes(self):
        r"""Downloads the file at the current uri and returns it as bytes.

        :return: :class:`Observable[bytes]` object: File as bytes."""
        self.logger.debug(f"Started download from {self.uri}")
        response = self.client.post_json(BinaryReadImpulse(self.uri), "/source/data/get").content
        self.logger.debug(f"Completed download from {self.uri}")
        return response

    def as_stream(self):
        pass

    def remove(self) -> Observable[FileRemoved]:
        r"""Removes the file at the current uri and provides information if it existed.

        :return: :class:`Observable[FileRemoved]` object: Response to remove request that contains information if the
        file existed."""
        return self.remove_file("")

    def remove_file(self, file_name) -> Observable[FileRemoved]:
        r"""Removes the specified file in the directory at the current uri.

        :return: :class:`Observable[FileRemoved]` object: Response to remove request that contains information if the
        file existed."""
        file_uri = DataRef.concat_uri(self.uri, file_name)
        self.logger.debug(f"Started removing file at {file_uri}")
        response = self.client.post_json(RemoveFileImpulse(file_uri), "/sink/data/remove").json()
        self.logger.debug(f"Completed removing file at {file_uri}")
        return of(FileRemoved(response))

    def append(self):
        pass

    @staticmethod
    def concat_uri(*parts: str):
        return functools.reduce(lambda uri, part: f"{uri.rstrip('/')}/{part.lstrip('/')}", parts).rstrip('/')


@dataclass
class DataUpload:
    uri: str
    content: bytes
    number_of_chunks: int
    override: bool = False

    def execute(self, client: GaiaStreamClient) -> DataRef:
        upload_id = self.init_upload(client).upload_id
        chunk_ids = self.upload_chunks(client, upload_id)
        self.complete_upload(client, upload_id, chunk_ids)
        return DataRef(self.uri, client)

    def init_upload(self, client: GaiaStreamClient) -> InitializedBinaryWrite:
        response = client.post_json(InitBinaryWriteImpulse(self.uri,
                                                           self.number_of_chunks,
                                                           len(self.content),
                                                           self.override), "/sink/data/init")
        if response.status_code >= 400:
            raise ValueError(response.content)
        return InitializedBinaryWrite(response.json())

    def upload_chunks(self, client: GaiaStreamClient, upload_id: str) -> List[str]:
        chunk_ids: List[str] = []
        for index in range(self.number_of_chunks):
            chunk_data = self.content[index * CHUNK_SIZE: min((index + 1) * CHUNK_SIZE, len(self.content))]
            chunk_impulse = BinaryWriteChunkImpulse(self.uri, upload_id, index + 1, len(chunk_data), chunk_data)
            response = client.post_form_data(chunk_impulse.as_form_data(), "/sink/data/chunk").json()
            chunk_ids.insert(index, BinaryChunkWritten(response).chunk_id)
        return chunk_ids

    def complete_upload(self, client: GaiaStreamClient, upload_id: str, chunk_ids: List[str]) -> dict:
        return client.post_json(CompleteBinaryWriteImpulse(self.uri, upload_id, chunk_ids),
                                "/sink/data/complete").json()