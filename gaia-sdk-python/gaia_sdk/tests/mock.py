from gaia_sdk.graphql.GaiaClientFactory import GaiaClientFactory
from gaia_sdk.graphql.GaiaClientBuilder import GaiaHttpClientBuilder
from gaia_sdk.graphql.GaiaClient import GaiaClient
from gaia_sdk.api.GaiaCredentials import GaiaCredentials

from gaia_sdk.api.client_options import ClientOptions
from gaia_sdk.http.request.Payload import Payload
from gaia_sdk.http.GaiaStreamClient import GaiaStreamClient
from gaia_sdk.http.GaiaStreamClientBuilder import GaiaStreamClientFactory
from gaia_sdk.http.GaiaStreamClientBuilder import GaiaHttpStreamClientBuilder
from requests import Response
from gaia_sdk.api.transporter.abstract_transporter import ITransporter

from gaia_sdk.api.GaiaCredentials import HMACCredentials
from gaia_sdk.gaia import Gaia
import json

def mock_gaia_ref(mock_response_handler):
    mock_client_factory = MockClientFactory()
    mock_client_factory.set_mock_response_handler(mock_response_handler)

    mock_stream_client_factory = MocktreamClientFactory()
    mock_stream_client_factory.set_mock_response_handler(mock_response_handler)

    Gaia._client_factory = mock_client_factory
    Gaia._stream_client_factory = mock_stream_client_factory

    return Gaia.connect("http://localhost:8080", HMACCredentials("mockedApiKey", "mockedApiSecret"))

class MockResponse(object):

    def __init__(self, content):
        self.content = content

    def json(self):
        return self.content

    def data(self):
        return self.content

class MockRequest(object):

    def __init__(self, options: ClientOptions, payload: Payload, url_post_fix: str = ""):
        self.options = options
        self.payload = payload
        self.url_post_fix = url_post_fix

    def __str__(self):
        return json.dumps({"options": { "content_type": self.options.content_type, "request_parameters": self.options.request_parameters}, "payload": self.payload.payload_type, "url_post_fix": self.url_post_fix})

class MockClientFactory(GaiaClientFactory):

    def http(self, url):
        self.client_builder = MockHttpClientBuilder(url)
        self.client_builder.set_mock_response_handler(self.mock_response_handler)
        return self.client_builder

    def set_mock_response_handler(self, mock_response_handler):
        self.mock_response_handler = mock_response_handler
        if hasattr(self, 'client_builder'):
            self.client_builder.set_mock_response_handler(mock_response_handler)

    def set_mock_response(self, mock_response):
        self.set_mock_response_handler(lambda request: mock_response)

class MocktreamClientFactory(GaiaStreamClientFactory):

    def http(self, url):
        self.client_builder = MockHttpStreamClientBuilder(url)
        self.client_builder.set_mock_response_handler(self.mock_response_handler)
        return self.client_builder

    def set_mock_response_handler(self, mock_response_handler):
        self.mock_response_handler = mock_response_handler
        if hasattr(self, 'client_builder'):
            self.client_builder.mock_response_handler(mock_response_handler)

    def set_mock_response(self, mock_response):
        self.set_mock_response_handler(lambda request: mock_response)

class MockTransporter(ITransporter):

    def set_mock_response_handler(self, mock_response_handler):
        self.mock_response_handler = mock_response_handler

    def transport(self, options: ClientOptions, payload: Payload, url_post_fix: str = "") -> Response:
        return self.mock_response_handler(MockRequest(options, payload, url_post_fix))

class MockHttpClientBuilder(GaiaHttpClientBuilder):

    def __init__(self, url):
        self.url = url

    def with_credentials(self, credentials):
        self.credentials = credentials
        return self

    def build(self):
        self.transporter = MockTransporter()
        self.set_mock_response_handler(self.mock_response_handler)
        return GaiaClient(self.transporter, ClientOptions(self.credentials))

    def set_mock_response_handler(self, mock_response_handler):
        self.mock_response_handler = mock_response_handler
        if hasattr(self, 'transporter'):
            self.transporter.set_mock_response_handler(mock_response_handler)

class MockHttpStreamClientBuilder(GaiaHttpStreamClientBuilder):

    def __init__(self, url):
        self.url = url

    def with_credentials(self, credentials: GaiaCredentials):
        self.credentials = credentials
        return self

    def build(self):
        self.transporter = MockTransporter()
        self.set_mock_response_handler(self.mock_response_handler)
        return GaiaStreamClient(self.transporter, ClientOptions(self.credentials))

    def set_mock_response_handler(self, mock_response_handler):
        self.mock_response_handler = mock_response_handler
        if hasattr(self, 'transporter'):
            self.transporter.set_mock_response_handler(mock_response_handler)
