

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class Tenant(list):
    """
    Represents tenant information
    """

    """
    The tenant id
    """
    def tenant_id(self):
        self.append(lambda x: "tenantId")

    """
    The name of the tenant
    """
    def qualifier(self):
        self.append(lambda x: "qualifier")

    """
    The list of implicit identities
    """
    def implicit_identities(self):
        self.append(lambda x: "implicitIdentities")

    """
    The list of explicit identities
    """
    def explicit_identities(self):
        self.append(lambda x: "explicitIdentities")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
