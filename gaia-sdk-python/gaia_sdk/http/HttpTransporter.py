import base64
from api.crypto import HMAC
import logging
import requests
import time
from gaia_sdk.graphql.GaiaScalars import UUID

import json
from gaia_sdk.api.ByteBuffer import ByteBuffer
from gaia_sdk.api.GaiaCredentials import JWTCredentials
from gaia_sdk.api.GaiaCredentials import HMACCredentials
from gaia_sdk.api.client_options import ClientOptions
from gaia_sdk.api.transporter.abstract_transporter import ITransporter
from gaia_sdk.http.HMACTokenBuilder import HMACTokenBuilder


class HttpTransporter(ITransporter):
    """
    ITransporter implementation which is based on the HTTP protocol.
    """

    def __init__(self, url):
        self.url = url
        self.logger = logging.getLogger("HttpTransporter")

    def transport(self, options: ClientOptions, payload: dict):
        headers = {
            "Content-Type": "application/json",
            "Authorization": HttpTransporter.buildAuthorizationHeader(options, payload)
        }

        self.logger.debug("request header:%s payload:%r", headers, payload)
        response = requests.post(self.url, json=payload, headers=headers)
        self.logger.debug("response: %r", response)

        return response.json()

    @staticmethod
    def buildAuthorizationHeader(options: ClientOptions, payload: dict) -> str:
        if (type(options.credentials) is None):
            raise ValueError("Authorization Header cannot be generated because no credentials are set")
        elif (type(options.credentials) is HMACCredentials):
            return HttpTransporter.build_hmac_header(options,payload)
        elif (type(options.credentials) is JWTCredentials):
            return HttpTransporter.build_bearer_header(options)
        else:
            raise ValueError("Authorization Header cannot be generated because illegal credential type")

    @staticmethod
    def build_bearer_header(options: ClientOptions) -> str:
        token = "Bearer " + options.credentials.token
        return token

    @staticmethod
    def build_hmac_header(options: ClientOptions, payload: dict) -> str:
        timestamp = int(round(time.time()))
        nonce = UUID.random_uuid().value
        return HMACTokenBuilder().with_timestamp(timestamp).with_client_options(options).with_nonce(nonce).with_payload(json.dumps(payload)).build()



