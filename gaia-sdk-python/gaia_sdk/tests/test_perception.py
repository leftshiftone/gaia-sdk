import unittest
import logging
import uuid

from pytest import mark

from gaia_sdk.gaia import Gaia
from gaia_sdk.graphql import PerceiveDataImpulse
from concurrent.futures import Future

from gaia_sdk.graphql.request.input.PerceiveActionImpulse import PerceiveActionImpulse
from gaia_sdk.graphql.request.type import Perception

logging.basicConfig(level=logging.DEBUG)

from rx import of
from rx.testing import TestScheduler, ReactiveTest


class TestHMAC(unittest.TestCase):

    def test_perceive_data(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")
        impulse = PerceiveDataImpulse(str(uuid.uuid4()), "", {})

        on_next = lambda x: self.assertIsNotNone(x.id)
        on_error = lambda x: self.fail(x)

        gaia_ref.perceive_data(impulse).subscribe(on_next, on_error)

    def test_perceive_action(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")
        impulse = PerceiveActionImpulse(False, str(uuid.uuid4()), "", {})

        on_next = lambda x: self.assertIsNotNone(x.id)
        on_error = lambda x: self.fail(x)
        gaia_ref.perceive_action(impulse).subscribe(on_next, on_error)

    def test_perceive(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")
        impulse1 = PerceiveActionImpulse(False, str(uuid.uuid4()), "", {})
        impulse2 = PerceiveDataImpulse(str(uuid.uuid4()), "", {})

        def on_next(x):
            self.assertIsNotNone(x.perceive_action.id)
            self.assertIsNotNone(x.perceive_data.id)

        def on_error(x):
            self.fail(x)

        def perceive(p:Perception):
            p.perceive_action(impulse1, lambda x: x.id())
            p.perceive_data(impulse2, lambda x: x.id())

        gaia_ref.perceive(perceive).subscribe(on_next, on_error)



if __name__ == '__main__':
    unittest.main()
