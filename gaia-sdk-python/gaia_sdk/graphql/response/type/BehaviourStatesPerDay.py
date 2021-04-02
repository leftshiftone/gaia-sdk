

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

class BehaviourStatesPerDay:
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
    def date(self) -> ISO8601:
        return ISO8601(self.dictionary.get("date"))
    @property
    def running(self) -> Int:
        return Int(self.dictionary.get("running"))
    @property
    def success(self) -> Int:
        return Int(self.dictionary.get("success"))
    @property
    def waiting(self) -> Int:
        return Int(self.dictionary.get("waiting"))
    @property
    def failed(self) -> Int:
        return Int(self.dictionary.get("failed"))
