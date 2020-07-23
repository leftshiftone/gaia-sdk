
from gaia_sdk.graphql.response.type.BuildInEvaluation import BuildInEvaluation
from gaia_sdk.graphql.response.type.SkillEvaluation import SkillEvaluation

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
class Evaluation:
    dictionary: dict
    @property
    def skill(self) -> SkillEvaluation:
        return SkillEvaluation(self.dictionary.get("skill"))
    @property
    def build_in(self) -> BuildInEvaluation:
        return BuildInEvaluation(self.dictionary.get("buildIn"))
