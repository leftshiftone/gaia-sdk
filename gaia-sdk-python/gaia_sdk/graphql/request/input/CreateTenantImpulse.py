

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

    def __init__(self, qualifier: str):
        self.qualifier = qualifier

    def __eq__(self, other):
        if type(other) is type(self):
            return self.qualifier == other.qualifier
        return False

    def __repr__(self):
        return {'qualifier': self.qualifier}
