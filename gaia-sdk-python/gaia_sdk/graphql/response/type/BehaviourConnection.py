
from gaia_sdk.graphql.response.type.PageInfo import PageInfo
from gaia_sdk.graphql.response.type.BehaviourEdge import BehaviourEdge

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
class BehaviourConnection:
    """
    Represents a paginated collection of behaviours
    """
    dictionary: dict
    @property
    def edges(self) -> List[BehaviourEdge]:
        return list(map(lambda x: BehaviourEdge(x), self.dictionary.get("edges")))
    @property
    def page_info(self) -> PageInfo:
        return PageInfo(self.dictionary.get("pageInfo"))
