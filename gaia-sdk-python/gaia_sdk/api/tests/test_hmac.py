import unittest

from api.crypto import HMAC


class TestHMAC(unittest.TestCase):

    def test_hash(self):
        hmac = HMAC("secret")
        self.assertEqual(hmac.hash("data"), 'GywWt1vSqHDBFBU8zaW8/KYzFLxyL6Fg1pDeEzzLuds=')
        self.assertEqual(hmac.hash("data"), 'GywWt1vSqHDBFBU8zaW8/KYzFLxyL6Fg1pDeEzzLuds=')


if __name__ == '__main__':
    unittest.main()
