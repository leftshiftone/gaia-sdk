import unittest

from gaia_sdk.api.GaiaCredentials import HMACCredentials
from gaia_sdk.api.client_options import ClientOptions
from gaia_sdk.http.HMACTokenBuilder import HMACTokenBuilder


class TestHMACTokenBuilder(unittest.TestCase):

    def test_generate_token(self):
        options = ClientOptions(HMACCredentials("apiKey", "secret"))
        timestamp = int(1592924470)
        payload = "hi"
        nonce = "353823db-c12b-44b2-b0dc-c4d813c74b24"
        expected_token = "HMAC-SHA512 apiKey_ZmQ4ZTE2ZGVlYWIyZjIxODgyN2MxYzY3NWNhZjBkMWYxZjdmZmRkYjRhM2U4MWI5MWVkNzc3M2QzYjkwYmM1MWI2YTU1NzY1Y2EzZmRkMTNiZjgyZDY0NzJiZmFkZGM0NTM1MGY1NzdiYmNjNzM3YzZmMzczZTZmMGM0ZWExMjE=_1592924470_353823db-c12b-44b2-b0dc-c4d813c74b24"
        token = HMACTokenBuilder().with_payload(payload) \
            .with_nonce(nonce) \
            .with_timestamp(timestamp) \
            .with_client_options(options).build()
        self.assertEqual(token, expected_token)


if __name__ == '__main__':
    unittest.main()
