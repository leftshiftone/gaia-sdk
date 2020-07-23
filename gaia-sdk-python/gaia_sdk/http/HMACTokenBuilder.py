from api.client_options import ClientOptions
import base64
from api.crypto import HMAC


#Class generated from template src/main/resources/template/python/ClientBuilderTemplate.vm

class HMACTokenBuilder(object):

    def with_client_options(self, client_options):
        self.client_options = client_options
        return self

    def with_nonce(self, nonce):
        self.nonce = nonce
        return self

    def with_payload(self, payload):
        self.payload = payload
        return self

    def with_timestamp(self, timestamp):
        self.timestamp = timestamp
        return self

    def build(self):
        """
        Authorization: "HMAC-SHA512 " + API_KEY + "_" +
        base64(hmac-sha512( content, content_type, sensor_type, timestamp, nonce )) + "_" + timestamp + "_" + nonce
        """
        HTTP_SENSOR_TYPE = "http"
        sep = "_"

        arrayToHash = [base64.b64encode(self.payload.encode("utf-8")).decode(), self.client_options.content_type, HTTP_SENSOR_TYPE, self.timestamp, self.nonce]
        prepareToHash= '_'.join([str(x) for x in arrayToHash])
        hmac = HMAC(self.client_options.credentials.apiSecret)

        signature = hmac.hash512(prepareToHash)
        token = "HMAC-SHA512 " + self.client_options.credentials.apiKey + sep + signature + sep + str(self.timestamp) + sep + self.nonce
        return token
