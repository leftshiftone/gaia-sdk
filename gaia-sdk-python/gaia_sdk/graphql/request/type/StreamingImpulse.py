

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class StreamingImpulse(list):

    def id(self):
        self.append(lambda x: "id")

    def pre_signed_url(self):
        self.append(lambda x: "preSignedUrl")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
