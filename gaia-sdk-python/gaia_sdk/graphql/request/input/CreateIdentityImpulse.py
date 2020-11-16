

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class CreateIdentityImpulse():
    """
    The specification to create an identity instance
    """
    tenantId: str
    qualifier: str

    def __init__(self, tenantId: str, qualifier: str):
        self.tenantId = tenantId
        self.qualifier = qualifier

    def __eq__(self, other):
        if type(other) is type(self):
            return self.tenantId == other.tenantId and self.qualifier == other.qualifier
        return False

    def __repr__(self):
        return {'tenantId': self.tenantId, 'qualifier': self.qualifier}
