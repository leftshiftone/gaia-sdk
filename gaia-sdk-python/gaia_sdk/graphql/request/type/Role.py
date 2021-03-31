

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class Role(list):
    """
    Represents Role information
    """

    """
    Id of the tenant
    """
    def tenant_id(self):
        self.append(lambda x: "tenantId")

    """
    Id of the role
    """
    def role_id(self):
        self.append(lambda x: "roleId")

    """
    The name of the role
    """
    def name(self):
        self.append(lambda x: "name")

    """
    The permissions of the role
    """
    def permissions(self):
        self.append(lambda x: "permissions")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
