

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

class BehaviourNodeExecution:
    """
    Represents behaviour node execution information
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
    def activity_id(self) -> String:
        return String(self.dictionary.get("activityId"))
    @property
    def behaviour_qualifier(self) -> String:
        return String(self.dictionary.get("behaviourQualifier"))
    @property
    def behaviour_id(self) -> String:
        return String(self.dictionary.get("behaviourId"))
    @property
    def reference(self) -> Uuid:
        return Uuid(self.dictionary.get("reference"))
    @property
    def qualifier(self) -> String:
        return String(self.dictionary.get("qualifier"))
    @property
    def state(self) -> String:
        return String(self.dictionary.get("state"))
    @property
    def type(self) -> String:
        return String(self.dictionary.get("type"))
    @property
    def created(self) -> ISO8601:
        return ISO8601(self.dictionary.get("created"))
