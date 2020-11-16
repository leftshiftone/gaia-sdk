

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class DeleteEdgeImpulse():
    """
    The specification to delete an edge instance
    """
    source: str
    edgeId: str

    def __init__(self, source: str, edgeId: str):
        self.source = source
        self.edgeId = edgeId

    def __eq__(self, other):
        if type(other) is type(self):
            return self.source == other.source and self.edgeId == other.edgeId
        return False

    def __repr__(self):
        return {'source': self.source, 'edgeId': self.edgeId}
