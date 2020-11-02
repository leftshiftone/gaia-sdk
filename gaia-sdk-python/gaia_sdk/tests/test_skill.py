import unittest

from gaia_sdk.tests.mock import mock_gaia_ref
from gaia_sdk.tests.mock import MockResponse


class TestSkill(unittest.TestCase):

    def test_sends_and_retrieves(self):
        def mock(request):
            self.assertEqual(request.url_post_fix, "/skill/evaluate")
            return MockResponse(b'{"response":"hello back",":namespace":"outgoing"}')

        gaia_ref = mock_gaia_ref(mock)
        skill_ref = gaia_ref.skill("skillProvision://8db77283-f25b-4cbb-8d26-692bb2672fb3/test")
        result = skill_ref.evaluate(payload={"request": "hello world!"}).run()
        self.assertEqual(result.response,{'response': 'hello back', ':namespace' : 'outgoing'})

