import base64
from api.crypto import HMAC
import logging
import requests
import time
from gaia_sdk.graphql.GaiaScalars import UUID

import json
from gaia_sdk.api.ByteBuffer import ByteBuffer
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
            "Authorization": HttpTransporter.hmac_header(options, payload)
        }

        self.logger.debug("request header:%s payload:%r", headers, payload)
        response = requests.post(self.url, json=payload, headers=headers)
        self.logger.debug("response: %r", response)

        return response.json()

    @staticmethod
    def hmac_header(options: ClientOptions, payload: dict) -> str:
        """
        Authorization: "HMAC-SHA512 " + API_KEY + "_" +
        base64(hmac-sha512( content, content_type, sensor_type, timestamp, nonce )) + "_" + timestamp + "_" + nonce
        """
        timestamp = int(round(time.time()))  # todo: if this is a UTC timestamp
        nonce = UUID.random_uuid().value
        return HttpTransporter.generate_token(options, json.dumps(payload),timestamp,nonce)


    @staticmethod
    def generate_token(options: ClientOptions, payloadAsString: str, timestamp, nonce) -> str:
        """
        Authorization: "HMAC-SHA512 " + API_KEY + "_" +
        base64(hmac-sha512( content, content_type, sensor_type, timestamp, nonce )) + "_" + timestamp + "_" + nonce
        """
        arrayToHash = [base64.b64encode(payloadAsString.encode("utf-8")).decode(), options.content_type, "http", timestamp, nonce]
        prepareToHash= '_'.join([str(x) for x in arrayToHash])
        hmac = HMAC(options.credentials.apiSecret)

        signature = hmac.hash512(prepareToHash)
        token = "HMAC-SHA512 " + options.credentials.apiKey + "_" + signature + "_" + str(timestamp) + "_" + nonce
        return token

