

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField


class UpdateUserImpulse():
    """
    The specification to update a user instance
    """
    userId: str
    username: str
    password: str
    using2FA: bool
    tenants: List[str]
    roles: List[str]
    groups: List[str]
    permissions: List[str]

    def __init__(self, userId: str, username: str, password: str, using2FA: bool, tenants: List[str], roles: List[str], groups: List[str], permissions: List[str]):
        self.userId = userId
        self.username = username
        self.password = password
        self.using2FA = using2FA
        self.tenants = tenants
        self.roles = roles
        self.groups = groups
        self.permissions = permissions

    def __eq__(self, other):
        if type(other) is type(self):
            return self.userId == other.userId and self.username == other.username and self.password == other.password and self.using2FA == other.using2FA and self.tenants == other.tenants and self.roles == other.roles and self.groups == other.groups and self.permissions == other.permissions
        return False

    def __repr__(self):
        return {'userId': self.userId, 'username': self.username, 'password': self.password, 'using2FA': self.using2FA, 'tenants': self.tenants, 'roles': self.roles, 'groups': self.groups, 'permissions': self.permissions}
