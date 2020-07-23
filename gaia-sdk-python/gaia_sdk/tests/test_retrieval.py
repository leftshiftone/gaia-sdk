import logging
import unittest
from rx import operators as ops
from uuid import uuid4

from gaia_sdk.gaia import Gaia
from gaia_sdk.api.GaiaCredentials import HMACCredentials
logging.basicConfig(level=logging.DEBUG)

class RxException(Exception):
    pass

# Helper function for raising exceptions within lambdas
def _raise(ex):
    raise RxException(ex)

class TestRetrieval(unittest.TestCase):


    def test_retrieve_codes(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()

        result = gaia_ref.retrieve_codes(str(uuid4()), config).pipe(ops.first()).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"

    def test_retrieve_code(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()
            x.reference()

        result = gaia_ref.retrieve_code(str(uuid4()), str(uuid4()), config).pipe(ops.first()).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"
        assert result.dictionary.get("reference") is not None, "Reference is in response"

    def test_retrieve_intents(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()
            x.qualifier()

        result = gaia_ref.retrieve_intents(str(uuid4()), config).pipe(ops.first()).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"

    def test_retrieve_intent(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()
            x.qualifier()
            x.reference()

        result = gaia_ref.retrieve_intent(str(uuid4()), str(uuid4()), config).pipe(ops.first()).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"
        assert result.dictionary.get("reference") is not None, "Reference is in response"

    def test_retrieve_prompts(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()

        result = gaia_ref.retrieve_prompts(str(uuid4()), config).pipe(ops.first()).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"

    def test_retrieve_prompt(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()
            x.reference()

        result = gaia_ref.retrieve_prompt(str(uuid4()), str(uuid4()), config).pipe(ops.first()).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"
        assert result.dictionary.get("reference") is not None, "Reference is in response"

    def test_retrieve_fulfilments(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()

        result = gaia_ref.retrieve_fulfilments(str(uuid4()), config).pipe(ops.first()).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"

    def test_retrieve_fulfilment(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()
            x.reference()

        result = gaia_ref.retrieve_fulfilment(str(uuid4()), str(uuid4()), config).pipe(ops.first()).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"
        assert result.dictionary.get("reference") is not None, "Reference is in response"

    def test_retrieve_statements(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()

        result = gaia_ref.retrieve_statements(str(uuid4()), config).pipe(ops.first()).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"

    def test_retrieve_statement(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()
            x.reference()

        result = gaia_ref.retrieve_statement(str(uuid4()), str(uuid4()), config).pipe(ops.first()).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"
        assert result.dictionary.get("reference") is not None, "Reference is in response"

    def test_retrieve_edges(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))


        def config(x):
            x.source()
            x.target()

        result = gaia_ref.retrieve_edges(str(uuid4()), config).pipe(ops.first()).run()
        assert result.dictionary.get("source") is not None, "source is in response"
        assert result.dictionary.get("target") is not None, "target is in response"

    def test_retrieve_edge(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))


        def config(x):
            x.source()
            x.target()

        result = gaia_ref.retrieve_edge(str(uuid4()), str(uuid4()), config).pipe(ops.first()).run()
        assert result.dictionary.get("source") is not None, "source is in response"
        assert result.dictionary.get("target") is not None, "target is in response"


if __name__ == '__main__':
    unittest.main()
