
from gaia_sdk.graphql.request.type.EdgeKeyOne import EdgeKeyOne
from gaia_sdk.graphql.request.type.Edge import Edge

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField


class ConnectNodeRemovedImpulse(list):
    """
    Impulse which indicates the result removing a node connection
    """

    def id(self):
        self.append(lambda x: "id")

    """
    all edges that are set after this request
    """
    def all_edges(self, config: Callable[['Edge'], None]):
        def callback(registry: VariableRegistry):
            entity = Edge()
            config(entity)
            return "all_edges {" + entity.render(registry) + "}"
        self.append(callback)

    """
    edge removed by this request
    """
    def removed_edge(self, config: Callable[['EdgeKeyOne'], None]):
        def callback(registry: VariableRegistry):
            entity = EdgeKeyOne()
            config(entity)
            return "removed_edge {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
