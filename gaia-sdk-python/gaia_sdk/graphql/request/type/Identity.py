

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField


class Identity(list):
    """
    Represents identity information
    """

    """
    The identity id
    """
    def identity_id(self):
        self.append(lambda x: "identityId")

    """
    The name of the identity
    """
    def qualifier(self):
        self.append(lambda x: "qualifier")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
