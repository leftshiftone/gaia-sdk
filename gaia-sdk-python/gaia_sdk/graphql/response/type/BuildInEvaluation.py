

from dataclasses import dataclass
from typing import List
Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
from gaia_sdk.graphql.request.enumeration.RuntimeState import RuntimeState
from gaia_sdk.graphql.request.enumeration.SkillState import SkillState

@dataclass
class BuildInEvaluation:
    dictionary: dict
    @property
    def behaviour(self) -> String:
        return String(self.dictionary.get("behaviour"))
    @property
    def gaiaquery(self) -> String:
        return String(self.dictionary.get("gaiaquery"))
