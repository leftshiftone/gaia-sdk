import logging
import unittest
from uuid import uuid4
from pytest import mark

from gaia_sdk.gaia import Gaia
from gaia_sdk.graphql.request.type import Behaviour


logging.basicConfig(level=logging.DEBUG)


class TestHMAC(unittest.TestCase):

    def test_retrieve_behaviour(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.identity_id)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        def config(x: Behaviour):
            x.identity_id()

        gaia_ref.retrieve_behaviours(str(uuid4()), config).subscribe(on_next, on_error)

    def test_retrieve_code(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.identity_id)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        def config(x):
            x.identity_id()

        gaia_ref.retrieve_codes(str(uuid4()), config).subscribe(on_next, on_error)

    def test_retrieve_intent(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.identity_id)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        def config(x):
            x.identity_id()
            x.qualifier()

        gaia_ref.retrieve_intents(str(uuid4()), config).subscribe(on_next, on_error)

    def test_retrieve_prompt(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.identity_id)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        def config(x):
            x.identity_id()

        gaia_ref.retrieve_prompts(str(uuid4()), config).subscribe(on_next, on_error)

    def test_retrieve_fulfilment(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.identity_id)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        def config(x):
            x.identity_id()

        gaia_ref.retrieve_fulfilments(str(uuid4()), config).subscribe(on_next, on_error)

    def test_retrieve_statement(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.identity_id)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        def config(x):
            x.identity_id()

        gaia_ref.retrieve_statements(str(uuid4()), config).subscribe(on_next, on_error)

    def test_retrieve_knowledge_edge(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")

        def on_next(x):
            self.assertIsNotNone(x.source)
            self.assertIsNotNone(x.target)

        def on_error(x):
            print("ON_ERROR: " + str(x))
            self.fail(x)

        def config(x):
            x.source()
            x.target()

        gaia_ref.retrieve_knowledge_edge(config).subscribe(on_next, on_error)


if __name__ == '__main__':
    unittest.main()
