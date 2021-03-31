

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class BehaviourStatesPerDay(list):

    def date(self):
        self.append(lambda x: "date")

    def running(self):
        self.append(lambda x: "running")

    def success(self):
        self.append(lambda x: "success")

    def waiting(self):
        self.append(lambda x: "waiting")

    def failed(self):
        self.append(lambda x: "failed")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
