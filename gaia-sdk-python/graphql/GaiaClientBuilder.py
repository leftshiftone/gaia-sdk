from api.client_options import ClientOptions
from http.http_transport import HttpTransport
from graphql.GaiaClient import GaiaClient


class GaiaClientBuilder(object):

    @staticmethod
    def http(url):
        return GaiaClientBuilder(url)

    def __init__(self, url):
        self.url = url

    def with_apikey(self, apikey):
        self.apikey = apikey
        return self

    def with_secret(self, secret):
        self.secret = secret
        return self

    def build(self):
        return GaiaClient(HttpTransport(self.url, ClientOptions(self.apikey, self.secret)))
