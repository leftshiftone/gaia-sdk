

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField


class CreateEdgeImpulse():
    """
    The specification to create an edge instance
    """
    source: str
    target: str
    type: str
    weight: float

    def __init__(self, source: str, target: str, type: str, weight: float):
        self.source = source
        self.target = target
        self.type = type
        self.weight = weight

    def __eq__(self, other):
        return self.source == other.source and self.target == other.target and self.type == other.type and self.weight == other.weight

    def __repr__(self):
        return {'source': self.source, 'target': self.target, 'type': self.type, 'weight': self.weight}
