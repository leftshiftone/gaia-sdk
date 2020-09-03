

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField


class PerceiveDataImpulse():
    """
    Input for data perception impulse.
    """
    identityId: str
    eventName: str
    eventData: dict

    def __init__(self, identityId: str, eventName: str, eventData: dict):
        self.identityId = identityId
        self.eventName = eventName
        self.eventData = eventData

    def __eq__(self, other):
        return self.identityId == other.identityId and self.eventName == other.eventName and self.eventData == other.eventData

    def __repr__(self):
        return {'identityId': self.identityId, 'eventName': self.eventName, 'eventData': self.eventData}
