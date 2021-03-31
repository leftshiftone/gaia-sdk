

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

    def identity_id(self):
        self.append(lambda x: "identityId")

    def state(self):
        self.append(lambda x: "state")

    def name(self):
        self.append(lambda x: "name")

    def duration(self):
        self.append(lambda x: "duration")

    def behaviour_id(self):
        self.append(lambda x: "behaviourId")

    def created(self):
        self.append(lambda x: "created")

    def updated(self):
        self.append(lambda x: "updated")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
