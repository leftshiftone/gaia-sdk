from gaia_sdk.graphql.GaiaClientBuilder import GaiaHttpClientBuilder


class GaiaClientFactory:

    def http(self, url):
        return GaiaHttpClientBuilder(url)
