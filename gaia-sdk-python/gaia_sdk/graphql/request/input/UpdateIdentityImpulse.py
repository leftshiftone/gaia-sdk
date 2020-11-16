

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class UpdateIdentityImpulse():
    """
    The specification to update an identity instance
    """
    identityId: str
    tenantId: str
    qualifier: str

    def __init__(self, identityId: str, tenantId: str, qualifier: str):
        self.identityId = identityId
        self.tenantId = tenantId
        self.qualifier = qualifier

    def __eq__(self, other):
        if type(other) is type(self):
            return self.identityId == other.identityId and self.tenantId == other.tenantId and self.qualifier == other.qualifier
        return False

    def __repr__(self):
        return {'identityId': self.identityId, 'tenantId': self.tenantId, 'qualifier': self.qualifier}
