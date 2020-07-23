
from gaia_sdk.graphql.response.type.SyncSkillEvaluation import SyncSkillEvaluation
from gaia_sdk.graphql.response.type.AsyncSkillEvaluation import AsyncSkillEvaluation

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
class SkillEvaluation:
    dictionary: dict
    @property
    def sync_eval(self) -> SyncSkillEvaluation:
        return SyncSkillEvaluation(self.dictionary.get("syncEval"))
    @property
    def async_eval(self) -> AsyncSkillEvaluation:
        return AsyncSkillEvaluation(self.dictionary.get("asyncEval"))
