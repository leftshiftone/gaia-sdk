import time
import unittest
from uuid import uuid4

from rx import operators as ops
from rx import pipe

from gaia_sdk.tests.mock import mock_gaia_ref


class TestConcurrency(unittest.TestCase):

    def test_does_not_block(self):
        gaia_ref = mock_gaia_ref(self.return_after_seconds(5))

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
