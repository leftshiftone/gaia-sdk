

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class ConnectUnsetNodeImpulse():
    """
    The specification to unset edges of a certain type for a node
    """
    type: EdgeType

    def __init__(self, type: EdgeType):
        self.type = type

    def __eq__(self, other):
        if type(other) is type(self):
            return self.type == other.type
        return False

    def __repr__(self):
        return {'type': self.type}
