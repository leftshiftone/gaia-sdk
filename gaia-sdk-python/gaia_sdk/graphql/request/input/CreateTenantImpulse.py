

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class CreateTenantImpulse():
    """
    The specification to create a tenant
    """
    qualifier: str
    implicitIdentities: List[str]
    explicitIdentities: List[str]

    def __init__(self, qualifier: str, implicitIdentities: List[str], explicitIdentities: List[str]):
        self.qualifier = qualifier
        self.implicitIdentities = implicitIdentities
        self.explicitIdentities = explicitIdentities

    def __eq__(self, other):
        if type(other) is type(self):
            return self.qualifier == other.qualifier and self.implicitIdentities == other.implicitIdentities and self.explicitIdentities == other.explicitIdentities
        return False

    def __repr__(self):
        return {'qualifier': self.qualifier, 'implicitIdentities': self.implicitIdentities, 'explicitIdentities': self.explicitIdentities}
