import logging
import unittest
from uuid import uuid4

from rx import operators as ops, pipe

from gaia_sdk.api.GaiaCredentials import HMACCredentials
from gaia_sdk.gaia import Gaia
from gaia_sdk.graphql.request.input.CreateBehaviourImpulse import CreateBehaviourImpulse
from gaia_sdk.graphql.request.input.CreateCodeImpulse import CreateCodeImpulse
from gaia_sdk.graphql.request.input.CreateEdgeImpulse import CreateEdgeImpulse
from gaia_sdk.graphql.request.input.CreateFulfilmentImpulse import CreateFulfilmentImpulse
from gaia_sdk.graphql.request.input.CreateIdentityImpulse import CreateIdentityImpulse
from gaia_sdk.graphql.request.input.CreateIntentImpulse import CreateIntentImpulse
from gaia_sdk.graphql.request.input.CreatePromptImpulse import CreatePromptImpulse
from gaia_sdk.graphql.request.input.CreateStatementImpulse import CreateStatementImpulse
from gaia_sdk.graphql.request.input.DeleteBehaviourImpulse import DeleteBehaviourImpulse
from gaia_sdk.graphql.request.input.DeleteCodeImpulse import DeleteCodeImpulse
from gaia_sdk.graphql.request.input.DeleteEdgeImpulse import DeleteEdgeImpulse
from gaia_sdk.graphql.request.input.DeleteFulfilmentImpulse import DeleteFulfilmentImpulse
from gaia_sdk.graphql.request.input.DeleteIdentityImpulse import DeleteIdentityImpulse
from gaia_sdk.graphql.request.input.DeleteIntentImpulse import DeleteIntentImpulse
from gaia_sdk.graphql.request.input.DeletePromptImpulse import DeletePromptImpulse
from gaia_sdk.graphql.request.input.DeleteStatementImpulse import DeleteStatementImpulse
from gaia_sdk.graphql.request.input.UpdateBehaviourImpulse import UpdateBehaviourImpulse
from gaia_sdk.graphql.request.input.UpdateCodeImpulse import UpdateCodeImpulse
from gaia_sdk.graphql.request.input.UpdateFulfilmentImpulse import UpdateFulfilmentImpulse
from gaia_sdk.graphql.request.input.UpdateIdentityImpulse import UpdateIdentityImpulse
from gaia_sdk.graphql.request.input.UpdateIntentImpulse import UpdateIntentImpulse
from gaia_sdk.graphql.request.input.UpdatePromptImpulse import UpdatePromptImpulse
from gaia_sdk.graphql.request.input.UpdateStatementImpulse import UpdateStatementImpulse
import pytest

from gaia_sdk.tests.mock import mock_gaia_ref
from gaia_sdk.tests.mock import MockResponse

logging.basicConfig(level=logging.DEBUG)


class RxException(Exception):
    pass

