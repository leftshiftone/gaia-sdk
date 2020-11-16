

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class DeleteRoleImpulse():
    """
    The specification to delete a role instance
    """
    roleId: str

    def __init__(self, roleId: str):
        self.roleId = roleId

    def __eq__(self, other):
        if type(other) is type(self):
            return self.roleId == other.roleId
        return False

    def __repr__(self):
        return {'roleId': self.roleId}
