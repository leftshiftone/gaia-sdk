

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField


class User(list):
    """
    Represents User information
    """

    """
    Id of the user
    """
    def user_id(self):
        self.append(lambda x: "userId")

    """
    The username of the user
    """
    def username(self):
        self.append(lambda x: "username")

    """
    Is the User using 2FA
    """
    def using2_f_a(self):
        self.append(lambda x: "using2FA")

    """
    The tenants of the user
    """
    def tenants(self):
        self.append(lambda x: "tenants")

    """
    The roles of the user
    """
    def roles(self):
        self.append(lambda x: "roles")

    """
    The groups of the user
    """
    def groups(self):
        self.append(lambda x: "groups")

    """
    The permissions of the user
    """
    def permissions(self):
        self.append(lambda x: "permissions")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
