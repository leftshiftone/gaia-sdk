

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class BehaviourExecution(list):
    """
    Represents behaviour execution information
    """

    def process_instance_id(self):
        self.append(lambda x: "processInstanceId")

    def state(self):
        self.append(lambda x: "state")

    def timestamp(self):
        self.append(lambda x: "timestamp")

    def duration(self):
        self.append(lambda x: "duration")

    def start_event_type(self):
        self.append(lambda x: "startEventType")

    def start_event_id(self):
        self.append(lambda x: "startEventId")

    def init_attributes(self):
        self.append(lambda x: "initAttributes")

    def process_id(self):
        self.append(lambda x: "processId")

    def parent_process_id(self):
        self.append(lambda x: "parentProcessId")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
