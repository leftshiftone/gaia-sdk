import unittest

import rx.operators as ops

from gaia_sdk.tests.mock import MockResponse
from gaia_sdk.tests.mock import mock_gaia_ref


class TestSkill(unittest.TestCase):

    def test_sends_and_retrieves(self):
        def mock(request):
            self.assertEqual(request.url_post_fix, "/skill/evaluate")
            return MockResponse(b'{"response":"hello back",":namespace":"outgoing"}')

        gaia_ref = mock_gaia_ref(mock)
        skill_ref = gaia_ref.skill("skillProvision://8db77283-f25b-4cbb-8d26-692bb2672fb3/test")
        result = skill_ref.evaluate(payload={"request": "hello world!"}).run()
        self.assertEqual(result.response, {'response': 'hello back', ':namespace': 'outgoing'})

    def test_cancel(self):
        def mock(request):
            self.assertEqual(request.url_post_fix, "/skill/cancel")
            return MockResponse(b'{"reference": "bf8929ab-b432-470e-acb2-bce380f61333"}')

        gaia_ref = mock_gaia_ref(mock)
        skill_ref = gaia_ref.skill("skillBuild://bf8929ab-b432-470e-acb2-bce380f61333/bla")
        result = skill_ref.cancel().run()
        self.assertEqual(result.reference, "bf8929ab-b432-470e-acb2-bce380f61333")

    def test_logs(self):
        def mock(request):
            self.assertEqual(request.url_post_fix, "/skill/logs")
            return MockResponse(b'{"logLines": ["a", "b", "c"]}')
        gaia_ref = mock_gaia_ref(mock)
        skill_ref = gaia_ref.skill("skillBuild://8db77283-f25b-4cbb-8d26-692bb2672fb3/first-7ac19-build")
        r = skill_ref.logs(30) \
            .pipe(ops.to_list()) \
            .run()
        self.assertEqual(r, ['a', 'b', 'c'])

    def test_build(self):
        def mock(request):
            self.assertEqual(request.url_post_fix, "/skill/build")
            return MockResponse(b'{"reference": "1234"}')

        gaia_ref = mock_gaia_ref(mock)
        skill_ref = gaia_ref.skill("skillProvision://8db77283-f25b-4cbb-8d26-692bb2672fb3/some-prov-1")
        r = skill_ref.build().run()
        self.assertEqual(r.reference, "1234")