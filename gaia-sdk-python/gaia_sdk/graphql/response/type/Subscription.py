
from gaia_sdk.graphql.response.type.Interaction import Interaction
from gaia_sdk.graphql.response.type.Introspection import Introspection
from gaia_sdk.graphql.response.type.Notification import Notification

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

class Subscription:
    """
    the top level subscription type
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

    @property
    def interact(self) -> Interaction:
        return Interaction(self.dictionary.get("interact"))
    @property
    def notify(self) -> Notification:
        return Notification(self.dictionary.get("notify"))
    """
    Container element for all introspect sensor fields
    """
    @property
    def introspect(self) -> Introspection:
        return Introspection(self.dictionary.get("introspect"))
