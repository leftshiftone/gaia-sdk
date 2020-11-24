from math import ceil
from rx import of
from rx.core.abc import Scheduler
from rx.core.typing import Observable
from typing import List
import logging
import rx
import rx.operators as ops

from gaia_sdk.api.DataRef import DataRef
from gaia_sdk.http.request.IdentitySourceRequestImpulse import IdentitySourceRequestImpulse

from gaia_sdk.http.GaiaStreamClient import GaiaStreamClient
from gaia_sdk.http.request.BinaryWriteChunkImpulse import BinaryWriteChunkImpulse
from gaia_sdk.http.request.CompleteIdentityWriteImpulse import CompleteIdentityWriteImpulse
from gaia_sdk.http.request.InitBinaryWriteImpulse import InitBinaryWriteImpulse
from gaia_sdk.http.response.BinaryChunkWritten import BinaryChunkWritten
from gaia_sdk.http.response.InitializedBinaryWrite import InitializedBinaryWrite

CHUNK_SIZE = 1024 * 1024 * 5


class IdentityOp:
    def __init__(self, client: GaiaStreamClient, scheduler: Scheduler):
        self._client = client
        self._logger = logging.getLogger("IdentityRef")
        self._scheduler = scheduler

    def export(self, identity_id: str) -> Observable[bytes]:
        r"""Exports the identity with the current identity ID and returns it as bytes.

        :param identity_id: ID of the identity to be exported.
        :return: :class:`Observable[bytes]` object: Identity as bytes.
        :exception HttpError: Error thrown if the export operation fails.
        """
        self._logger.debug(f"Started export of {identity_id}")

        return rx.from_callable(
            lambda: self._client.post_json(IdentitySourceRequestImpulse(identity_id),
                                           url_postfix="/identity/source"),
            self._scheduler) \
            .pipe(
            ops.map(lambda response: response.content))

    def import_identity(self, tenant_id: str, identity_name: str, content: bytes, override: bool = False,
                        identity_id: str = None) -> Observable['IdentityOp']:
        self._logger.debug(f"Started import of {identity_id}")
        uri = "gaia://user@{}/identities/".format(tenant_id)
        file_uri = DataRef.concat_uri(uri, identity_name)
        number_of_chunks = ceil(len(content) / CHUNK_SIZE)
        new_file_data_ref = IdentityUpload(file_uri, tenant_id, identity_id, identity_name, content, number_of_chunks,
                                           override).execute(self._client, self._scheduler)
        self._logger.debug(f"Finished import to uri {uri}")
        return of(new_file_data_ref)


class IdentityUpload:
    uri: str
    tenant_id: str
    identity_id: str
    identity_name: str
    content: bytes
    number_of_chunks: int
    override: bool = False

    def __init__(self, uri: str, tenant_id: str, identity_id: str, identity_name: str, content: bytes,
                 number_of_chunks: int, override: bool = False):
        self.uri = uri
        self.tenant_id = tenant_id
        self.identity_id = identity_id
        self.identity_name = identity_name
        self.content = content
        self.number_of_chunks = number_of_chunks
        self.override = override

    def __eq__(self, other):
        return self.uri == other.uri \
               and self.tenant_id == other.tenant_id \
               and self.identity_id == other.identity_id \
               and self.identity_name == other.identity_name \
               and self.content == other.content \
               and self.number_of_chunks == other.number_of_chunks \
               and self.override == other.override

    def __repr__(self):
        return {'uri': self.uri,
                'tenant_id': self.tenant_id,
                'identity_id': self.identity_id,
                'identity_name': self.identity_name,
                'content': self.content,
                'number_of_chunks': self.number_of_chunks,
                'override': self.override}

    def execute(self, client: GaiaStreamClient, scheduler: Scheduler) -> DataRef:
        upload_id = self.init_upload(client).upload_id
        chunk_ids = self.upload_chunks(client, upload_id)
        self.complete_upload(client, upload_id, chunk_ids)
        return DataRef(self.uri, client, scheduler)

    def init_upload(self, client: GaiaStreamClient) -> InitializedBinaryWrite:
        response = client.post_json(InitBinaryWriteImpulse(self.uri,
                                                           self.number_of_chunks,
                                                           len(self.content),
                                                           self.override), "/identity/sink/init")
        return InitializedBinaryWrite(response.json())

    def upload_chunks(self, client: GaiaStreamClient, upload_id: str) -> List[str]:
        chunk_ids: List[str] = []
        for index in range(self.number_of_chunks):
            chunk_data = self.content[index * CHUNK_SIZE: min((index + 1) * CHUNK_SIZE, len(self.content))]
            chunk_impulse = BinaryWriteChunkImpulse(self.uri, upload_id, index + 1, len(chunk_data), chunk_data)
            response = client.post_stream(chunk_impulse.data(), chunk_impulse.request_parameters(),
                                          "/identity/sink/chunk").json()
            chunk_ids.insert(index, BinaryChunkWritten(response).chunk_id)
        return chunk_ids

    def complete_upload(self, client: GaiaStreamClient, upload_id: str, chunk_ids: List[str]) -> dict:
        return client.post_json(CompleteIdentityWriteImpulse(self.uri, self.tenant_id, self.identity_id,
                                self.identity_name, upload_id, chunk_ids), "/identity/sink/complete").json()
