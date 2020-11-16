
from gaia_sdk.graphql.request.type.ConnectNodeKnowledge import ConnectNodeKnowledge

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class ConnectKnowledge(list):

    def node(self, nodeId: str, config: Callable[['ConnectNodeKnowledge'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("nodeId", nodeId)
            entity = ConnectNodeKnowledge()
            config(entity)
            return f'node(nodeId:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
