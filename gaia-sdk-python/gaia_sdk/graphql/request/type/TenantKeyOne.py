

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField


class TenantKeyOne(list):
    """
    This entity represents the output of a delete tenant impulse
    """

    def tenant_id(self):
        self.append(lambda x: "tenantId")

    def reference(self):
        self.append(lambda x: "reference")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))