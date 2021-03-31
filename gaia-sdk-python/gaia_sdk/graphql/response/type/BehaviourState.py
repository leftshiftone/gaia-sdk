

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

class BehaviourState:
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
    def behaviour_id(self) -> String:
        return String(self.dictionary.get("behaviourId"))
    @property
    def behaviour_name(self) -> String:
        return String(self.dictionary.get("behaviourName"))
    @property
    def number_of_executions(self) -> Int:
        return Int(self.dictionary.get("numberOfExecutions"))
    @property
    def running(self) -> Float:
        return Float(self.dictionary.get("running"))
    @property
    def success(self) -> Float:
        return Float(self.dictionary.get("success"))
    @property
    def waiting(self) -> Float:
        return Float(self.dictionary.get("waiting"))
    @property
    def failed(self) -> Float:
        return Float(self.dictionary.get("failed"))
