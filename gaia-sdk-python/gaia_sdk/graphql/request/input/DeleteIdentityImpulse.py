

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class DeleteIdentityImpulse():
    """
    The specification to delete an identity instance
    """
    identityId: str

    def __init__(self, identityId: str):
        self.identityId = identityId

    def __eq__(self, other):
        if type(other) is type(self):
            return self.identityId == other.identityId
        return False

    def __repr__(self):
        return {'identityId': self.identityId}
