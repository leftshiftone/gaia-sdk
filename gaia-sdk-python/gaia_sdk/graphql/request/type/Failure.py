

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class Failure(list):

    def reason(self):
        self.append(lambda x: "reason")

    def failure_type(self):
        self.append(lambda x: "failureType")

    def exit_code(self):
        self.append(lambda x: "exitCode")

    def affected_container(self):
        self.append(lambda x: "affectedContainer")

    def logs(self):
        self.append(lambda x: "logs")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
