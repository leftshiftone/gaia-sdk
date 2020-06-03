

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
class Edge:
    """
    Container type for static information
    """
    dictionary: dict
    @property
    def source(self) -> Uuid:
        return Uuid(self.dictionary.get("source"))
    @property
    def target(self) -> Uuid:
        return Uuid(self.dictionary.get("target"))
    @property
    def type(self) -> String:
        return String(self.dictionary.get("type"))
    @property
    def weight(self) -> Float:
        return Float(self.dictionary.get("weight"))
