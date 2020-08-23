import logging

import requests
from requests import Response

from gaia_sdk.api.client_options import ClientOptions
from gaia_sdk.api.transporter.abstract_transporter import ITransporter
from gaia_sdk.http.request.Payload import Payload


class HttpTransporter(ITransporter):
    """
    ITransporter implementation which is based on the HTTP protocol.
    """

    def __init__(self, url):
        self.url = url
        self.logger = logging.getLogger("HttpTransporter")

    def transport(self, options: ClientOptions, payload: Payload, url_post_fix: str = "") -> Response:
        data = payload.data
        headers = HttpTransporter.get_default_headers(options, data)
        url = self.url + url_post_fix
        self.logger.debug("request to %s header:%s payload:%r", url, headers, data)
        if payload.payload_type == Payload.JSON:
            response = requests.post(url, json=data, headers=headers)
        elif payload.payload_type == Payload.FORM_DATA:
            response = requests.post(url, files=data, headers=headers)
        else:
            raise ValueError(f"Unsupported type for payload {payload.payload_type}")
        self.logger.debug("response: %r", response)
        return response

    @staticmethod
    def build_authorization_header(options: ClientOptions, payload: dict) -> str:
        if options.credentials is None:
            raise ValueError("Authorization Header cannot be generated because no credentials are set")
        return options.credentials.create_auth_header(options, payload)

    @staticmethod
    def get_default_headers(options: ClientOptions, payload: dict) -> dict:
        if options.credentials is None:
            raise ValueError("Authorization Header cannot be generated because no credentials are set")
        return {"Authorization": options.credentials.create_auth_header(options, payload)}
