import logging
import unittest
from uuid import uuid4

from pytest import mark

from gaia_sdk.gaia import Gaia
from gaia_sdk.graphql.request.input.CreateIntentImpulse import CreateIntentImpulse
from gaia_sdk.graphql.request.input.DeleteIntentImpulse import DeleteIntentImpulse
from gaia_sdk.graphql.request.input.UpdateIntentImpulse import UpdateIntentImpulse
from gaia_sdk.graphql.request.input.CreatePromptImpulse import CreatePromptImpulse
from gaia_sdk.graphql.request.input.DeletePromptImpulse import DeletePromptImpulse
from gaia_sdk.graphql.request.input.UpdatePromptImpulse import UpdatePromptImpulse
from gaia_sdk.graphql.request.input.CreateStatementImpulse import CreateStatementImpulse
from gaia_sdk.graphql.request.input.DeleteStatementImpulse import DeleteStatementImpulse
from gaia_sdk.graphql.request.input.UpdateStatementImpulse import UpdateStatementImpulse
from gaia_sdk.graphql.request.input.CreateFulfilmentImpulse import CreateFulfilmentImpulse
from gaia_sdk.graphql.request.input.DeleteFulfilmentImpulse import DeleteFulfilmentImpulse
from gaia_sdk.graphql.request.input.UpdateFulfilmentImpulse import UpdateFulfilmentImpulse
from gaia_sdk.graphql.request.input.CreateBehaviourImpulse import CreateBehaviourImpulse
from gaia_sdk.graphql.request.input.DeleteBehaviourImpulse import DeleteBehaviourImpulse
from gaia_sdk.graphql.request.input.UpdateBehaviourImpulse import UpdateBehaviourImpulse
from gaia_sdk.graphql.request.input.CreateCodeImpulse import CreateCodeImpulse
from gaia_sdk.graphql.request.input.DeleteCodeImpulse import DeleteCodeImpulse
from gaia_sdk.graphql.request.input.UpdateCodeImpulse import UpdateCodeImpulse

logging.basicConfig(level=logging.DEBUG)


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

    def test_preserve_create_prompt(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.id)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        impulses = CreatePromptImpulse(str(uuid4()), "", "", dict(), list(), "")
        gaia_ref.preserve_create_prompts([impulses]).subscribe(on_next, on_error)

    def test_preserve_update_prompt(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.id)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        impulses = UpdatePromptImpulse(str(uuid4()), str(uuid4()), "", "", dict(), list(), "")
        gaia_ref.preserve_update_prompts([impulses]).subscribe(on_next, on_error)

    def test_preserve_delete_prompt(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.id)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        impulses = DeletePromptImpulse(str(uuid4()), str(uuid4()))
        gaia_ref.preserve_delete_prompts([impulses]).subscribe(on_next, on_error)

    def test_preserve_create_statement(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.id)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        impulses = CreateStatementImpulse(str(uuid4()), "", "", dict(), list(), "")
        gaia_ref.preserve_create_statements([impulses]).subscribe(on_next, on_error)

    def test_preserve_update_statement(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.id)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        impulses = UpdateStatementImpulse(str(uuid4()), str(uuid4()), "", "", dict(), list(), "")
        gaia_ref.preserve_update_statements([impulses]).subscribe(on_next, on_error)

    def test_preserve_delete_statement(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.id)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        impulses = DeleteStatementImpulse(str(uuid4()), str(uuid4()))
        gaia_ref.preserve_delete_statements([impulses]).subscribe(on_next, on_error)

    def test_preserve_create_fulfilment(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.id)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        impulses = CreateFulfilmentImpulse(str(uuid4()), "", "", dict(), list(), "")
        gaia_ref.preserve_create_fulfilments([impulses]).subscribe(on_next, on_error)

    def test_preserve_update_fulfilment(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.id)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        impulses = UpdateFulfilmentImpulse(str(uuid4()), str(uuid4()), "", "", dict(), list(), "")
        gaia_ref.preserve_update_fulfilments([impulses]).subscribe(on_next, on_error)

    def test_preserve_delete_fulfilment(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.id)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        impulses = DeleteFulfilmentImpulse(str(uuid4()), str(uuid4()))
        gaia_ref.preserve_delete_fulfilments([impulses]).subscribe(on_next, on_error)

    def test_preserve_create_behaviour(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.id)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        impulses = CreateBehaviourImpulse(str(uuid4()), "", "", dict(), list(), "")
        gaia_ref.preserve_create_behaviours([impulses]).subscribe(on_next, on_error)

    def test_preserve_update_behaviour(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.id)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        impulses = UpdateBehaviourImpulse(str(uuid4()), str(uuid4()), "", "", dict(), list(), "")
        gaia_ref.preserve_update_behaviours([impulses]).subscribe(on_next, on_error)

    def test_preserve_delete_behaviour(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.id)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        impulses = DeleteBehaviourImpulse(str(uuid4()), str(uuid4()))
        gaia_ref.preserve_delete_behaviours([impulses]).subscribe(on_next, on_error)

    def test_preserve_create_code(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.id)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        impulses = CreateCodeImpulse(str(uuid4()), "", "", dict(), list(), "")
        gaia_ref.preserve_create_codes([impulses]).subscribe(on_next, on_error)

    def test_preserve_update_code(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.id)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        impulses = UpdateCodeImpulse(str(uuid4()), str(uuid4()), "", "", dict(), list(), "")
        gaia_ref.preserve_update_codes([impulses]).subscribe(on_next, on_error)

    def test_preserve_delete_code(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.id)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        impulses = DeleteCodeImpulse(str(uuid4()), str(uuid4()))
        gaia_ref.preserve_delete_codes([impulses]).subscribe(on_next, on_error)

if __name__ == '__main__':
    unittest.main()
