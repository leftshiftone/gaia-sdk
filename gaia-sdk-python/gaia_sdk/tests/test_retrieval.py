import logging
import unittest
from uuid import uuid4

from rx import operators as ops, pipe

from gaia_sdk.graphql.request.type import SkillProvisionBuildJob
from gaia_sdk.tests.mock import mock_gaia_ref
from gaia_sdk.tests.mock import MockResponse
import pytest

logging.basicConfig(level=logging.DEBUG)


class RxException(Exception):
    pass


# Helper function for raising exceptions within lambdas
def _raise(ex):
    raise RxException(ex)


class TestRetrieval(unittest.TestCase):

    def test_retrieve_codes(self):
        gaia_ref = mock_gaia_ref(
            lambda request: MockResponse({"data": {"retrieve": {"knowledge": {"codes": [{"identityId": "asdf"}]}}}}))

        def config(x):
            x.identity_id()

        result = pipe(ops.first())(gaia_ref.retrieve_codes(str(uuid4()), config)).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"

    def test_retrieve_paginated_codes(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"retrieve": {"knowledge": {
            "codes": [{"identityId": "i1", "qualifier": "101"}, {"identityId": "i2", "qualifier": "102"},
                      {"identityId": "i3", "qualifier": "103"}, {"identityId": "i4", "qualifier": "104"},
                      {"identityId": "i5", "qualifier": "105"}, {"identityId": "i6", "qualifier": "106"},
                      {"identityId": "i7", "qualifier": "107"}, {"identityId": "i8", "qualifier": "108"},
                      {"identityId": "i9", "qualifier": "109"}, {"identityId": "i10", "qualifier": "110"}]}}}}))

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
        gaia_ref = mock_gaia_ref(lambda request: MockResponse(
            {"data": {"retrieve": {"knowledge": {"code": {"identityId": "asdf", "reference": "ref1"}}}}}))

        def config(x):
            x.identity_id()
            x.reference()

        result = pipe(ops.first())(gaia_ref.retrieve_code(str(uuid4()), str(uuid4()), config)).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"
        assert result.dictionary.get("reference") is not None, "Reference is in response"

    def test_retrieve_identities(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"retrieve": {"knowledge": {
            "identities": [{"identityId": "asdf", "qualifier": "q1", "availableLanguages": {"de": "Deutsch"}}]}}}}))

        def config(x):
            x.identity_id()
            x.qualifier()
            x.available_languages()

        result = pipe(ops.first())(gaia_ref.retrieve_identities(config)).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"
        assert result.dictionary.get("availableLanguages") is not None, "Available Languages are in response"

    def test_retrieve_paginated_identities(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"retrieve": {"knowledge": {
            "identities": [{"identityId": "i1", "qualifier": "101", "availableLanguages": {"de": "Deutsch"}},
                           {"identityId": "i2", "qualifier": "102", "availableLanguages": {"de": "Deutsch"}},
                           {"identityId": "i3", "qualifier": "103", "availableLanguages": {"de": "Deutsch"}},
                           {"identityId": "i4", "qualifier": "104", "availableLanguages": {"de": "Deutsch"}},
                           {"identityId": "i5", "qualifier": "105", "availableLanguages": {"de": "Deutsch"}},
                           {"identityId": "i6", "qualifier": "106", "availableLanguages": {"de": "Deutsch"}},
                           {"identityId": "i7", "qualifier": "107", "availableLanguages": {"de": "Deutsch"}},
                           {"identityId": "i8", "qualifier": "108", "availableLanguages": {"de": "Deutsch"}},
                           {"identityId": "i9", "qualifier": "109", "availableLanguages": {"de": "Deutsch"}},
                           {"identityId": "i10", "qualifier": "110", "availableLanguages": {"de": "Deutsch"}}]}}}}))

        def config(x):
            x.identity_id()
            x.qualifier()
            x.available_languages()

        result = pipe(ops.to_list())(gaia_ref.retrieve_identities(config, 10, 100)).run()

        assert len(result) == 10, "Count does not match"

        latestExpectedIndex = 100
        for i in range(10):
            latestExpectedIndex += 1
            assert result[i].dictionary.get("qualifier") == str(latestExpectedIndex), "index does not match"
            assert result[i].dictionary.get("availableLanguages") is not None, "index does not match"

    def test_retrieve_identity(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"retrieve": {"knowledge": {
            "identity": {"identityId": "asdf", "qualifier": "q1", "availableLanguages": {"de": "Deutsch"}}}}}}))

        def config(x):
            x.identity_id()
            x.qualifier()
            x.available_languages()

        result = pipe(ops.first())(gaia_ref.retrieve_identity(str(uuid4()), config)).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"
        assert result.dictionary.get("qualifier") is not None, "Qualifier is in response"
        assert result.dictionary.get("availableLanguages") is not None, "Available Languages are in response"

    def test_retrieve_intents(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse(
            {"data": {"retrieve": {"knowledge": {"intents": [{"identityId": "asdf", "qualifier": "q1"}]}}}}))

        def config(x):
            x.identity_id()
            x.qualifier()

        result = pipe(ops.first())(gaia_ref.retrieve_intents(str(uuid4()), config)).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"

    def test_retrieve_paginated_intents(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"retrieve": {"knowledge": {
            "intents": [{"identityId": "i1", "qualifier": "101"}, {"identityId": "i2", "qualifier": "102"},
                        {"identityId": "i3", "qualifier": "103"}, {"identityId": "i4", "qualifier": "104"},
                        {"identityId": "i5", "qualifier": "105"}, {"identityId": "i6", "qualifier": "106"},
                        {"identityId": "i7", "qualifier": "107"}, {"identityId": "i8", "qualifier": "108"},
                        {"identityId": "i9", "qualifier": "109"}, {"identityId": "i10", "qualifier": "110"}]}}}}))

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
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {
            "retrieve": {"knowledge": {"intent": {"identityId": "asdf", "reference": "ref1", "qualifier": "q1"}}}}}))

        def config(x):
            x.identity_id()
            x.qualifier()
            x.reference()

        result = pipe(ops.first())(gaia_ref.retrieve_intent(str(uuid4()), str(uuid4()), config)).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"
        assert result.dictionary.get("reference") is not None, "Reference is in response"

    def test_retrieve_prompts(self):
        gaia_ref = mock_gaia_ref(
            lambda request: MockResponse({"data": {"retrieve": {"knowledge": {"prompts": [{"identityId": "asdf"}]}}}}))

        def config(x):
            x.identity_id()

        result = pipe(ops.first())(gaia_ref.retrieve_prompts(str(uuid4()), config)).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"

    def test_retrieve_paginated_prompts(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"retrieve": {"knowledge": {
            "prompts": [{"identityId": "i1", "qualifier": "101"}, {"identityId": "i2", "qualifier": "102"},
                        {"identityId": "i3", "qualifier": "103"}, {"identityId": "i4", "qualifier": "104"},
                        {"identityId": "i5", "qualifier": "105"}, {"identityId": "i6", "qualifier": "106"},
                        {"identityId": "i7", "qualifier": "107"}, {"identityId": "i8", "qualifier": "108"},
                        {"identityId": "i9", "qualifier": "109"}, {"identityId": "i10", "qualifier": "110"}]}}}}))

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
        gaia_ref = mock_gaia_ref(lambda request: MockResponse(
            {"data": {"retrieve": {"knowledge": {"prompt": {"identityId": "asdf", "reference": "ref1"}}}}}))

        def config(x):
            x.identity_id()
            x.reference()

        result = pipe(ops.first())(gaia_ref.retrieve_prompt(str(uuid4()), str(uuid4()), config)).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"
        assert result.dictionary.get("reference") is not None, "Reference is in response"

    def test_retrieve_fulfilments(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse(
            {"data": {"retrieve": {"knowledge": {"fulfilments": [{"identityId": "asdf"}]}}}}))

        def config(x):
            x.identity_id()

        result = pipe(ops.first())(gaia_ref.retrieve_fulfilments(str(uuid4()), config)).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"

    def test_retrieve_paginated_fulfilments(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"retrieve": {"knowledge": {
            "fulfilments": [{"identityId": "i1", "qualifier": "101"}, {"identityId": "i2", "qualifier": "102"},
                            {"identityId": "i3", "qualifier": "103"}, {"identityId": "i4", "qualifier": "104"},
                            {"identityId": "i5", "qualifier": "105"}, {"identityId": "i6", "qualifier": "106"},
                            {"identityId": "i7", "qualifier": "107"}, {"identityId": "i8", "qualifier": "108"},
                            {"identityId": "i9", "qualifier": "109"}, {"identityId": "i10", "qualifier": "110"}]}}}}))

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
        gaia_ref = mock_gaia_ref(lambda request: MockResponse(
            {"data": {"retrieve": {"knowledge": {"fulfilment": {"identityId": "asdf", "reference": "ref1"}}}}}))

        def config(x):
            x.identity_id()
            x.reference()

        result = pipe(ops.first())(gaia_ref.retrieve_fulfilment(str(uuid4()), str(uuid4()), config)).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"
        assert result.dictionary.get("reference") is not None, "Reference is in response"

    def test_retrieve_statements(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse(
            {"data": {"retrieve": {"knowledge": {"statements": [{"identityId": "asdf"}]}}}}))

        def config(x):
            x.identity_id()

        result = pipe(ops.first())(gaia_ref.retrieve_statements(str(uuid4()), config)).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"

    def test_retrieve_paginated_statements(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"retrieve": {"knowledge": {
            "statements": [{"identityId": "i1", "qualifier": "101"}, {"identityId": "i2", "qualifier": "102"},
                           {"identityId": "i3", "qualifier": "103"}, {"identityId": "i4", "qualifier": "104"},
                           {"identityId": "i5", "qualifier": "105"}, {"identityId": "i6", "qualifier": "106"},
                           {"identityId": "i7", "qualifier": "107"}, {"identityId": "i8", "qualifier": "108"},
                           {"identityId": "i9", "qualifier": "109"}, {"identityId": "i10", "qualifier": "110"}]}}}}))

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
        gaia_ref = mock_gaia_ref(lambda request: MockResponse(
            {"data": {"retrieve": {"knowledge": {"statement": {"identityId": "asdf", "reference": "ref1"}}}}}))

        def config(x):
            x.identity_id()
            x.reference()

        result = pipe(ops.first())(gaia_ref.retrieve_statement(str(uuid4()), str(uuid4()), config)).run()
        assert result.dictionary.get("identityId") is not None, "IdentityId is in response"
        assert result.dictionary.get("reference") is not None, "Reference is in response"

    def test_retrieve_edges(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse(
            {"data": {"retrieve": {"knowledge": {"edges": [{"source": "asdf", "target": "q1"}]}}}}))

        def config(x):
            x.source()
            x.target()

        result = pipe(ops.first())(gaia_ref.retrieve_edges(str(uuid4()), config)).run()
        assert result.dictionary.get("source") is not None, "source is in response"
        assert result.dictionary.get("target") is not None, "target is in response"

    def test_retrieve_paginated_edges(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {"retrieve": {"knowledge": {
            "edges": [{"source": "i1", "target": "101", "type": "101"},
                      {"source": "i2", "target": "102", "type": "102"},
                      {"source": "i3", "target": "103", "type": "103"},
                      {"source": "i4", "target": "104", "type": "104"},
                      {"source": "i5", "target": "105", "type": "105"},
                      {"source": "i6", "target": "106", "type": "106"},
                      {"source": "i7", "target": "107", "type": "107"},
                      {"source": "i8", "target": "108", "type": "108"},
                      {"source": "i9", "target": "109", "type": "109"},
                      {"source": "i10", "target": "110", "type": "110"}]}}}}))

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
        gaia_ref = mock_gaia_ref(lambda request: MockResponse(
            {"data": {"retrieve": {"knowledge": {"edge": {"source": "asdf", "target": "ref1"}}}}}))

        def config(x):
            x.source()
            x.target()

        result = pipe(ops.first())(gaia_ref.retrieve_edge(str(uuid4()), str(uuid4()), config)).run()
        assert result.dictionary.get("source") is not None, "source is in response"
        assert result.dictionary.get("target") is not None, "target is in response"

    def test_retrieve_behaviour_execution(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse({"data": {
            "retrieve": {"experience": {"behaviourExecution": {"processInstanceId": 'i1', "behaviourId": '101'}}}}}))

        def config(x):
            x.identity_id()
            x.process_instance_id()

        result = pipe(ops.first())(gaia_ref.retrieve_behaviour_execution(str(uuid4()), str(uuid4()), config)).run()
        assert result.dictionary.get("processInstanceId") is not None, "processInstanceId missing"
        assert result.dictionary.get("behaviourId") is not None, "behaviourId missing"

    def test_retrieve_paginated_behaviour_executions(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse(
            {
                "data": {
                    "retrieve": {
                        "experience": {
                            "behaviourExecutions": [{
                                "processInstanceId": 'i1',
                                "behaviourId": '101',
                                "state": '101'
                            }, {"processInstanceId": 'i2', "behaviourId": '102', "state": '102'}]
                        }
                    }
                }
            }
        ))

        def config(x):
            x.process_instance_id()
            x.behaviour_id()
            x.state()

        result = pipe(ops.to_list())(
            gaia_ref.retrieve_behaviour_executions(str(uuid4()), config, 100, 10, None, None)).run()

        assert (len(result)) == 2, "unexpected executions count"
        for r in result:
            assert r.dictionary.get("processInstanceId") is not None, "processInstanceId missing"
            assert r.dictionary.get("behaviourId") is not None, "behaviourId missing"

    def test_retrieve_build_jobs(self):
        gaia_ref = mock_gaia_ref(lambda request: MockResponse(
            {"data": {"retrieve": {"experience": {"skillProvisionBuildJobs": [
                {"skillRef": "44d44584-90b4-4770-b45a-d535392b5031",
                 "provisionRef": "bf8929ab-b432-470e-acb2-bce380f61333", "name": "first-7ac19-build",
                 "status": {"running": "0", "failures": [
                     {"reason": "Failed with an Error", "failureType": "FAILED_UNKNOWN", "exitCode": "1",
                      "logs": "everything is kaputt!",
                      "affectedContainer": "first-dl-init"}], "health": "UNHEALTHY"}},
                {"skillRef": "28c79644-3512-4751-9a0e-6a9b2ef0fdd2",
                 "provisionRef": "a11c745c-72b3-4a75-9f94-ece2a95495d6", "name": "skill-echo-demo-1-fc3bf-build",
                 "status": {"running": "0", "failures": [], "health": "COMPLETED"}}]}}}}
        ))

        def config(x: SkillProvisionBuildJob):
            x.skill_ref()

        result = pipe(ops.to_list())(gaia_ref.retrieve_skill_provision_build_jobs(str(uuid4()), config)).run()

        assert len(result) == 2
        assert result[0].skill_ref == "44d44584-90b4-4770-b45a-d535392b5031"
        assert result[1].provision_ref == "a11c745c-72b3-4a75-9f94-ece2a95495d6" #TODO: something is wrong here...


if __name__ == '__main__':
    unittest.main()
