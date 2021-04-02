import logging
import unittest
import uuid

from gaia_sdk.graphql import PerceiveDataImpulse
from gaia_sdk.graphql.request.input.CancelSkillBuildJobImpulse import CancelSkillBuildJobImpulse
from gaia_sdk.graphql.request.input.CreateSkillBuildJobImpulse import CreateSkillBuildJobImpulse
from gaia_sdk.tests.mock import MockResponse
from gaia_sdk.tests.mock import mock_gaia_ref

logging.basicConfig(level=logging.DEBUG)
from rx import operators as ops, pipe


class RxException(Exception):
    pass


class TestPractice(unittest.TestCase):

    def test_build(self):
        gaia_ref = mock_gaia_ref(lambda x: MockResponse(
            {
                "data": {
                    "practice": {
                        "build": {
                            "id": "e2b92d76-b9ac-4626-8a97-fc25f0b79160",
                            "data": {
                                "name": "skill-omdb-v0.1.3-build",
                                "reference": "47de74f7-3dd3-34ca-9b92-3690a2f8cc91",
                                "tenantId": "f000f000-f000-f000-f000-f000f000f000",
                                "skillRef": "a244d3d9-10fb-453a-8f9c-bb7e5e52a619",
                                "tag": "v0.1.3"
                            }
                        }
                    }
                }
            }
        ))
        result = gaia_ref.practice_build(CreateSkillBuildJobImpulse("f000f000-f000-f000-f000-f000f000f000", "a244d3d9-10fb-453a-8f9c-bb7e5e52a619", "v0.1.3")).run()
        assert result.data.name == "skill-omdb-v0.1.3-build"

    def test_cancel(self):
        gaia_ref = mock_gaia_ref(lambda x: MockResponse(
            {
                "data": {
                    "practice": {
                        "cancel": {
                            "id": "a8181dcd-84f5-45a0-ae77-cb0f89e3d7c2",
                            "data": {
                                "name": "skill-omdb-v0.1.3-build",
                                "reference": "47de74f7-3dd3-34ca-9b92-3690a2f8cc91",
                                "tenantId": "f000f000-f000-f000-f000-f000f000f000",
                                "tag": "v0.1.3"
                            }
                        }
                    }
                }
            }
        ))
        result = gaia_ref.practice_cancel(
            CancelSkillBuildJobImpulse("f000f000-f000-f000-f000-f000f000f000", "47de74f7-3dd3-34ca-9b92-3690a2f8cc91"))\
        .run()
        assert result.data.name == "skill-omdb-v0.1.3-build"

if __name__ == '__main__':
    unittest.main()
