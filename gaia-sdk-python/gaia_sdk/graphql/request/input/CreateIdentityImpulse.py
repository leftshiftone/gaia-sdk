

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField


class CreateIdentityImpulse():
    """
    The specification to create an identity instance
    """
    qualifier: str

    def __init__(self, qualifier: str):
        self.qualifier = qualifier

    def __eq__(self, other):
        return self.qualifier == other.qualifier

    def __repr__(self):
        return {'qualifier': self.qualifier}
