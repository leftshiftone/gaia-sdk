from gaia_sdk.api.GaiaCredentials import GaiaCredentials
from gaia_sdk.api.client_options import ClientOptions
from gaia_sdk.http.GaiaStreamClient import GaiaStreamClient
from gaia_sdk.http.HttpTransporter import HttpTransporter


class GaiaStreamClientBuilder(object):

    @staticmethod
    def http(url):
        return GaiaStreamClientBuilder(url)

    def __init__(self, url):
        self.url = url

    def with_credentials(self, credentials: GaiaCredentials):
        self.credentials = credentials
        return self

    def build(self):
        return GaiaStreamClient(HttpTransporter(self.url), ClientOptions(self.credentials))
