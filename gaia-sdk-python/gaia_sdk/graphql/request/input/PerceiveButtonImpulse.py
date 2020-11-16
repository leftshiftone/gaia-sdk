

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class PerceiveButtonImpulse():
    """
    Input for button perception impulse
    """
    name: str
    value: str

    def __init__(self, name: str, value: str):
        self.name = name
        self.value = value

    def __eq__(self, other):
        if type(other) is type(self):
            return self.name == other.name and self.value == other.value
        return False

    def __repr__(self):
        return {'name': self.name, 'value': self.value}
