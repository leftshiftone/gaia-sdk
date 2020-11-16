import logging

import rx
import rx.operators as ops
from rx.core.typing import Observable, Scheduler
from gaia_sdk.http import GaiaStreamClient
from gaia_sdk.http.request.IdentitySourceRequestImpulse import IdentitySourceRequestImpulse


class IdentityRef:
    def __init__(self, identity_id: str, client: GaiaStreamClient, scheduler: Scheduler):
        self.identity_id = identity_id
        self._client = client
        self._logger = logging.getLogger("IdentityRef")
        self._scheduler = scheduler

    def export(self) -> Observable[bytes]:
        r"""Exports the identity with the current identity ID and returns it as bytes.

        :return: :class:`Observable[bytes]` object: Identity as bytes.
        :exception ValueError: Error thrown if the identity ID is not set in the IdentityRef
        :exception HttpError: Error thrown if the export operation fails.
        """
        if self.identity_id is None:
            raise ValueError("Identity ID of IdentityRef must be set in order to export an identity")

        self._logger.debug(f"Started export of {self.identity_id}")

        return rx.from_callable(
            lambda: self._client.post_json(IdentitySourceRequestImpulse(self.identity_id),
                                           url_postfix="/identity/source"),
            self._scheduler) \
            .pipe(
            ops.map(lambda response: response.content))
