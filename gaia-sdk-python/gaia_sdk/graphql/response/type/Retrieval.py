
from gaia_sdk.graphql.response.type.Experience import Experience
from gaia_sdk.graphql.response.type.Knowledge import Knowledge

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
class Retrieval:
    dictionary: dict
    """
    Container element which collects all information static data
    """
    @property
    def knowledge(self) -> Knowledge:
        return Knowledge(self.dictionary.get("knowledge"))
    """
    Container element which collects all information about runtime data
    """
    @property
    def experience(self) -> Experience:
        return Experience(self.dictionary.get("experience"))
