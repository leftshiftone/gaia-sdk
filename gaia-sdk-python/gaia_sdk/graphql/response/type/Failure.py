

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

class Failure:
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
    def reason(self) -> String:
        return String(self.dictionary.get("reason"))
    @property
    def failure_type(self) -> String:
        return String(self.dictionary.get("failureType"))
    @property
    def exit_code(self) -> Int:
        return Int(self.dictionary.get("exitCode"))
    @property
    def affected_container(self) -> String:
        return String(self.dictionary.get("affectedContainer"))
    @property
    def logs(self) -> List[String]:
        return list(map(lambda x: String(x), self.dictionary.get("logs")))
