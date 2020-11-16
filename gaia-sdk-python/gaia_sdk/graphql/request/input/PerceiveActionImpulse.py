

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class PerceiveActionImpulse():
    """
    Input for action perception impulse
    """
    broadcast: bool
    identityId: str
    type: str
    data: dict

    def __init__(self, broadcast: bool, identityId: str, type: str, data: dict):
        self.broadcast = broadcast
        self.identityId = identityId
        self.type = type
        self.data = data

    def __eq__(self, other):
        if type(other) is type(self):
            return self.broadcast == other.broadcast and self.identityId == other.identityId and self.type == other.type and self.data == other.data
        return False

    def __repr__(self):
        return {'broadcast': self.broadcast, 'identityId': self.identityId, 'type': self.type, 'data': self.data}
