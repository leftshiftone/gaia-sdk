import logging
import unittest
import uuid


from gaia_sdk.graphql.GaiaScalars import UUID
from gaia_sdk.gaia import Gaia
from gaia_sdk.api.GaiaCredentials import HMACCredentials
from gaia_sdk.graphql import PerceiveDataImpulse
from gaia_sdk.graphql.request.input.PerceiveActionImpulse import PerceiveActionImpulse
from gaia_sdk.graphql.request.type import Perception
from gaia_sdk.api.client_options import ClientOptions
from gaia_sdk.http.HttpTransporter import HttpTransporter

logging.basicConfig(level=logging.DEBUG)
from rx import operators as ops


class RxException(Exception):
    pass


class TestPerception(unittest.TestCase):

    def test_perceive_data(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))
        impulse = PerceiveDataImpulse(str(uuid.uuid4()), "", {})

        result = gaia_ref.perceive_data(impulse).pipe(ops.first()).run()
        assert result.dictionary.get("id") is not None, "PerceiveData.id is in response"

    def test_perceive_action(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))
        impulse = PerceiveActionImpulse(False, str(uuid.uuid4()), "", {})

        result = gaia_ref.perceive_action(impulse).pipe(ops.first()).run()
        assert result.dictionary.get("id") is not None, "PerceiveAction.id is in response"

    def test_perceive(self):
        gaia_ref = Gaia.connect("http://localhost:8080",  HMACCredentials("mockedApiKey", "mockedApiSecret"))
        impulse1 = PerceiveActionImpulse(False, str(uuid.uuid4()), "", {})
        impulse2 = PerceiveDataImpulse(str(uuid.uuid4()), "", {})

        def perceive(p:Perception):
            p.perceive_action(impulse1, lambda x: x.id())
            p.perceive_data(impulse2, lambda x: x.id())

        result = gaia_ref.perceive(perceive).pipe(ops.first()).run()
        perceiveData =result.dictionary.get("perceiveData")
        perceiveAction =result.dictionary.get("perceiveAction")
        assert perceiveData.get("id") is not None, "PerceiveData.id is in response"
        assert perceiveAction.get("id") is not None, "perceiveAction.id is in response"


if __name__ == '__main__':
    unittest.main()
