from abc import ABCMeta, abstractmethod

from gaia_sdk.api.client_options import ClientOptions


class ITransporter:
    """
    Abstract transporter implementation. Transporter classes are used to establish a connection to G.A.I.A.
    """
    __metaclass__ = ABCMeta

    @abstractmethod
    def transport(self, options: ClientOptions, payload: dict): raise NotImplementedError