class TestPreservation(unittest.TestCase):

    def test_preserve_create_identity(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"preserve": {"create": {"identities": [{"id": "asdf", "data": { "identityId": "i1"}}]}}}}))

        impulses = CreateIdentityImpulse(str(uuid4()), str(""))
        result = pipe(ops.first())(gaia_ref.preserve_create_identities([impulses])).run()
        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")

    def test_preserve_update_identity(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"preserve": {"update": {"identities": [{"id": "asdf"}]}}}}))

        impulses = UpdateIdentityImpulse(str(uuid4()), str(uuid4()), "")
        result = pipe(ops.first())(gaia_ref.preserve_update_identities([impulses])).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_delete_identity(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"preserve": {"delete": {"identities": [{"id": "asdf"}]}}}}))

        impulses = DeleteIdentityImpulse(str(uuid4()))
        result = pipe(ops.first())(gaia_ref.preserve_delete_identities([impulses])).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_create_intent(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"preserve": {"create": {"intents": [{"id": "asdf"}]}}}}))

        impulses = CreateIntentImpulse(str(uuid4()), "", "", dict(), list())
        result = pipe(ops.first())(gaia_ref.preserve_create_intents([impulses])).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_update_intent(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"preserve": {"update": {"intents": [{"id": "asdf"}]}}}}))

        impulses = UpdateIntentImpulse(str(uuid4()), str(uuid4()), "", "", dict(), list())
        result = pipe(ops.first())(gaia_ref.preserve_update_intents([impulses])).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_delete_intent(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"preserve": {"delete": {"intents": [{"id": "asdf"}]}}}}))

        impulses = DeleteIntentImpulse(str(uuid4()), str(uuid4()))
        result = pipe(ops.first())(gaia_ref.preserve_delete_intents([impulses])).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_create_prompt(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"preserve": {"create": {"prompts": [{"id": "asdf"}]}}}}))

        impulses = CreatePromptImpulse(str(uuid4()), "", "", dict(), list())
        result = pipe(ops.first())(gaia_ref.preserve_create_prompts([impulses])).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_update_prompt(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"preserve": {"update": {"prompts": [{"id": "asdf"}]}}}}))

        impulses = UpdatePromptImpulse(str(uuid4()), str(uuid4()), "", "", dict(), list())
        result = pipe(ops.first())(gaia_ref.preserve_update_prompts([impulses])).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_delete_prompt(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"preserve": {"delete": {"prompts": [{"id": "asdf"}]}}}}))

        impulses = DeletePromptImpulse(str(uuid4()), str(uuid4()))
        result = pipe(ops.first())(gaia_ref.preserve_delete_prompts([impulses])).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_create_statement(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"preserve": {"create": {"statements": [{"id": "asdf"}]}}}}))

        impulses = CreateStatementImpulse(str(uuid4()), "", "", dict(), list())
        result = pipe(ops.first())(gaia_ref.preserve_create_statements([impulses])).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_update_statement(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"preserve": {"update": {"statements": [{"id": "asdf"}]}}}}))

        impulses = UpdateStatementImpulse(str(uuid4()), str(uuid4()), "", "", dict(), list())
        result = pipe(ops.first())(gaia_ref.preserve_update_statements([impulses])).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_delete_statement(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"preserve": {"delete": {"statements": [{"id": "asdf"}]}}}}))

        impulses = DeleteStatementImpulse(str(uuid4()), str(uuid4()))
        result = pipe(ops.first())(gaia_ref.preserve_delete_statements([impulses])).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_create_fulfilment(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"preserve": {"create": {"fulfilments": [{"id": "asdf"}]}}}}))

        impulses = CreateFulfilmentImpulse(str(uuid4()), "", "", dict(), list())
        result = pipe(ops.first())(gaia_ref.preserve_create_fulfilments([impulses])).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_update_fulfilment(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"preserve": {"update": {"fulfilments": [{"id": "asdf"}]}}}}))

        impulses = UpdateFulfilmentImpulse(str(uuid4()), str(uuid4()), "", "", dict(), list())
        result = pipe(ops.first())(gaia_ref.preserve_update_fulfilments([impulses])).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_delete_fulfilment(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"preserve": {"delete": {"fulfilments": [{"id": "asdf"}]}}}}))

        impulses = DeleteFulfilmentImpulse(str(uuid4()), str(uuid4()))
        result = pipe(ops.first())(gaia_ref.preserve_delete_fulfilments([impulses])).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_create_behaviour(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"preserve": {"create": {"behaviours": [{"id": "asdf"}]}}}}))

        impulses = CreateBehaviourImpulse(str(uuid4()), "", "", "", list())
        result = pipe(ops.first())(gaia_ref.preserve_create_behaviours([impulses])).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_update_behaviour(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"preserve": {"update": {"behaviours": [{"id": "asdf"}]}}}}))

        impulses = UpdateBehaviourImpulse(str(uuid4()), str(uuid4()), "", "", "", list())
        result = pipe(ops.first())(gaia_ref.preserve_update_behaviours([impulses])).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_delete_behaviour(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"preserve": {"delete": {"behaviours": [{"id": "asdf"}]}}}}))

        impulses = DeleteBehaviourImpulse(str(uuid4()), str(uuid4()))
        result = pipe(ops.first())(gaia_ref.preserve_delete_behaviours([impulses])).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_create_code(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"preserve": {"create": {"codes": [{"id": "asdf"}]}}}}))

        impulses = CreateCodeImpulse(str(uuid4()), "", "", dict(), "", list())
        result = pipe(ops.first())(gaia_ref.preserve_create_codes([impulses])).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_update_code(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"preserve": {"update": {"codes": [{"id": "asdf"}]}}}}))

        impulses = UpdateCodeImpulse(str(uuid4()), str(uuid4()), "", "", dict(), "", list())
        result = pipe(ops.first())(gaia_ref.preserve_update_codes([impulses])).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_delete_code(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"preserve": {"delete": {"codes": [{"id": "asdf"}]}}}}))

        impulses = DeleteCodeImpulse(str(uuid4()), str(uuid4()))
        result = pipe(ops.first())(gaia_ref.preserve_delete_codes([impulses])).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_create_edge(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"preserve": {"create": {"edges": [{"id": "asdf"}]}}}}))

        impulses = CreateEdgeImpulse(str(uuid4()), str(uuid4()), "sometype", 2.7, dict())
        result = pipe(ops.first())(gaia_ref.preserve_create_edges([impulses])).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"

    def test_preserve_delete_edge(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"preserve": {"delete": {"edges": [{"id": "asdf"}]}}}}))

        impulses = DeleteEdgeImpulse(str(uuid4()), str(uuid4()))
        result = pipe(ops.first())(gaia_ref.preserve_delete_edges([impulses])).run()
        assert result.dictionary.get("id") is not None, "ID  is in response"


if __name__ == '__main__':
    unittest.main()
