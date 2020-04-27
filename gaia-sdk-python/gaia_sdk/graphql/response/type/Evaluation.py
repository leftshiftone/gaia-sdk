
from gaia_sdk.graphql.response.type.BuildInEvaluation import BuildInEvaluation
from gaia_sdk.graphql.response.type.SkillEvaluation import SkillEvaluation

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
class Evaluation:
    dictionary: dict
    @property
    def skill(self) -> SkillEvaluation:
        return SkillEvaluation(self.dictionary.get("skill"))
    @property
    def build_in(self) -> BuildInEvaluation:
        return BuildInEvaluation(self.dictionary.get("buildIn"))
