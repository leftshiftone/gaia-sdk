from gaia_sdk.api.client_options import ClientOptions
from gaia_sdk.http.HttpTransporter import HttpTransporter
from gaia_sdk.graphql.GaiaClient import GaiaClient

class GaiaClientFactory:

    def http(self, url):
        return GaiaHttpClientBuilder(url)
