

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class EdgeKeyOne(list):
    """
    This entity represents the output of an edge delete impulse
    """

    def source(self):
        self.append(lambda x: "source")

    def edge_id(self):
        self.append(lambda x: "edgeId")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
