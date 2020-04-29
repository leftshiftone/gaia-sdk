import logging
import unittest
from uuid import uuid4

from pytest import mark

from gaia_sdk.gaia import Gaia
from gaia_sdk.graphql.request.input.CreateIntentImpulse import CreateIntentImpulse
from gaia_sdk.graphql.request.input.DeleteIntentImpulse import DeleteIntentImpulse
from gaia_sdk.graphql.request.input.UpdateIntentImpulse import UpdateIntentImpulse
from gaia_sdk.graphql.request.type import Behaviour

logging.basicConfig(level=logging.DEBUG)


@mark.skip(reason="enable testing when mock server is ready") #todo: enable
class TestHMAC(unittest.TestCase):

    def test_preserve_create_intent(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.id)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        impulses = CreateIntentImpulse(str(uuid4()), "", "", dict(), list(), "")
        gaia_ref.preserve_create_intents([impulses]).subscribe(on_next, on_error)

    def test_preserve_update_intent(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.id)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        impulses = UpdateIntentImpulse(str(uuid4()), str(uuid4()), "", "", dict(), list(), "")
        gaia_ref.preserve_update_intents([impulses]).subscribe(on_next, on_error)

    def test_preserve_delete_intent(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.id)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        impulses = DeleteIntentImpulse(str(uuid4()), str(uuid4()))
        gaia_ref.preserve_delete_intents([impulses]).subscribe(on_next, on_error)

if __name__ == '__main__':
    unittest.main()
