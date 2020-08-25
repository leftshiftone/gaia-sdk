

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
class BuildInEvaluation:
    dictionary: dict
    @property
    def behaviour(self) -> String:
        return String(self.dictionary.get("behaviour"))
    @property
    def gaiaquery(self) -> String:
        return String(self.dictionary.get("gaiaquery"))
