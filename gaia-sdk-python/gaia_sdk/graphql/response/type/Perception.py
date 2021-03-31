
from gaia_sdk.graphql.response.type.Conversational import Conversational
from gaia_sdk.graphql.response.type.PerceivedImpulse import PerceivedImpulse
from gaia_sdk.graphql.request.input.PerceiveDataImpulse import PerceiveDataImpulse
from gaia_sdk.graphql.request.input.PerceiveActionImpulse import PerceiveActionImpulse

from typing import List
Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType

class Perception:
    """
    This type contains all perception sensor impulses which are used to invoke
    events in gaia.
    """
    dictionary: dict

    def __init__(self, dictionary: dict):
        self.dictionary = dictionary

    def __eq__(self, other):
        if type(other) is type(self):
            return self.dictionary == other.dictionary
        return False

    def __repr__(self):
        return {'dictionary': self.dictionary}

    """
    Contains all perception fields needed for a conversation.
    """
    @property
    def conversational(self) -> Conversational:
        return Conversational(self.dictionary.get("conversational"))
    """
    Data perception impulse used to invoke a data transformation behaviour
    """
    @property
    def perceive_data(self) -> PerceivedImpulse:
        return PerceivedImpulse(self.dictionary.get("perceiveData"))
    """
    Action perception impulse used to invoke a data transformation behaviour
    """
    @property
    def perceive_action(self) -> PerceivedImpulse:
        return PerceivedImpulse(self.dictionary.get("perceiveAction"))
