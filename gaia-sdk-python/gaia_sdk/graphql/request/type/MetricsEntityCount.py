

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class MetricsEntityCount(list):

    def intents(self):
        self.append(lambda x: "intents")

    def prompts(self):
        self.append(lambda x: "prompts")

    def statements(self):
        self.append(lambda x: "statements")

    def fulfilments(self):
        self.append(lambda x: "fulfilments")

    def behaviours(self):
        self.append(lambda x: "behaviours")

    def codes(self):
        self.append(lambda x: "codes")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
