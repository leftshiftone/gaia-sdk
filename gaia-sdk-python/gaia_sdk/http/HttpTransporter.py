import base64
from api.crypto import HMAC
import logging
import requests
import time
from gaia_sdk.graphql.GaiaScalars import UUID

import json
from gaia_sdk.api.ByteBuffer import ByteBuffer
from gaia_sdk.api.GaiaCredentials import JWTTokenCredentials
from gaia_sdk.api.GaiaCredentials import HMacCredentials
from gaia_sdk.api.client_options import ClientOptions
from gaia_sdk.api.transporter.abstract_transporter import ITransporter


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
        if (type(options.credentials) is HMacCredentials):
            return HttpTransporter.build_hmac_header(options,payload)
        else: #//TODO check if is JWT Token and otherwise exception
            return HttpTransporter.build_bearer_header(options)

    @staticmethod
    def build_bearer_header(options: ClientOptions) -> str:
        token = "Bearer " + options.credentials.token
        return token

    @staticmethod
    def build_hmac_header(options: ClientOptions, payload: dict) -> str:
        timestamp = int(round(time.time()))
        nonce = UUID.random_uuid().value
        return HttpTransporter.build_hmac_token(options, json.dumps(payload),timestamp,nonce)


    @staticmethod
    def build_hmac_token(options: ClientOptions, payloadAsString: str, timestamp, nonce) -> str:
        """
        Authorization: "HMAC-SHA512 " + API_KEY + "_" +
        base64(hmac-sha512( content, content_type, sensor_type, timestamp, nonce )) + "_" + timestamp + "_" + nonce
        """
        HTTP_SENSOR_TYPE = "http"
        sep = "_"

        arrayToHash = [base64.b64encode(payloadAsString.encode("utf-8")).decode(), options.content_type, HTTP_SENSOR_TYPE, timestamp, nonce]
        prepareToHash= '_'.join([str(x) for x in arrayToHash])
        hmac = HMAC(options.credentials.apiSecret)

        signature = hmac.hash512(prepareToHash)
        token = "HMAC-SHA512 " + options.credentials.apiKey + sep + signature + sep + str(timestamp) + sep + nonce
        return token

