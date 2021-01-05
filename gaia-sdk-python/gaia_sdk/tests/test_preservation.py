import json
import logging
import string
import unittest
from typing import Callable
from uuid import uuid4

from rx import operators as ops, pipe

from gaia_sdk.api.GaiaCredentials import UsernamePasswordCredentials
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

    def setUp(self) -> None:
        self.identityMockCreateUpdateResponse: Callable[[str], MockResponse] = lambda t: MockResponse(
            {"data": {"preserve": {t: {"identities": [
                {"id": "asdf", "data": {"identityId": "i1",
                                        "tenantId": "foo",
                                        "qualifier": "bar",
                                        "availableLanguages": {"de": "Deutsch"}}}
            ]}}}}
        )

        self.identityDeleteMockResponse: Callable[[str], MockResponse] = lambda: MockResponse(
            {"data": {"preserve": {"delete": {"identities": [
                {"id": "asdf", "data": {"identityId": "i1"}}
            ]}}}}
        )

        self.deleteMockResponse: Callable[[str], MockResponse] = lambda t: MockResponse(
            {"data": {"preserve": {"delete": {t: [
                {"id": "asdf", "data": {"identityId": "i1",
                                        "reference": "r1"}}
            ]}}}}
        )

        """Entity = ("prompt" | "intent" | "fulfilment" | "statement") """
        self.entityCreateUpdateMockResponse: Callable[[str], MockResponse] = lambda t1, t2: MockResponse(
            {"data": {"preserve": {t1: {t2: [
                {"id": "asdf", "data": {"identityId": "i1",
                                        "reference": "r1",
                                        "qualifier": "foo",
                                        "appendent": "bar",
                                        "utterance": {"de": ["content"]},
                                        "labelList": [],
                                        "version": "2.7.0-SNAPSHOT"}}
            ]}}}}
        )

        self.entityDeleteMockResponse: Callable[[str], MockResponse] = lambda t: self.deleteMockResponse(t)

        self.behaviourCreateUpdateMockResponse: Callable[[str], MockResponse] = lambda t: MockResponse(
            {"data": {"preserve": {t: {"behaviours": [
                {"id": "asdf", "data": {"identityId": "i1",
                                        "reference": "r1",
                                        "qualifier": "foo",
                                        "appendent": "bar",
                                        "labelList": []}}
            ]}}}}
        )

        self.behaviourDeleteMockResponse: Callable[[str], MockResponse] = lambda: self.deleteMockResponse("behaviours")

        self.codeCreateUpdateMockResponse: Callable[[str], MockResponse] = lambda t: MockResponse(
            {"data": {"preserve": {t: {"codes": [
                {"id": "asdf", "data": {"identityId": "i1",
                                        "reference": "r1",
                                        "qualifier": "foo",
                                        "appendent": "bar",
                                        "code": {"index": "httpGet(\"https://postman-echo.com/get?foo=bar\")"},
                                        "type": "atreus",
                                        "labelList": []}}
            ]}}}}
        )

        self.codeDeleteMockResponse: Callable[[str], MockResponse] = lambda: self.deleteMockResponse("codes")

    def test_preserve_create_identity(self):
        gaia_ref = mock_gaia_ref(lambda request: self.identityMockCreateUpdateResponse("create"))
        impulses = CreateIdentityImpulse(str(uuid4()), str(""), {"de": "Deutsch"})
        result = pipe(ops.first())(gaia_ref.preserve_create_identities([impulses])).run()

        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("tenantId"), "foo")
        self.assertEqual(data.get("qualifier"), "bar")
        self.assertEqual(data.get("availableLanguages"),  {"de": "Deutsch"})

    def test_preserve_update_identity(self):
        gaia_ref = mock_gaia_ref(lambda request: self.identityMockCreateUpdateResponse("update"))
        impulses = UpdateIdentityImpulse(str(uuid4()), str(uuid4()), "qualifier", {"de": "Deutsch"})
        result = pipe(ops.first())(gaia_ref.preserve_update_identities([impulses])).run()

        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("tenantId"), "foo")
        self.assertEqual(data.get("qualifier"), "bar")
        self.assertEqual(data.get("availableLanguages"),  {"de": "Deutsch"})

    def test_preserve_delete_identity(self):
        gaia_ref = mock_gaia_ref(lambda request: self.identityDeleteMockResponse())
        impulses = DeleteIdentityImpulse(str(uuid4()))
        result = pipe(ops.first())(gaia_ref.preserve_delete_identities([impulses])).run()

        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")

    def test_preserve_create_intent(self):
        gaia_ref = mock_gaia_ref(lambda request: self.entityCreateUpdateMockResponse("create", "intents"))
        impulses = CreateIntentImpulse(str(uuid4()), "", "", dict(), list())
        result = pipe(ops.first())(gaia_ref.preserve_create_intents([impulses])).run()

        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("reference"), "r1")
        self.assertEqual(data.get("qualifier"), "foo")
        self.assertEqual(data.get("appendent"), "bar")
        self.assertEqual(data.get("utterance"), {"de": ["content"]})
        self.assertEqual(data.get("labelList"), [])
        self.assertEqual(data.get("version"),  "2.7.0-SNAPSHOT")

    def test_preserve_update_intent(self):
        gaia_ref = mock_gaia_ref(lambda request: self.entityCreateUpdateMockResponse("update", "intents"))
        impulses = UpdateIntentImpulse(str(uuid4()), str(uuid4()), "", "", dict(), list())
        result = pipe(ops.first())(gaia_ref.preserve_update_intents([impulses])).run()

        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("reference"), "r1")
        self.assertEqual(data.get("qualifier"), "foo")
        self.assertEqual(data.get("appendent"), "bar")
        self.assertEqual(data.get("utterance"), {"de": ["content"]})
        self.assertEqual(data.get("labelList"), [])
        self.assertEqual(data.get("version"),  "2.7.0-SNAPSHOT")

    def test_preserve_delete_intent(self):
        gaia_ref = mock_gaia_ref(lambda request: self.entityDeleteMockResponse("intents"))
        impulses = DeleteIntentImpulse(str(uuid4()), str(uuid4()))
        result = pipe(ops.first())(gaia_ref.preserve_delete_intents([impulses])).run()

        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("reference"), "r1")

    def test_preserve_create_prompt(self):
        gaia_ref = mock_gaia_ref(lambda request: self.entityCreateUpdateMockResponse("create", "prompts"))
        impulses = CreatePromptImpulse(str(uuid4()), "", "", dict(), list())
        result = pipe(ops.first())(gaia_ref.preserve_create_prompts([impulses])).run()

        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("reference"), "r1")
        self.assertEqual(data.get("qualifier"), "foo")
        self.assertEqual(data.get("appendent"), "bar")
        self.assertEqual(data.get("utterance"), {"de": ["content"]})
        self.assertEqual(data.get("labelList"), [])
        self.assertEqual(data.get("version"),  "2.7.0-SNAPSHOT")

    def test_preserve_update_prompt(self):
        gaia_ref = mock_gaia_ref(lambda request: self.entityCreateUpdateMockResponse("update", "prompts"))
        impulses = UpdatePromptImpulse(str(uuid4()), str(uuid4()), "", "", dict(), list())
        result = pipe(ops.first())(gaia_ref.preserve_update_prompts([impulses])).run()

        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("reference"), "r1")
        self.assertEqual(data.get("qualifier"), "foo")
        self.assertEqual(data.get("appendent"), "bar")
        self.assertEqual(data.get("utterance"), {"de": ["content"]})
        self.assertEqual(data.get("labelList"), [])
        self.assertEqual(data.get("version"),  "2.7.0-SNAPSHOT")

    def test_preserve_delete_prompt(self):
        gaia_ref = mock_gaia_ref(lambda request: self.entityDeleteMockResponse("prompts"))
        impulses = DeletePromptImpulse(str(uuid4()), str(uuid4()))
        result = pipe(ops.first())(gaia_ref.preserve_delete_prompts([impulses])).run()

        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("reference"), "r1")

    def test_preserve_create_statement(self):
        gaia_ref = mock_gaia_ref(lambda request: self.entityCreateUpdateMockResponse("create", "statements"))
        impulses = CreateStatementImpulse(str(uuid4()), "", "", dict(), list())
        result = pipe(ops.first())(gaia_ref.preserve_create_statements([impulses])).run()

        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("reference"), "r1")
        self.assertEqual(data.get("qualifier"), "foo")
        self.assertEqual(data.get("appendent"), "bar")
        self.assertEqual(data.get("utterance"), {"de": ["content"]})
        self.assertEqual(data.get("labelList"), [])
        self.assertEqual(data.get("version"),  "2.7.0-SNAPSHOT")

    def test_preserve_update_statement(self):
        gaia_ref = mock_gaia_ref(lambda request: self.entityCreateUpdateMockResponse("update", "statements"))
        impulses = UpdateStatementImpulse(str(uuid4()), str(uuid4()), "", "", dict(), list())
        result = pipe(ops.first())(gaia_ref.preserve_update_statements([impulses])).run()

        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("reference"), "r1")
        self.assertEqual(data.get("qualifier"), "foo")
        self.assertEqual(data.get("appendent"), "bar")
        self.assertEqual(data.get("utterance"), {"de": ["content"]})
        self.assertEqual(data.get("labelList"), [])
        self.assertEqual(data.get("version"),  "2.7.0-SNAPSHOT")

    def test_preserve_delete_statement(self):
        gaia_ref = mock_gaia_ref(lambda request: self.entityDeleteMockResponse("statements"))
        impulses = DeleteStatementImpulse(str(uuid4()), str(uuid4()))
        result = pipe(ops.first())(gaia_ref.preserve_delete_statements([impulses])).run()

        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("reference"), "r1")

    def test_preserve_create_fulfilment(self):
        gaia_ref = mock_gaia_ref(lambda request: self.entityCreateUpdateMockResponse("create", "fulfilments"))
        impulses = CreateFulfilmentImpulse(str(uuid4()), "", "", dict(), list())
        result = pipe(ops.first())(gaia_ref.preserve_create_fulfilments([impulses])).run()

        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("reference"), "r1")
        self.assertEqual(data.get("qualifier"), "foo")
        self.assertEqual(data.get("appendent"), "bar")
        self.assertEqual(data.get("utterance"), {"de": ["content"]})
        self.assertEqual(data.get("labelList"), [])
        self.assertEqual(data.get("version"),  "2.7.0-SNAPSHOT")

    def test_preserve_update_fulfilment(self):
        gaia_ref = mock_gaia_ref(lambda request: self.entityCreateUpdateMockResponse("update", "fulfilments"))
        impulses = UpdateFulfilmentImpulse(str(uuid4()), str(uuid4()), "", "", dict(), list())
        result = pipe(ops.first())(gaia_ref.preserve_update_fulfilments([impulses])).run()

        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("reference"), "r1")
        self.assertEqual(data.get("qualifier"), "foo")
        self.assertEqual(data.get("appendent"), "bar")
        self.assertEqual(data.get("utterance"), {"de": ["content"]})
        self.assertEqual(data.get("labelList"), [])
        self.assertEqual(data.get("version"),  "2.7.0-SNAPSHOT")

    def test_preserve_delete_fulfilment(self):
        gaia_ref = mock_gaia_ref(lambda request: self.entityDeleteMockResponse("fulfilments"))
        impulses = DeleteFulfilmentImpulse(str(uuid4()), str(uuid4()))
        result = pipe(ops.first())(gaia_ref.preserve_delete_fulfilments([impulses])).run()

        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("reference"), "r1")

    def test_preserve_create_behaviour(self):
        gaia_ref = mock_gaia_ref(lambda request: self.behaviourCreateUpdateMockResponse("create"))
        impulses = CreateBehaviourImpulse(str(uuid4()), "", "", "", list())
        result = pipe(ops.first())(gaia_ref.preserve_create_behaviours([impulses])).run()

        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("reference"), "r1")
        self.assertEqual(data.get("qualifier"), "foo")
        self.assertEqual(data.get("appendent"), "bar")
        self.assertEqual(data.get("labelList"), [])

    def test_preserve_update_behaviour(self):
        gaia_ref = mock_gaia_ref(lambda request: self.behaviourCreateUpdateMockResponse("update"))
        impulses = UpdateBehaviourImpulse(str(uuid4()), str(uuid4()), "", "", "", list())
        result = pipe(ops.first())(gaia_ref.preserve_update_behaviours([impulses])).run()

        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("reference"), "r1")
        self.assertEqual(data.get("qualifier"), "foo")
        self.assertEqual(data.get("appendent"), "bar")
        self.assertEqual(data.get("labelList"), [])

    def test_preserve_delete_behaviour(self):
        gaia_ref = mock_gaia_ref(lambda request: self.behaviourDeleteMockResponse())
        impulses = DeleteBehaviourImpulse(str(uuid4()), str(uuid4()))
        result = pipe(ops.first())(gaia_ref.preserve_delete_behaviours([impulses])).run()

        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("reference"), "r1")

    def test_preserve_create_code(self):
        gaia_ref = mock_gaia_ref(lambda request: self.codeCreateUpdateMockResponse("create"))
        impulses = CreateCodeImpulse(str(uuid4()), "", "", dict(), "", list())
        result = pipe(ops.first())(gaia_ref.preserve_create_codes([impulses])).run()

        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("reference"), "r1")
        self.assertEqual(data.get("qualifier"), "foo")
        self.assertEqual(data.get("appendent"), "bar")
        self.assertEqual(data.get("code"), {"index": "httpGet(\"https://postman-echo.com/get?foo=bar\")"})
        self.assertEqual(data.get("type"), "atreus")
        self.assertEqual(data.get("labelList"), [])

    def test_preserve_update_code(self):
        gaia_ref = mock_gaia_ref(lambda request: self.codeCreateUpdateMockResponse("update"))
        impulses = UpdateCodeImpulse(str(uuid4()), str(uuid4()), "", "", dict(), "", list())
        result = pipe(ops.first())(gaia_ref.preserve_update_codes([impulses])).run()

        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("reference"), "r1")
        self.assertEqual(data.get("qualifier"), "foo")
        self.assertEqual(data.get("appendent"), "bar")
        self.assertEqual(data.get("code"), {"index": "httpGet(\"https://postman-echo.com/get?foo=bar\")"})
        self.assertEqual(data.get("type"), "atreus")
        self.assertEqual(data.get("labelList"), [])

    def test_preserve_delete_code(self):
        gaia_ref = mock_gaia_ref(lambda request: self.codeDeleteMockResponse())
        impulses = DeleteCodeImpulse(str(uuid4()), str(uuid4()))
        result = pipe(ops.first())(gaia_ref.preserve_delete_codes([impulses])).run()

        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("reference"), "r1")

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
