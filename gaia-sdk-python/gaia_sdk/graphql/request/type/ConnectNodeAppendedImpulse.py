
from gaia_sdk.graphql.request.type.Edge import Edge

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class ConnectNodeAppendedImpulse(list):
    """
    Impulse which indicates the result appending a node connection
    """

    def id(self):
        self.append(lambda x: "id")

    """
    edge created by this request
    """
    def new_edge(self, config: Callable[['Edge'], None]):
        def callback(registry: VariableRegistry):
            entity = Edge()
            config(entity)
            return "new_edge {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
