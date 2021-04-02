

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

class Edge:
    """
    Represents graph information
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
    def source(self) -> Uuid:
        return Uuid(self.dictionary.get("source"))
    @property
    def target(self) -> Uuid:
        return Uuid(self.dictionary.get("target"))
    @property
    def edge_id(self) -> Uuid:
        return Uuid(self.dictionary.get("edgeId"))
    @property
    def type(self) -> String:
        return String(self.dictionary.get("type"))
    @property
    def weight(self) -> Float:
        return Float(self.dictionary.get("weight"))
    @property
    def properties(self) -> Struct:
        return Struct(self.dictionary.get("properties"))
