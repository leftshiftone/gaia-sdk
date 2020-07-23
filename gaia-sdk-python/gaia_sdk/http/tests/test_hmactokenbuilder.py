import unittest
import base64
import time
from gaia_sdk.graphql.GaiaScalars import UUID
from api.crypto import HMAC
from gaia_sdk.api.GaiaCredentials import HMACCredentials
from gaia_sdk.http.HttpTransporter import HttpTransporter
from gaia_sdk.http.HMACTokenBuilder import HMACTokenBuilder
from gaia_sdk.api.client_options import ClientOptions


class TestHMACTokenBuilder(unittest.TestCase):

    def test_generate_token(self):
        options = ClientOptions(HMACCredentials("apiKey","secret"))
        timestamp = int(1592924470)
        payload = "hi"
        nonce = "353823db-c12b-44b2-b0dc-c4d813c74b24"
        expectedToken="HMAC-SHA512 apiKey_MzE5ZjQyNzg3ZTgyZGJhNmE3YTBiNjI5ODA5MjIzMzk2YzRhMTg1MmNlOWUwYzhiYTNiZmQ0MTkxY2NlMDg1YTVlMWM0Y2UwM2QzNzNlM2NhYWIxMzcxMTU5MTQxNTJkNzFhMmEwMmY3OGIwNTZmNjA0NTJkZDJlYzg2ZDE1MjU=_1592924470_353823db-c12b-44b2-b0dc-c4d813c74b24"
        token = HMACTokenBuilder().with_payload(payload).with_nonce(nonce).with_timestamp(timestamp).with_client_options(options).build()
        self.assertEqual(token, expectedToken)


if __name__ == '__main__':
    unittest.main()
