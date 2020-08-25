

from dataclasses import dataclass
from typing import List
Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool
from gaia_sdk.graphql.request.enumeration.RuntimeState import RuntimeState
from gaia_sdk.graphql.request.enumeration.SkillState import SkillState
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField

@dataclass
class Edge:
    """
    Represents graph information
    """
    dictionary: dict
    @property
    def source(self) -> Uuid:
        return Uuid(self.dictionary.get("source"))
    @property
    def target(self) -> Uuid:
        return Uuid(self.dictionary.get("target"))
    @property
    def type(self) -> String:
        return String(self.dictionary.get("type"))
    @property
    def weight(self) -> Float:
        return Float(self.dictionary.get("weight"))
