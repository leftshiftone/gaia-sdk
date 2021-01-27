from math import ceil
from rx import of
from rx.core.abc import Scheduler
from rx.core.typing import Observable
import logging
import rx
import rx.operators as ops
import time
import uuid

from gaia_sdk.api.DataRef import DataRef
from gaia_sdk.http.request.IdentitySourceRequestImpulse import IdentitySourceRequestImpulse

from gaia_sdk.http.response.IdentityImported import IdentityImported

from gaia_sdk.http.GaiaStreamClient import GaiaStreamClient
from gaia_sdk.http.request.IdentityImportImpulse import IdentityImportImpulse

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
                        identity_id: str = None) -> Observable[IdentityImported]:
        def complete_import(data_ref: DataRef) -> dict:
            self._logger.debug(f"Started import of identity {identity_name}")
            return self._client.post_json(IdentityImportImpulse(data_ref.uri, tenant_id, check_identity_id(identity_id),
                                                                identity_name, override),
                                          "/identity/import").json()

        uri = f"gaia://{tenant_id}/identities/"

        self._logger.debug(f"Started upload to uri {uri}")
        file_name = f"{identity_name}-{round(time.time() * 1000)}"
        new_file_data_ref = DataRef(uri, self._client, self._scheduler) \
            .add(file_name, content, override)

        return new_file_data_ref.pipe(ops.map(complete_import))
