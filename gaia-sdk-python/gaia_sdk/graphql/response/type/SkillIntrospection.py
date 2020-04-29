

from dataclasses import dataclass
from typing import List
Uuid = str
String = str
Long = str
Timestamp = str
Struct = dict
Float = float
from gaia_sdk.graphql.request.enumeration.RuntimeState import RuntimeState
from gaia_sdk.graphql.request.enumeration.SkillState import SkillState

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
    def started(self) -> Timestamp:
        return Timestamp(self.dictionary.get("started"))
