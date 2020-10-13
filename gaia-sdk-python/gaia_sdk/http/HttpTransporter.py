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
        if payload.payload_type == Payload.STREAM:
            data = payload.binaryData
        else:
            data = payload.data

        headers = HttpTransporter.get_default_headers(options, data)
        url = self.url + url_post_fix
        self.logger.debug("request to %s header:%s payload:%r", url, headers, data)
        if payload.payload_type == Payload.JSON:
            response = requests.post(url, json=data, headers=headers)
        elif payload.payload_type == Payload.FORM_DATA:
            response = requests.post(url, files=data, headers=headers)
        elif payload.payload_type == Payload.STREAM:
            response = requests.post(url, data=data, headers=headers, params=options.request_parameters)
        else:
            raise ValueError(f"Unsupported type for payload {payload.payload_type}")
        self.logger.debug("response: %r", response)
        if response.status_code != 200:
            raise self.__raise_for_status_code(unsuccessful_response=response)
        return response

    def __raise_for_status_code(self, unsuccessful_response: Response) -> Exception:

        def with_message(response: Response, message: str):
            return Exception(f"[{response.status_code}] - " + message)

        if unsuccessful_response.status_code == 401:
            return with_message(unsuccessful_response,
                                f"Could not authenticate with '{unsuccessful_response.url}': {unsuccessful_response.text}")
        if unsuccessful_response.status_code == 500:
            return with_message(unsuccessful_response, f"Server error: '{unsuccessful_response.text}'")
        return with_message(unsuccessful_response, f"Unknown error occurred: {unsuccessful_response.text}")

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
