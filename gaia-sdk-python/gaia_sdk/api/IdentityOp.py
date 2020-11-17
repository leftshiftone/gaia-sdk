import logging

import rx
import rx.operators as ops
from rx.core.typing import Observable, Scheduler
from gaia_sdk.http import GaiaStreamClient
from gaia_sdk.http.request.IdentitySourceRequestImpulse import IdentitySourceRequestImpulse


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

    def import_identity(self, identity_id: str = None) -> None:  # 'import' keyword already taken
        raise NotImplementedError("Implement identity import functionality is not yet implemented")
