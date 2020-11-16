
from gaia_sdk.graphql.request.type.EdgeKeyOne import EdgeKeyOne

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class ConnectNodeRemovedImpulse(list):
    """
    Impulse which indicates the result removing a node connection
    """

    def id(self):
        self.append(lambda x: "id")

    """
    edges removed by this request
    """
    def removed_edges(self, config: Callable[['EdgeKeyOne'], None]):
        def callback(registry: VariableRegistry):
            entity = EdgeKeyOne()
            config(entity)
            return "removed_edges {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
