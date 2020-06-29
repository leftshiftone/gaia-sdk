import unittest
import base64

from api.crypto import HMAC


class TestHMAC(unittest.TestCase):

    def test_hash(self):
        hmac = HMAC("secret")
        self.assertEqual(hmac.hash("data"), 'GywWt1vSqHDBFBU8zaW8/KYzFLxyL6Fg1pDeEzzLuds=')
        self.assertEqual(hmac.hash("data"), 'GywWt1vSqHDBFBU8zaW8/KYzFLxyL6Fg1pDeEzzLuds=')

    def test_hash512(self):
        hmac = HMAC("secret")
        toHash= "aGk=_application/json_http_1592924470_353823db-c12b-44b2-b0dc-c4d813c74b24"
        self.assertEqual(hmac.hash512(toHash), 'MzE5ZjQyNzg3ZTgyZGJhNmE3YTBiNjI5ODA5MjIzMzk2YzRhMTg1MmNlOWUwYzhiYTNiZmQ0MTkxY2NlMDg1YTVlMWM0Y2UwM2QzNzNlM2NhYWIxMzcxMTU5MTQxNTJkNzFhMmEwMmY3OGIwNTZmNjA0NTJkZDJlYzg2ZDE1MjU=')

if __name__ == '__main__':
    unittest.main()
