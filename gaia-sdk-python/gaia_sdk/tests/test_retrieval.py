import logging
import unittest
from uuid import uuid4

from rx import operators as ops, pipe

from gaia_sdk.api.GaiaCredentials import HMACCredentials
from gaia_sdk.gaia import Gaia
import pytest
logging.basicConfig(level=logging.DEBUG)


class RxException(Exception):
    pass


# Helper function for raising exceptions within lambdas
def _raise(ex):
    raise RxException(ex)

@pytest.mark.skip(reason="...")
class TestRetrieval(unittest.TestCase):

    def test_retrieve_codes(self):
        gaia_ref = Gaia.connect("http://localhost:8080", HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()

        result = pipe(ops.first())(gaia_ref.retrieve_codes(str(uuid4()), config)).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"

    def test_retrieve_paginated_codes(self):
        gaia_ref = Gaia.connect("http://localhost:8080", HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()
            x.qualifier()

        result = pipe(ops.to_list())(gaia_ref.retrieve_codes(str(uuid4()), config, 10, 100)).run()

        assert len(result) == 10, "Count does not match"

        latestExpectedIndex = 100
        for i in range(10):
            latestExpectedIndex += 1
            assert result[i].dictionary.get("qualifier") == str(latestExpectedIndex), "index does not match"

    def test_retrieve_code(self):
        gaia_ref = Gaia.connect("http://localhost:8080", HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()
            x.reference()

        result = pipe(ops.first())(gaia_ref.retrieve_code(str(uuid4()), str(uuid4()), config)).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"
        assert result.dictionary.get("reference") is not None, "Reference is in response"

    def test_retrieve_identities(self):
        gaia_ref = Gaia.connect("http://localhost:8080", HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()
            x.qualifier()

        result = pipe(ops.first())(gaia_ref.retrieve_identities(config)).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"

    def test_retrieve_paginated_identities(self):
        gaia_ref = Gaia.connect("http://localhost:8080", HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()
            x.qualifier()

        result = pipe(ops.to_list())(gaia_ref.retrieve_identities(config, 10, 100)).run()

        assert len(result) == 10, "Count does not match"

        latestExpectedIndex = 100
        for i in range(10):
            latestExpectedIndex += 1
            assert result[i].dictionary.get("qualifier") == str(latestExpectedIndex), "index does not match"

    def test_retrieve_identity(self):
        gaia_ref = Gaia.connect("http://localhost:8080", HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()
            x.qualifier()

        result = pipe(ops.first())(gaia_ref.retrieve_identity(str(uuid4()), config)).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"
        assert result.dictionary.get("qualifier") is not None, "Qualifier is in response"

    def test_retrieve_intents(self):
        gaia_ref = Gaia.connect("http://localhost:8080", HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()
            x.qualifier()

        result = pipe(ops.first())(gaia_ref.retrieve_intents(str(uuid4()), config)).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"

    def test_retrieve_paginated_intents(self):
        gaia_ref = Gaia.connect("http://localhost:8080", HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()
            x.qualifier()

        result = pipe(ops.to_list())(gaia_ref.retrieve_intents(str(uuid4()), config, 10, 100)).run()

        assert len(result) == 10, "Count does not match"

        latestExpectedIndex = 100
        for i in range(10):
            latestExpectedIndex += 1
            assert result[i].dictionary.get("qualifier") == str(latestExpectedIndex), "index does not match"

    def test_retrieve_intent(self):
        gaia_ref = Gaia.connect("http://localhost:8080", HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()
            x.qualifier()
            x.reference()

        result = pipe(ops.first())(gaia_ref.retrieve_intent(str(uuid4()), str(uuid4()), config)).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"
        assert result.dictionary.get("reference") is not None, "Reference is in response"

    def test_retrieve_prompts(self):
        gaia_ref = Gaia.connect("http://localhost:8080", HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()

        result = pipe(ops.first())(gaia_ref.retrieve_prompts(str(uuid4()), config)).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"

    def test_retrieve_paginated_prompts(self):
        gaia_ref = Gaia.connect("http://localhost:8080", HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()
            x.qualifier()

        result = pipe(ops.to_list())(gaia_ref.retrieve_prompts(str(uuid4()), config, 10, 100)).run()

        assert len(result) == 10, "Count does not match"

        latestExpectedIndex = 100
        for i in range(10):
            latestExpectedIndex += 1
            assert result[i].dictionary.get("qualifier") == str(latestExpectedIndex), "index does not match"

    def test_retrieve_prompt(self):
        gaia_ref = Gaia.connect("http://localhost:8080", HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()
            x.reference()

        result = pipe(ops.first())(gaia_ref.retrieve_prompt(str(uuid4()), str(uuid4()), config)).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"
        assert result.dictionary.get("reference") is not None, "Reference is in response"

    def test_retrieve_fulfilments(self):
        gaia_ref = Gaia.connect("http://localhost:8080", HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()

        result = pipe(ops.first())(gaia_ref.retrieve_fulfilments(str(uuid4()), config)).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"

    def test_retrieve_paginated_fulfilments(self):
        gaia_ref = Gaia.connect("http://localhost:8080", HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()
            x.qualifier()

        result = pipe(ops.to_list())(gaia_ref.retrieve_fulfilments(str(uuid4()), config, 10, 100)).run()

        assert len(result) == 10, "Count does not match"

        latestExpectedIndex = 100
        for i in range(10):
            latestExpectedIndex += 1
            assert result[i].dictionary.get("qualifier") == str(latestExpectedIndex), "index does not match"

    def test_retrieve_fulfilment(self):
        gaia_ref = Gaia.connect("http://localhost:8080", HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()
            x.reference()

        result = pipe(ops.first())(gaia_ref.retrieve_fulfilment(str(uuid4()), str(uuid4()), config)).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"
        assert result.dictionary.get("reference") is not None, "Reference is in response"

    def test_retrieve_statements(self):
        gaia_ref = Gaia.connect("http://localhost:8080", HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()

        result = pipe(ops.first())(gaia_ref.retrieve_statements(str(uuid4()), config)).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"

    def test_retrieve_paginated_statements(self):
        gaia_ref = Gaia.connect("http://localhost:8080", HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()
            x.qualifier()

        result = pipe(ops.to_list())(gaia_ref.retrieve_statements(str(uuid4()), config, 10, 100)).run()

        assert len(result) == 10, "Count does not match"

        latestExpectedIndex = 100
        for i in range(10):
            latestExpectedIndex += 1
            assert result[i].dictionary.get("qualifier") == str(latestExpectedIndex), "index does not match"

    def test_retrieve_statement(self):
        gaia_ref = Gaia.connect("http://localhost:8080", HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()
            x.reference()

        result = pipe(ops.first())(gaia_ref.retrieve_statement(str(uuid4()), str(uuid4()), config)).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"
        assert result.dictionary.get("reference") is not None, "Reference is in response"

    def test_retrieve_edges(self):
        gaia_ref = Gaia.connect("http://localhost:8080", HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.source()
            x.target()

        result = pipe(ops.first())(gaia_ref.retrieve_edges(str(uuid4()), config)).run()
        assert result.dictionary.get("source") is not None, "source is in response"
        assert result.dictionary.get("target") is not None, "target is in response"

    def test_retrieve_paginated_edges(self):
        gaia_ref = Gaia.connect("http://localhost:8080", HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.source()
            x.target()
            x.type()

        result = pipe(ops.to_list())(gaia_ref.retrieve_edges(str(uuid4()), config, 10, 100)).run()

        assert len(result) == 10, "Count does not match"

        latestExpectedIndex = 100
        for i in range(10):
            latestExpectedIndex += 1
            assert result[i].dictionary.get("type") == str(latestExpectedIndex), "index does not match"

    def test_retrieve_edge(self):
        gaia_ref = Gaia.connect("http://localhost:8080", HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.source()
            x.target()

        result = pipe(ops.first())(gaia_ref.retrieve_edge(str(uuid4()), str(uuid4()), config)).run()
        assert result.dictionary.get("source") is not None, "source is in response"
        assert result.dictionary.get("target") is not None, "target is in response"


if __name__ == '__main__':
    unittest.main()
