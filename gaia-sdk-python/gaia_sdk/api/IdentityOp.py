from math import ceil
from rx import of
from rx.core.abc import Scheduler
from rx.core.typing import Observable
from typing import List
import logging
import rx
import rx.operators as ops

import uuid

from gaia_sdk.api.DataRef import DataRef, DataUpload
from gaia_sdk.http.request.IdentitySourceRequestImpulse import IdentitySourceRequestImpulse

from gaia_sdk.http.GaiaStreamClient import GaiaStreamClient
from gaia_sdk.http.request.BinaryWriteChunkImpulse import BinaryWriteChunkImpulse
from gaia_sdk.http.request.IdentityImportImpulse import IdentityImportImpulse
from gaia_sdk.http.request.InitBinaryWriteImpulse import InitBinaryWriteImpulse
from gaia_sdk.http.response.BinaryChunkWritten import BinaryChunkWritten
from gaia_sdk.http.response.InitializedBinaryWrite import InitializedBinaryWrite

CHUNK_SIZE = 1024 * 1024 * 5


def check_identity_id(identity_id):
    if identity_id is None:
        return str(uuid.uuid4())
    return identity_id


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
        uri = "gaia://{}/identities/".format(tenant_id)
        file_uri = DataRef.concat_uri(uri, identity_name)
        number_of_chunks = ceil(len(content) / CHUNK_SIZE)

        self._logger.debug(f"Started upload to uri {uri}")
        new_file_data_ref = DataUpload(file_uri, content, number_of_chunks, override) \
            .execute(self._client, self._scheduler)

        self._logger.debug(f"Started import of identity {identity_name}")
        self.complete_import(file_uri, tenant_id, identity_name, True, identity_id)

        self._logger.debug(f"Finished import to uri {uri}")
        return of(new_file_data_ref)

    def complete_import(self, uri: str, tenant_id: str, identity_name: str, override: bool = False,
                        identity_id: str = None) -> dict:
        return self._client.post_json(IdentityImportImpulse(uri, tenant_id, check_identity_id(identity_id),
                                                            identity_name, override),
                                      "/identity/import").json()
