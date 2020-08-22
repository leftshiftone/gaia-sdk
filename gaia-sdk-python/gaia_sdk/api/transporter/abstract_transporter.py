from abc import ABCMeta, abstractmethod

from requests import Response

from gaia_sdk.api.client_options import ClientOptions
from gaia_sdk.http.request.Payload import Payload


class ITransporter:
    """
    Abstract transporter implementation. Transporter classes are used to establish a connection to G.A.I.A.
    """
    __metaclass__ = ABCMeta

    @abstractmethod
    def transport(self, options: ClientOptions, payload: Payload, url_post_fix: str = "") -> Response: raise NotImplementedError
