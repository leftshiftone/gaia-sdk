import logging
import unittest

from gaia_sdk.tests.mock import MockResponse
from gaia_sdk.tests.mock import mock_gaia_ref

logging.basicConfig(level=logging.DEBUG)


class RxException(Exception):
    pass


class TestIntrospect(unittest.TestCase):

    def test_get_build_jobs(self):
        gaia_ref = mock_gaia_ref(lambda x: MockResponse(
            {
                "data": {
                    "introspect": {
                        "buildJobs": [
                            {
                                "reference": "47de74f7-3dd3-34ca-9b92-3690a2f8cc91",
                                "name": "skill-omdb-v0.1.3-build",
                                "tenantId": "f000f000-f000-f000-f000-f000f000f000",
                                "tag": "v0.1.3",
                                "status": {
                                    "failures": [],
                                    "running": 1,
                                    "pending": 0,
                                    "health": "BUILDING"
                                }
                            }
                        ]
                    }
                }
            }
        ))

        result = gaia_ref.introspect_build_jobs("f000f000-f000-f000-f000-f000f000f000").run()
        assert result.tag == "v0.1.3"
        assert result.name == "skill-omdb-v0.1.3-build"


if __name__ == '__main__':
    unittest.main()
