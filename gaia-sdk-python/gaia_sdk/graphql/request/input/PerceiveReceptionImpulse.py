

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class PerceiveReceptionImpulse():
    """
    Input for reception perception impulse
    """
    data: dict

    def __init__(self, data: dict):
        self.data = data

    def __eq__(self, other):
        if type(other) is type(self):
            return self.data == other.data
        return False

    def __repr__(self):
        return {'data': self.data}
