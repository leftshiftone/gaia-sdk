import unittest

from gaia_sdk.gaia import Gaia
from gaia_sdk.graphql import PerceiveDataImpulse
from rx import of


class TestHMAC(unittest.TestCase):

    def test_hash(self):
        gaia_ref = Gaia.connect("http://localhost:8080", "", "")
        impulse = PerceiveDataImpulse("", "", {})

        on_next = lambda x: print("next: " + str(x))
        on_error = lambda x: print(x)
        gaia_ref.perceive_data(impulse).subscribe(on_next, on_error)

if __name__ == '__main__':
    unittest.main()
