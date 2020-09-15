import time
import unittest
from unittest.mock import patch, Mock
from uuid import uuid4

from rx import operators as ops
from rx import pipe

from gaia_sdk.api.GaiaCredentials import HMACCredentials
from gaia_sdk.gaia import Gaia


class TestConcurrency(unittest.TestCase):

    @patch('gaia_sdk.http.HttpSensorFunction.GaiaClientBuilder')
    def test_does_not_block(self, mock):
        m0 = Mock()
        m1 = Mock()

        mocked_client = Mock()
        mocked_client.query = self.return_after_seconds(5)
        mocked_client.side_effect = lambda x: time.sleep(5)

        m1.build.return_value = mocked_client
        m0.with_credentials.return_value = m1
        mock.http.return_value = m0

        gaia_ref = Gaia.connect("http://localhost:8080", HMACCredentials("mockedApiKey", "mockedApiSecret"))

        def config(x):
            x.identity_id()
            x.qualifier()

        t0 = time.perf_counter()
        pipe(ops.first())(gaia_ref.retrieve_intents(str(uuid4()), config))
        t1 = time.perf_counter()
        exec_time = t1 - t0

        self.assertLess(exec_time, 5)

    def return_after_seconds(self, t):
        def fn(*args):
            time.sleep(t)
            return {'data': {'retrieve': {'knowledge': {'intents': [{
                'identityId': "0",
                'reference': 'abc',
                'qualifier': 'some_intent'

            }]}}}, 'errors': {}}

        return fn
