from typing import Any
from typing import Dict


class ClientOptions:
    """
    This class stores the credentials (JWT or HMAC-ApiKey&SecretKey tuple) used by the transporter implementation
    to establish a connection to G.A.I.A.
    """

    def __init__(self, credentials, content_type="application/json", request_parameters={}):
        self.credentials = credentials
        self.content_type = content_type
        self.request_parameters = request_parameters

    def with_content_type(self, content_type: str):
        return ClientOptions(self.credentials, content_type, self.request_parameters)

    def with_request_parameters(self, request_parameters: Dict[str, Any]):
        return ClientOptions(self.credentials, self.content_type, request_parameters)
