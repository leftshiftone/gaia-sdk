

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField


class PerceiveReceptionImpulse():
    """
    Input for reception perception impulse
    """
    data: dict

    def __init__(self, data: dict):
        self.data = data

    def __eq__(self, other):
        return self.data == other.data

    def __repr__(self):
        return {'data': self.data}
