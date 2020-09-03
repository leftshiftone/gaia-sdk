

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField


class PerceiveUtteranceImpulse():
    """
    Input for utterance perception impulse
    """
    utterance: str

    def __init__(self, utterance: str):
        self.utterance = utterance

    def __eq__(self, other):
        return self.utterance == other.utterance

    def __repr__(self):
        return {'utterance': self.utterance}
