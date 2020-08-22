from dataclasses import dataclass, is_dataclass, asdict

from requests import Response

from gaia_sdk.api.client_options import ClientOptions
from gaia_sdk.api.transporter.abstract_transporter import ITransporter
from gaia_sdk.http.request.Payload import Payload


@dataclass
class GaiaStreamClient(object):
    transporter: ITransporter
    options: ClientOptions

    def post_json(self, payload, url_postfix: str = "") -> Response:
        if is_dataclass(payload) and not isinstance(payload, type):
            payload = asdict(payload)
        return self.transporter.transport(self.options, Payload.json(payload), url_postfix)

    def post_form_data(self, payload, url_postfix: str = "") -> Response:
        return self.transporter.transport(self.options, Payload.form_data(payload), url_postfix)
