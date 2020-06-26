from api.client_options import ClientOptions
from gaia_sdk.http.HttpTransporter import HttpTransporter
from graphql.GaiaClient import GaiaClient

#Class generated from template src/main/resources/template/python/ClientBuilderTemplate.vm

class GaiaClientBuilder(object):

    @staticmethod
    def http(url):
        return GaiaClientBuilder(url)

    def __init__(self, url):
        self.url = url

    def with_credentials(self, credentials):
        self.credentials = credentials
        return self

    def build(self):
        return GaiaClient(HttpTransporter(self.url), ClientOptions(self.credentials))
