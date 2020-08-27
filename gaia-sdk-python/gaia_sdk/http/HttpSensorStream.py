from gaia_sdk.api.DataRef import DataRef
from gaia_sdk.api.ISensorStream import ISensorStream
from gaia_sdk.http.GaiaStreamClientBuilder import GaiaStreamClientBuilder


class HttpSensorStream(ISensorStream):

    def __init__(self, url: str, credentials):
        self.client = GaiaStreamClientBuilder.http(url + "/api").with_credentials(credentials).build()

    def data(self, uri: str):
        return DataRef(uri, self.client)
