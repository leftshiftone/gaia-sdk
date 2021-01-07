import logging
import unittest
from typing import Callable, Union
from uuid import uuid4

from rx import operators as ops, pipe

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
from gaia_sdk.graphql.request.type.DeletedCodeImpulse import DeletedCodeImpulse
from gaia_sdk.graphql.response.type.CreatedBehaviourImpulse import CreatedBehaviourImpulse
from gaia_sdk.graphql.response.type.CreatedCodeImpulse import CreatedCodeImpulse
from gaia_sdk.graphql.response.type.CreatedEdgeImpulse import CreatedEdgeImpulse
from gaia_sdk.graphql.response.type.CreatedFulfilmentImpulse import CreatedFulfilmentImpulse
from gaia_sdk.graphql.response.type.CreatedIdentityImpulse import CreatedIdentityImpulse
from gaia_sdk.graphql.response.type.CreatedIntentImpulse import CreatedIntentImpulse
from gaia_sdk.graphql.response.type.CreatedPromptImpulse import CreatedPromptImpulse
from gaia_sdk.graphql.response.type.CreatedStatementImpulse import CreatedStatementImpulse
from gaia_sdk.graphql.response.type.DeletedBehaviourImpulse import DeletedBehaviourImpulse
from gaia_sdk.graphql.response.type.DeletedEdgeImpulse import DeletedEdgeImpulse
from gaia_sdk.graphql.response.type.DeletedFulfilmentImpulse import DeletedFulfilmentImpulse
from gaia_sdk.graphql.response.type.DeletedIdentityImpulse import DeletedIdentityImpulse
from gaia_sdk.graphql.response.type.DeletedIntentImpulse import DeletedIntentImpulse
from gaia_sdk.graphql.response.type.DeletedPromptImpulse import DeletedPromptImpulse
from gaia_sdk.graphql.response.type.DeletedStatementImpulse import DeletedStatementImpulse
from gaia_sdk.graphql.response.type.UpdatedBehaviourImpulse import UpdatedBehaviourImpulse
from gaia_sdk.graphql.response.type.UpdatedCodeImpulse import UpdatedCodeImpulse
from gaia_sdk.graphql.response.type.UpdatedFulfilmentImpulse import UpdatedFulfilmentImpulse
from gaia_sdk.graphql.response.type.UpdatedIdentityImpulse import UpdatedIdentityImpulse
from gaia_sdk.graphql.response.type.UpdatedIntentImpulse import UpdatedIntentImpulse
from gaia_sdk.graphql.response.type.UpdatedPromptImpulse import UpdatedPromptImpulse
from gaia_sdk.graphql.response.type.UpdatedStatementImpulse import UpdatedStatementImpulse

from gaia_sdk.tests.mock import mock_gaia_ref
from gaia_sdk.tests.mock import MockResponse

logging.basicConfig(level=logging.DEBUG)


class RxException(Exception):
    pass


