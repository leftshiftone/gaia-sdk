import logging

from rx import of
from rx.core.typing import Observable
from gaia_sdk.http import GaiaStreamClient
from gaia_sdk.http.request.IdentitySourceRequestImpulse import IdentitySourceRequestImpulse


class IdentityRef:
    def __init__(self, identity_id: str, client: GaiaStreamClient):
        self.identity_id = identity_id
        self.client = client
        self.logger = logging.getLogger("IdentityRef")

    def export(self) -> Observable[bytes]:
        r"""Exports the identity with the current identity ID and returns it as bytes.

        :return: :class:`Observable[bytes]` object: Identity as bytes.
        :exception ValueError: Error thrown if the identity ID is not set in the IdentityRef
        :exception HttpError: Error thrown if the export operation fails.
        """
        if self.identity_id is None:
            raise ValueError("Identity ID of IdentityRef must be set in order to export an identity")

        self.logger.debug(f"Started export of {self.identity_id}")
        response = self.client.post_json(IdentitySourceRequestImpulse(self.identity_id), "/identity/source").content
        self.logger.debug(f"Completed export of {self.identity_id}")
        return of(response)
