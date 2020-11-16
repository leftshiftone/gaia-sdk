

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class UpdateTenantImpulse():
    """
    The specification to update a tenant
    """
    tenantId: str
    qualifier: str
    implicitIdentities: List[str]
    explicitIdentities: List[str]

    def __init__(self, tenantId: str, qualifier: str, implicitIdentities: List[str], explicitIdentities: List[str]):
        self.tenantId = tenantId
        self.qualifier = qualifier
        self.implicitIdentities = implicitIdentities
        self.explicitIdentities = explicitIdentities

    def __eq__(self, other):
        if type(other) is type(self):
            return self.tenantId == other.tenantId and self.qualifier == other.qualifier and self.implicitIdentities == other.implicitIdentities and self.explicitIdentities == other.explicitIdentities
        return False

    def __repr__(self):
        return {'tenantId': self.tenantId, 'qualifier': self.qualifier, 'implicitIdentities': self.implicitIdentities, 'explicitIdentities': self.explicitIdentities}
