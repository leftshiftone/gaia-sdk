

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class TopExecutedBehaviour(list):

    def behaviour_id(self):
        self.append(lambda x: "behaviourId")

    def behaviour_name(self):
        self.append(lambda x: "behaviourName")

    def number_of_executions(self):
        self.append(lambda x: "numberOfExecutions")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
