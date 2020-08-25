
from gaia_sdk.graphql.response.type.BuildInEvaluation import BuildInEvaluation
from gaia_sdk.graphql.response.type.SkillEvaluation import SkillEvaluation

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
class Evaluation:
    dictionary: dict
    @property
    def skill(self) -> SkillEvaluation:
        return SkillEvaluation(self.dictionary.get("skill"))
    @property
    def build_in(self) -> BuildInEvaluation:
        return BuildInEvaluation(self.dictionary.get("buildIn"))
