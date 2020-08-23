

from dataclasses import dataclass
from typing import List
Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
from gaia_sdk.graphql.request.enumeration.RuntimeState import RuntimeState
from gaia_sdk.graphql.request.enumeration.SkillState import SkillState
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField

@dataclass
class SkillIntrospection:
    dictionary: dict
    @property
    def name(self) -> String:
        return String(self.dictionary.get("name"))
    @property
    def state(self) -> SkillState:
        return SkillState(self.dictionary.get("state"))
    @property
    def started(self) -> ISO8601:
        return ISO8601(self.dictionary.get("started"))
