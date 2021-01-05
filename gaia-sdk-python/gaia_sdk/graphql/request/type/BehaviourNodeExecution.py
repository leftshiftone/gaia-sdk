

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class BehaviourNodeExecution(list):
    """
    Represents behaviour node execution information
    """

    def activity_id(self):
        self.append(lambda x: "activityId")

    def behaviour_qualifier(self):
        self.append(lambda x: "behaviourQualifier")

    def behaviour_id(self):
        self.append(lambda x: "behaviourId")

    def reference(self):
        self.append(lambda x: "reference")

    def qualifier(self):
        self.append(lambda x: "qualifier")

    def state(self):
        self.append(lambda x: "state")

    def type(self):
        self.append(lambda x: "type")

    def created(self):
        self.append(lambda x: "created")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
