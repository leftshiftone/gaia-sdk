

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class ConnectRemoveNodeImpulse():
    """
    The specification to remove an edge of a certain type with a certain target from a node
    """
    type: EdgeType
    target: str

    def __init__(self, type: EdgeType, target: str):
        self.type = type
        self.target = target

    def __eq__(self, other):
        if type(other) is type(self):
            return self.type == other.type and self.target == other.target
        return False

    def __repr__(self):
        return {'type': self.type, 'target': self.target}
