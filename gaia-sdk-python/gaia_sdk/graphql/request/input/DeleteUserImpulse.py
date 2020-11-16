

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class DeleteUserImpulse():
    """
    The specification to delete a user instance
    """
    userId: str

    def __init__(self, userId: str):
        self.userId = userId

    def __eq__(self, other):
        if type(other) is type(self):
            return self.userId == other.userId
        return False

    def __repr__(self):
        return {'userId': self.userId}
