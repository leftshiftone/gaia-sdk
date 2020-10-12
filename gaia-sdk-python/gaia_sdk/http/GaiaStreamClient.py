from requests import Response
from typing import Dict
from typing import Any

from gaia_sdk.api.client_options import ClientOptions
from gaia_sdk.api.transporter.abstract_transporter import ITransporter
from gaia_sdk.http.request.Payload import Payload
from copy import deepcopy


class GaiaStreamClient(object):
    transporter: ITransporter
    options: ClientOptions

    def __init__(self, transporter: ITransporter, options: ClientOptions):
        self.transporter = transporter
        self.options = options

    def __eq__(self, other):
        return self.options == other.options

    def __repr__(self):
        return {'options': self.options}

    def post_json(self, payload, url_postfix: str = "") -> Response:
        if self._is_dataclass(payload) and not isinstance(payload, type):
            payload = payload.__repr__()
        return self.transporter.transport(self.options, Payload.json(payload), url_postfix)

    def post_form_data(self, payload, url_postfix: str = "") -> Response:
        return self.transporter.transport(self.options, Payload.form_data(payload), url_postfix)

    def post_stream(self, data, request_parameters: Dict[str, Any], url_postfix: str = "") -> Response:
        opts = self.options\
            .with_request_parameters(request_parameters)\
            .with_content_type("application/octet-stream")
        return self.transporter.transport(opts, Payload.stream(data), url_postfix)

    @staticmethod
    def _is_dataclass(obj) -> bool:
        return isinstance(obj.__repr__(), dict)
