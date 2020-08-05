
from gaia_sdk.graphql.response.type.Behaviour import Behaviour

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
class BehaviourEdge:
    """
    Reresents a paginated behaviour
    """
    dictionary: dict
    @property
    def node(self) -> Behaviour:
        return Behaviour(self.dictionary.get("node"))
    @property
    def cursor(self) -> String:
        return String(self.dictionary.get("cursor"))
