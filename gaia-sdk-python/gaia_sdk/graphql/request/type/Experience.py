
from gaia_sdk.graphql.request.type.BehaviourExecution import BehaviourExecution
from gaia_sdk.graphql.request.type.BehaviourNodeExecution import BehaviourNodeExecution

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class Experience(list):
    """
    Container type for runtime information
    """

    def behaviour_executions(self, config: Callable[['BehaviourExecution'], None]):
        def callback(registry: VariableRegistry):
            entity = BehaviourExecution()
            config(entity)
            return "behaviour_executions {" + entity.render(registry) + "}"
        self.append(callback)

    def behaviour_node_executions(self, config: Callable[['BehaviourNodeExecution'], None]):
        def callback(registry: VariableRegistry):
            entity = BehaviourNodeExecution()
            config(entity)
            return "behaviour_node_executions {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
