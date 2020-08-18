

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField


class Edge(list):
    """
    Represents graph information
    """

    def source(self):
        self.append(lambda x: "source")

    def target(self):
        self.append(lambda x: "target")

    def type(self):
        self.append(lambda x: "type")

    def weight(self):
        self.append(lambda x: "weight")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
