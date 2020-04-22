from abc import ABCMeta, abstractmethod


class ITransporter:
    """
    Abstract transporter implementation. Transporter classes are used to establish a connection to G.A.I.A.
    """
    __metaclass__ = ABCMeta

    @abstractmethod
    def transport(self, payload: {}): raise NotImplementedError
