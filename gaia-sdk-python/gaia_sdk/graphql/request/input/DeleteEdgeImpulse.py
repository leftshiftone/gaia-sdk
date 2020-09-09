

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField


class DeleteEdgeImpulse():
    """
    The specification to delete an edge instance
    """
    source: str
    target: str

    def __init__(self, source: str, target: str):
        self.source = source
        self.target = target

    def __eq__(self, other):
        if type(other) is type(self):
            return self.source == other.source and self.target == other.target
        return False

    def __repr__(self):
        return {'source': self.source, 'target': self.target}
