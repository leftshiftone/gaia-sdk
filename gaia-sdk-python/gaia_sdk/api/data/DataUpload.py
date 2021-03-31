import math
from typing import List, Dict

from requests import Response
from rx.core.abc import Scheduler

from gaia_sdk.api.data import DataRef
from gaia_sdk.api.data.DataRefRequestConfig import DataRefRequestConfig
from gaia_sdk.api.data.DataUploadContent import DataUploadContent
from gaia_sdk.http.GaiaStreamClient import GaiaStreamClient
from gaia_sdk.http.request.BinaryWriteChunkImpulse import BinaryWriteChunkImpulse
from gaia_sdk.http.request.CompleteBinaryWriteImpulse import CompleteBinaryWriteImpulse
from gaia_sdk.http.request.InitBinaryWriteImpulse import InitBinaryWriteImpulse
from gaia_sdk.http.response.BinaryChunkWritten import BinaryChunkWritten
from gaia_sdk.http.response.InitializedBinaryWrite import InitializedBinaryWrite


class DataUpload:
    uri: str
    content: DataUploadContent
    number_of_chunks: int
    override: bool = False
    config: DataRefRequestConfig = None

    def __init__(self, uri: str, content: DataUploadContent, number_of_chunks: int, override: bool = False,
                 config: DataRefRequestConfig = None):
        self.uri = uri
        self.content = content
        self.number_of_chunks = number_of_chunks
        self.override = override
        self.config = config

    def execute(self, client: GaiaStreamClient, scheduler: Scheduler) -> DataRef:
        from gaia_sdk.api.data.DataRef import DataRef  # Imported locally to avoid circular import
        upload_id = self.init_upload(client).upload_id
        chunk_ids = self.upload_chunks(client, upload_id)
        self.complete_upload(client, upload_id, chunk_ids)
        return DataRef(self.uri, client, scheduler)

    def init_upload(self, client: GaiaStreamClient) -> InitializedBinaryWrite:
        response: Response = client.post_json(InitBinaryWriteImpulse(self.uri, self.override),
                                              "/data/sink/init")
        return InitializedBinaryWrite(response.json())

    def upload_chunks(self, client: GaiaStreamClient, upload_id: str) -> List[str]:
        from gaia_sdk.api.data.DataRef import CHUNK_SIZE  # Imported locally to avoid circular import
        chunk_ids: List[str] = []
        for index in range(self.number_of_chunks):
            chunk_data = self.content.get_next_chunk(CHUNK_SIZE)
            chunk_impulse = BinaryWriteChunkImpulse(self.uri, upload_id, index + 1, len(chunk_data), chunk_data)
            response: Dict = client.post_stream(chunk_impulse.data(), chunk_impulse.request_parameters(),
                                                "/data/sink/chunk").json()
            chunk_ids.append(BinaryChunkWritten(response).chunk_id)
            if self.config is not None:
                progress = (100 * (index + 1)) / self.number_of_chunks
                self.config.on_upload_progress(math.ceil(progress))
        return chunk_ids

    def complete_upload(self, client: GaiaStreamClient, upload_id: str, chunk_ids: List[str]) -> dict:
        return client.post_json(CompleteBinaryWriteImpulse(self.uri, upload_id, chunk_ids),
                                "/data/sink/complete").json()
