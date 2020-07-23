import base64
import hashlib
import hmac


class HMAC:
    """
    This class is used to encrypt the data before sending it to G.A.I.A.
    """

    def __init__(self, secret):
        self.secret = secret

    def hash512(self, data):
        """
        Hashes the given string data.
        """
        key = self.secret.encode("UTF-8")
        msg = data.encode("UTF-8")

        dig = hmac.new(key, msg=msg, digestmod=hashlib.sha512).hexdigest()
        return base64.b64encode(dig.encode("utf-8")).decode()

    def hash(self, data):
        """
        Hashes the given string data.
        """
        key = self.secret.encode("UTF-8")
        msg = data.encode("UTF-8")

        dig = hmac.new(key, msg=msg, digestmod=hashlib.sha256).digest()
        return base64.b64encode(dig).decode()
