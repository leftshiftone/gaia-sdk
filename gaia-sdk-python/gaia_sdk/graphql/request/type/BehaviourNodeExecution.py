

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

    def process_instance_id(self):
        self.append(lambda x: "processInstanceId")

    def node_instance_id(self):
        self.append(lambda x: "nodeInstanceId")

    def state(self):
        self.append(lambda x: "state")

    def execution_group_id(self):
        self.append(lambda x: "executionGroupId")

    def node_id(self):
        self.append(lambda x: "nodeId")

    def process_id(self):
        self.append(lambda x: "processId")

    def type(self):
        self.append(lambda x: "type")

    def transitions(self):
        self.append(lambda x: "transitions")

    def timestamp(self):
        self.append(lambda x: "timestamp")

    def parent_process_id(self):
        self.append(lambda x: "parentProcessId")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
