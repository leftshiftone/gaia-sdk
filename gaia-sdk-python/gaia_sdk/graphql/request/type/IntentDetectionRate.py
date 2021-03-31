

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class IntentDetectionRate(list):

    def detected(self):
        self.append(lambda x: "detected")

    def unaware(self):
        self.append(lambda x: "unaware")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
