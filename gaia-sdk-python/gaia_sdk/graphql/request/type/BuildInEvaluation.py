

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class BuildInEvaluation(list):

    def behaviour(self):
        self.append(lambda x: "behaviour")

    def gaiaquery(self):
        self.append(lambda x: "gaiaquery")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
