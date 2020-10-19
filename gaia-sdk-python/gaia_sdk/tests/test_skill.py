import unittest
import pytest
from unittest.mock import patch, Mock

from requests import Response, HTTPError

from gaia_sdk.api.GaiaCredentials import UsernamePasswordCredentials, HMACCredentials
from gaia_sdk.gaia import Gaia


class TestSkill(unittest.TestCase):

    @patch('gaia_sdk.http.HttpSensorStream.GaiaStreamClientBuilder')
    def test_sends_and_retrieves(self, mock):
        m0 = Mock()
        m1 = Mock()

        mocked_client = Mock()
        r = Response()
        r.status_code = 200
        r._content = b'{"response":"hello back",":namespace":"outgoing"}'
        mocked_client.post_json.return_value = r

        m1.build.return_value = mocked_client
        m0.with_credentials.return_value = m1
        mock.http.return_value = m0

        gaia_ref = Gaia.connect("http://localhost:8080", HMACCredentials("admin", "sdasd"))
        skill_ref = gaia_ref.skill("skillProvision://8db77283-f25b-4cbb-8d26-692bb2672fb3/test")
        result = skill_ref.evaluate(payload={"request": "hello world!"}).run()
        self.assertEqual(result.response,{'response': 'hello back', ':namespace' : 'outgoing'})

    @pytest.mark.skip(reason="...")
    def test_does_raise(self):
        def _fail_login():
            gaia_ref = Gaia.login("http://localhost:8080", UsernamePasswordCredentials("admin", "sdasd"))
            skill_ref = gaia_ref.skill("skillProvision://8db77283-f25b-4cbb-8d26-692bb2672fb3/test")
            result = skill_ref.evaluate(payload={"request": "hello world!"}).run()
        self.assertRaises(HTTPError, _fail_login)
