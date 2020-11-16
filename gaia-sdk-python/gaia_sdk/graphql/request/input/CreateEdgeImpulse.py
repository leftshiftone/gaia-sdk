

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class CreateEdgeImpulse():
    """
    The specification to create an edge instance
    """
    source: str
    target: str
    type: str
    weight: float
    properties: dict

    def __init__(self, source: str, target: str, type: str, weight: float, properties: dict):
        self.source = source
        self.target = target
        self.type = type
        self.weight = weight
        self.properties = properties

    def __eq__(self, other):
        if type(other) is type(self):
            return self.source == other.source and self.target == other.target and self.type == other.type and self.weight == other.weight and self.properties == other.properties
        return False

    def __repr__(self):
        return {'source': self.source, 'target': self.target, 'type': self.type, 'weight': self.weight, 'properties': self.properties}
