

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class ConnectSetNodeImpulse():
    """
    The specification to set an edge for a node
    """
    type: EdgeType
    target: str
    properties: dict
    weight: float

    def __init__(self, type: EdgeType, target: str, properties: dict, weight: float):
        self.type = type
        self.target = target
        self.properties = properties
        self.weight = weight

    def __eq__(self, other):
        if type(other) is type(self):
            return self.type == other.type and self.target == other.target and self.properties == other.properties and self.weight == other.weight
        return False

    def __repr__(self):
        return {'type': self.type, 'target': self.target, 'properties': self.properties, 'weight': self.weight}
