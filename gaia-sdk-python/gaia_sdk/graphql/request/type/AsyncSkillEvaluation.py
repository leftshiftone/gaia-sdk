

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class AsyncSkillEvaluation(list):

    def tbd(self):
        self.append(lambda x: "tbd")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
