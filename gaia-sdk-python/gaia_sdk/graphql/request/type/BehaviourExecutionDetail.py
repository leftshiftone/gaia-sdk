
from gaia_sdk.graphql.request.type.BehaviourNodeExecution import BehaviourNodeExecution

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class BehaviourExecutionDetail(list):
    """
    Represents a detailed summary of executed entities to a given processInstanceId
    """

    def process_instance_id(self):
        self.append(lambda x: "processInstanceId")

    def identity_id(self):
        self.append(lambda x: "identityId")

    def qualifier(self):
        self.append(lambda x: "qualifier")

    def behaviours(self):
        self.append(lambda x: "behaviours")

    def behaviour_id(self):
        self.append(lambda x: "behaviourId")

    def nodes(self, config: Callable[['BehaviourNodeExecution'], None]):
        def callback(registry: VariableRegistry):
            entity = BehaviourNodeExecution()
            config(entity)
            return "nodes {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
