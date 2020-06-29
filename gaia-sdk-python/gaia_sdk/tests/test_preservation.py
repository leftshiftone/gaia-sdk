import logging
import unittest
from rx import operators as ops
from uuid import uuid4

from gaia_sdk.gaia import Gaia
from gaia_sdk.api.GaiaCredentials import HMACCredentials
from gaia_sdk.graphql.request.input.CreateBehaviourImpulse import CreateBehaviourImpulse
from gaia_sdk.graphql.request.input.CreateCodeImpulse import CreateCodeImpulse
from gaia_sdk.graphql.request.input.CreateFulfilmentImpulse import CreateFulfilmentImpulse
from gaia_sdk.graphql.request.input.CreateIntentImpulse import CreateIntentImpulse
from gaia_sdk.graphql.request.input.CreatePromptImpulse import CreatePromptImpulse
from gaia_sdk.graphql.request.input.CreateStatementImpulse import CreateStatementImpulse
from gaia_sdk.graphql.request.input.CreateEdgeImpulse import CreateEdgeImpulse
from gaia_sdk.graphql.request.input.DeleteBehaviourImpulse import DeleteBehaviourImpulse
from gaia_sdk.graphql.request.input.DeleteCodeImpulse import DeleteCodeImpulse
from gaia_sdk.graphql.request.input.DeleteFulfilmentImpulse import DeleteFulfilmentImpulse
from gaia_sdk.graphql.request.input.DeleteIntentImpulse import DeleteIntentImpulse
from gaia_sdk.graphql.request.input.DeletePromptImpulse import DeletePromptImpulse
from gaia_sdk.graphql.request.input.DeleteStatementImpulse import DeleteStatementImpulse
from gaia_sdk.graphql.request.input.DeleteEdgeImpulse import DeleteEdgeImpulse
from gaia_sdk.graphql.request.input.UpdateBehaviourImpulse import UpdateBehaviourImpulse
from gaia_sdk.graphql.request.input.UpdateCodeImpulse import UpdateCodeImpulse
from gaia_sdk.graphql.request.input.UpdateFulfilmentImpulse import UpdateFulfilmentImpulse
from gaia_sdk.graphql.request.input.UpdateIntentImpulse import UpdateIntentImpulse
from gaia_sdk.graphql.request.input.UpdatePromptImpulse import UpdatePromptImpulse
from gaia_sdk.graphql.request.input.UpdateStatementImpulse import UpdateStatementImpulse

logging.basicConfig(level=logging.DEBUG)

class RxException(Exception):
    pass

class TestPreservation(unittest.TestCase):

    def test_preserve_create_intent(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        impulses = CreateIntentImpulse(str(uuid4()), "", "", dict(), list(), "")
        result = gaia_ref.preserve_create_intents([impulses]).pipe(ops.first()).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_update_intent(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        impulses = UpdateIntentImpulse(str(uuid4()), str(uuid4()), "", "", dict(), list(), "")
        result = gaia_ref.preserve_update_intents([impulses]).pipe(ops.first()).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_delete_intent(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        impulses = DeleteIntentImpulse(str(uuid4()), str(uuid4()))
        result = gaia_ref.preserve_delete_intents([impulses]).pipe(ops.first()).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_create_prompt(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        impulses = CreatePromptImpulse(str(uuid4()), "", "", dict(), list(), "")
        result = gaia_ref.preserve_create_prompts([impulses]).pipe(ops.first()).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_update_prompt(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        impulses = UpdatePromptImpulse(str(uuid4()), str(uuid4()), "", "", dict(), list(), "")
        result = gaia_ref.preserve_update_prompts([impulses]).pipe(ops.first()).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_delete_prompt(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        impulses = DeletePromptImpulse(str(uuid4()), str(uuid4()))
        result = gaia_ref.preserve_delete_prompts([impulses]).pipe(ops.first()).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_create_statement(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        impulses = CreateStatementImpulse(str(uuid4()), "", "", dict(), list(), "")
        result = gaia_ref.preserve_create_statements([impulses]).pipe(ops.first()).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_update_statement(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        impulses = UpdateStatementImpulse(str(uuid4()), str(uuid4()), "", "", dict(), list(), "")
        result = gaia_ref.preserve_update_statements([impulses]).pipe(ops.first()).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_delete_statement(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        impulses = DeleteStatementImpulse(str(uuid4()), str(uuid4()))
        result = gaia_ref.preserve_delete_statements([impulses]).pipe(ops.first()).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_create_fulfilment(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        impulses = CreateFulfilmentImpulse(str(uuid4()), "", "", dict(), list(), "")
        result = gaia_ref.preserve_create_fulfilments([impulses]).pipe(ops.first()).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_update_fulfilment(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        impulses = UpdateFulfilmentImpulse(str(uuid4()), str(uuid4()), "", "", dict(), list(), "")
        result = gaia_ref.preserve_update_fulfilments([impulses]).pipe(ops.first()).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_delete_fulfilment(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        impulses = DeleteFulfilmentImpulse(str(uuid4()), str(uuid4()))
        result = gaia_ref.preserve_delete_fulfilments([impulses]).pipe(ops.first()).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_create_behaviour(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        impulses = CreateBehaviourImpulse(str(uuid4()), "", "", "", list(), "")
        result = gaia_ref.preserve_create_behaviours([impulses]).pipe(ops.first()).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_update_behaviour(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        impulses = UpdateBehaviourImpulse(str(uuid4()), str(uuid4()), "", "", "", list(), "")
        result = gaia_ref.preserve_update_behaviours([impulses]).pipe(ops.first()).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_delete_behaviour(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        impulses = DeleteBehaviourImpulse(str(uuid4()), str(uuid4()))
        result = gaia_ref.preserve_delete_behaviours([impulses]).pipe(ops.first()).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_create_code(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        impulses = CreateCodeImpulse(str(uuid4()), "", "", dict(), "", list(), "")
        result = gaia_ref.preserve_create_codes([impulses]).pipe(ops.first()).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_update_code(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        impulses = UpdateCodeImpulse(str(uuid4()), str(uuid4()), "", "", dict(), "", list(), "")
        result = gaia_ref.preserve_update_codes([impulses]).pipe(ops.first()).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_delete_code(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        impulses = DeleteCodeImpulse(str(uuid4()), str(uuid4()))
        result = gaia_ref.preserve_delete_codes([impulses]).pipe(ops.first()).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_create_edge(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        impulses = CreateEdgeImpulse(str(uuid4()), str(uuid4()), "sometype", 2.7)
        result = gaia_ref.preserve_create_edges([impulses]).pipe(ops.first()).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_delete_edge(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))

        impulses = DeleteEdgeImpulse(str(uuid4()), str(uuid4()))
        result = gaia_ref.preserve_delete_edges([impulses]).pipe(ops.first()).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

if __name__ == '__main__':
    unittest.main()