class TestPreservation(unittest.TestCase):

    ####################################################################################################################
    # Mock responses
    ####################################################################################################################
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

        self.edgeCreateMockResponse: Callable[[str], MockResponse] = lambda: MockResponse(
            {"data": {"preserve": {"create": {"edges": [
                {"id": "asdf", "data": {"source": "n1",
                                        "target": "n2",
                                        "type": "someType",
                                        "weight": 2.7,
                                        "edgeId": "e1",
                                        "properties": {}}}
            ]}}}}
        )

        self.edgeDeleteMockResponse: Callable[[str], MockResponse] = lambda: MockResponse(
            {"data": {"preserve": {"delete": {"edges": [
                {"id": "asdf", "data": {"source": "n1",
                                        "edgeId": "e1"}}
            ]}}}}
        )

    ####################################################################################################################
    # Assertions
    ####################################################################################################################
    def assert_create_update_identity(self, result: Union[CreatedIdentityImpulse, UpdatedIdentityImpulse]):
        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("tenantId"), "foo")
        self.assertEqual(data.get("qualifier"), "bar")
        self.assertEqual(data.get("availableLanguages"),  {"de": "Deutsch"})

    def assert_delete_identity(self, result: DeletedIdentityImpulse):
        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")

    def assert_delete(self, result: Union[DeletedIntentImpulse,
                                          DeletedPromptImpulse,
                                          DeletedStatementImpulse,
                                          DeletedFulfilmentImpulse,
                                          DeletedBehaviourImpulse,
                                          DeletedCodeImpulse]):
        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("reference"), "r1")

    def assert_create_update_entity(self, result: Union[CreatedIntentImpulse, UpdatedIntentImpulse,
                                                        CreatedPromptImpulse, UpdatedPromptImpulse,
                                                        CreatedStatementImpulse, UpdatedStatementImpulse,
                                                        CreatedFulfilmentImpulse, UpdatedFulfilmentImpulse]):
        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("reference"), "r1")
        self.assertEqual(data.get("qualifier"), "foo")
        self.assertEqual(data.get("appendent"), "bar")
        self.assertEqual(data.get("utterance"), {"de": ["content"]})
        self.assertEqual(data.get("labelList"), [])
        self.assertEqual(data.get("version"),  "2.7.0-SNAPSHOT")

    def assert_delete_entity(self, result: Union[DeletedIntentImpulse,
                                                 DeletedPromptImpulse,
                                                 DeletedStatementImpulse,
                                                 DeletedFulfilmentImpulse]):
        self.assert_delete(result)

    def assert_create_update_behaviour(self, result: Union[CreatedBehaviourImpulse, UpdatedBehaviourImpulse]):
        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("reference"), "r1")
        self.assertEqual(data.get("qualifier"), "foo")
        self.assertEqual(data.get("appendent"), "bar")
        self.assertEqual(data.get("labelList"), [])

    def assert_delete_behaviour(self, result: DeletedBehaviourImpulse):
        self.assert_delete(result)

    def assert_create_update_code(self, result: Union[CreatedCodeImpulse, UpdatedCodeImpulse]):
        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("identityId"), "i1")
        self.assertEqual(data.get("reference"), "r1")
        self.assertEqual(data.get("qualifier"), "foo")
        self.assertEqual(data.get("appendent"), "bar")
        self.assertEqual(data.get("code"), {"index": "httpGet(\"https://postman-echo.com/get?foo=bar\")"})
        self.assertEqual(data.get("type"), "atreus")
        self.assertEqual(data.get("labelList"), [])

    def assert_delete_code(self, result: DeletedCodeImpulse):
        self.assert_delete(result)

    def assert_create_edge(self, result: CreatedEdgeImpulse):
        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("source"), "n1")
        self.assertEqual(data.get("target"), "n2")
        self.assertEqual(data.get("type"), "someType")
        self.assertEqual(data.get("weight"), 2.7)
        self.assertEqual(data.get("edgeId"), "e1")
        self.assertEqual(data.get("properties"), {})

    def assert_delete_edge(self, result: DeletedEdgeImpulse):
        self.assertEqual(result.dictionary.get("id"), "asdf")
        data = result.dictionary.get("data")
        self.assertEqual(data.get("source"), "n1")
        self.assertEqual(data.get("edgeId"), "e1")

    ####################################################################################################################
    # Tests
    ####################################################################################################################
    def test_preserve_create_identity(self):
        gaia_ref = mock_gaia_ref(lambda request: self.identityMockCreateUpdateResponse("create"))
        impulses = CreateIdentityImpulse(str(uuid4()), str(""), {"de": "Deutsch"})
        result: CreatedIdentityImpulse = pipe(ops.first())(gaia_ref.preserve_create_identities([impulses])).run()
        self.assert_create_update_identity(result)

    def test_preserve_update_identity(self):
        gaia_ref = mock_gaia_ref(lambda request: self.identityMockCreateUpdateResponse("update"))
        impulses = UpdateIdentityImpulse(str(uuid4()), str(uuid4()), "qualifier", {"de": "Deutsch"})
        result: UpdatedIdentityImpulse = pipe(ops.first())(gaia_ref.preserve_update_identities([impulses])).run()
        self.assert_create_update_identity(result)

    def test_preserve_delete_identity(self):
        gaia_ref = mock_gaia_ref(lambda request: self.identityDeleteMockResponse())
        impulses = DeleteIdentityImpulse(str(uuid4()))
        result: DeletedIdentityImpulse = pipe(ops.first())(gaia_ref.preserve_delete_identities([impulses])).run()
        self.assert_delete_identity(result)

    def test_preserve_create_intent(self):
        gaia_ref = mock_gaia_ref(lambda request: self.entityCreateUpdateMockResponse("create", "intents"))
        impulses = CreateIntentImpulse(str(uuid4()), "", "", dict(), list())
        result: CreatedIntentImpulse = pipe(ops.first())(gaia_ref.preserve_create_intents([impulses])).run()
        self.assert_create_update_entity(result)

    def test_preserve_update_intent(self):
        gaia_ref = mock_gaia_ref(lambda request: self.entityCreateUpdateMockResponse("update", "intents"))
        impulses = UpdateIntentImpulse(str(uuid4()), str(uuid4()), "", "", dict(), list())
        result: UpdatedIntentImpulse = pipe(ops.first())(gaia_ref.preserve_update_intents([impulses])).run()
        self.assert_create_update_entity(result)

    def test_preserve_delete_intent(self):
        gaia_ref = mock_gaia_ref(lambda request: self.entityDeleteMockResponse("intents"))
        impulses = DeleteIntentImpulse(str(uuid4()), str(uuid4()))
        result: DeletedIntentImpulse = pipe(ops.first())(gaia_ref.preserve_delete_intents([impulses])).run()
        self.assert_delete_entity(result)

    def test_preserve_create_prompt(self):
        gaia_ref = mock_gaia_ref(lambda request: self.entityCreateUpdateMockResponse("create", "prompts"))
        impulses = CreatePromptImpulse(str(uuid4()), "", "", dict(), list())
        result: CreatedPromptImpulse = pipe(ops.first())(gaia_ref.preserve_create_prompts([impulses])).run()
        self.assert_create_update_entity(result)

    def test_preserve_update_prompt(self):
        gaia_ref = mock_gaia_ref(lambda request: self.entityCreateUpdateMockResponse("update", "prompts"))
        impulses = UpdatePromptImpulse(str(uuid4()), str(uuid4()), "", "", dict(), list())
        result: UpdatedPromptImpulse = pipe(ops.first())(gaia_ref.preserve_update_prompts([impulses])).run()
        self.assert_create_update_entity(result)

    def test_preserve_delete_prompt(self):
        gaia_ref = mock_gaia_ref(lambda request: self.entityDeleteMockResponse("prompts"))
        impulses = DeletePromptImpulse(str(uuid4()), str(uuid4()))
        result: DeletedPromptImpulse = pipe(ops.first())(gaia_ref.preserve_delete_prompts([impulses])).run()
        self.assert_delete_entity(result)

    def test_preserve_create_statement(self):
        gaia_ref = mock_gaia_ref(lambda request: self.entityCreateUpdateMockResponse("create", "statements"))
        impulses = CreateStatementImpulse(str(uuid4()), "", "", dict(), list())
        result: CreatedStatementImpulse = pipe(ops.first())(gaia_ref.preserve_create_statements([impulses])).run()
        self.assert_create_update_entity(result)

    def test_preserve_update_statement(self):
        gaia_ref = mock_gaia_ref(lambda request: self.entityCreateUpdateMockResponse("update", "statements"))
        impulses = UpdateStatementImpulse(str(uuid4()), str(uuid4()), "", "", dict(), list())
        result: UpdatedStatementImpulse = pipe(ops.first())(gaia_ref.preserve_update_statements([impulses])).run()
        self.assert_create_update_entity(result)

    def test_preserve_delete_statement(self):
        gaia_ref = mock_gaia_ref(lambda request: self.entityDeleteMockResponse("statements"))
        impulses = DeleteStatementImpulse(str(uuid4()), str(uuid4()))
        result: DeletedStatementImpulse = pipe(ops.first())(gaia_ref.preserve_delete_statements([impulses])).run()
        self.assert_delete_entity(result)

    def test_preserve_create_fulfilment(self):
        gaia_ref = mock_gaia_ref(lambda request: self.entityCreateUpdateMockResponse("create", "fulfilments"))
        impulses = CreateFulfilmentImpulse(str(uuid4()), "", "", dict(), list())
        result: CreatedFulfilmentImpulse = pipe(ops.first())(gaia_ref.preserve_create_fulfilments([impulses])).run()
        self.assert_create_update_entity(result)

    def test_preserve_update_fulfilment(self):
        gaia_ref = mock_gaia_ref(lambda request: self.entityCreateUpdateMockResponse("update", "fulfilments"))
        impulses = UpdateFulfilmentImpulse(str(uuid4()), str(uuid4()), "", "", dict(), list())
        result: UpdatedFulfilmentImpulse = pipe(ops.first())(gaia_ref.preserve_update_fulfilments([impulses])).run()
        self.assert_create_update_entity(result)

    def test_preserve_delete_fulfilment(self):
        gaia_ref = mock_gaia_ref(lambda request: self.entityDeleteMockResponse("fulfilments"))
        impulses = DeleteFulfilmentImpulse(str(uuid4()), str(uuid4()))
        result: DeletedFulfilmentImpulse = pipe(ops.first())(gaia_ref.preserve_delete_fulfilments([impulses])).run()
        self.assert_delete_entity(result)

    def test_preserve_create_behaviour(self):
        gaia_ref = mock_gaia_ref(lambda request: self.behaviourCreateUpdateMockResponse("create"))
        impulses = CreateBehaviourImpulse(str(uuid4()), "", "", "", list())
        result: CreatedBehaviourImpulse = pipe(ops.first())(gaia_ref.preserve_create_behaviours([impulses])).run()
        self.assert_create_update_behaviour(result)

    def test_preserve_update_behaviour(self):
        gaia_ref = mock_gaia_ref(lambda request: self.behaviourCreateUpdateMockResponse("update"))
        impulses = UpdateBehaviourImpulse(str(uuid4()), str(uuid4()), "", "", "", list())
        result: UpdatedBehaviourImpulse = pipe(ops.first())(gaia_ref.preserve_update_behaviours([impulses])).run()
        self.assert_create_update_behaviour(result)

    def test_preserve_delete_behaviour(self):
        gaia_ref = mock_gaia_ref(lambda request: self.behaviourDeleteMockResponse())
        impulses = DeleteBehaviourImpulse(str(uuid4()), str(uuid4()))
        result: DeletedBehaviourImpulse = pipe(ops.first())(gaia_ref.preserve_delete_behaviours([impulses])).run()
        self.assert_delete_behaviour(result)

    def test_preserve_create_code(self):
        gaia_ref = mock_gaia_ref(lambda request: self.codeCreateUpdateMockResponse("create"))
        impulses = CreateCodeImpulse(str(uuid4()), "", "", dict(), "", list())
        result: CreatedCodeImpulse = pipe(ops.first())(gaia_ref.preserve_create_codes([impulses])).run()
        self.assert_create_update_code(result)

    def test_preserve_update_code(self):
        gaia_ref = mock_gaia_ref(lambda request: self.codeCreateUpdateMockResponse("update"))
        impulses = UpdateCodeImpulse(str(uuid4()), str(uuid4()), "", "", dict(), "", list())
        result: UpdatedCodeImpulse = pipe(ops.first())(gaia_ref.preserve_update_codes([impulses])).run()
        self.assert_create_update_code(result)

    def test_preserve_delete_code(self):
        gaia_ref = mock_gaia_ref(lambda request: self.codeDeleteMockResponse())
        impulses = DeleteCodeImpulse(str(uuid4()), str(uuid4()))
        result: DeletedCodeImpulse = pipe(ops.first())(gaia_ref.preserve_delete_codes([impulses])).run()
        self.assert_delete_code(result)

    def test_preserve_create_edge(self):
        gaia_ref = mock_gaia_ref(lambda request: self.edgeCreateMockResponse())
        impulses = CreateEdgeImpulse(str(uuid4()), str(uuid4()), "someType", 2.7, dict())
        result: CreatedEdgeImpulse = pipe(ops.first())(gaia_ref.preserve_create_edges([impulses])).run()
        self.assert_create_edge(result)

    def test_preserve_delete_edge(self):
        gaia_ref = mock_gaia_ref(lambda request: self.edgeDeleteMockResponse())
        impulses = DeleteEdgeImpulse(str(uuid4()), str(uuid4()))
        result: DeletedEdgeImpulse = pipe(ops.first())(gaia_ref.preserve_delete_edges([impulses])).run()
        self.assert_delete_edge(result)


if __name__ == '__main__':
    unittest.main()
