

from dataclasses import dataclass
Uuid = str
String = str
Long = str
Timestamp = str
Struct = dict
Float = float
from gaia_sdk.graphql.request.enumeration.RuntimeState import RuntimeState
from gaia_sdk.graphql.request.enumeration.SkillState import SkillState

@dataclass
class AsyncSkillEvaluation:
    dictionary: dict
    @property
    def tbd(self) -> String:
        return String(self.dictionary.get("tbd"))
