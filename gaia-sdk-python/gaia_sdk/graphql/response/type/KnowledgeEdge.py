

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
class KnowledgeEdge:
    """
    Container type for static information
    """
    dictionary: dict
    @property
    def source(self) -> Struct:
        return Struct(self.dictionary.get("source"))
    @property
    def target(self) -> Struct:
        return Struct(self.dictionary.get("target"))
    @property
    def type(self) -> String:
        return String(self.dictionary.get("type"))
    @property
    def weight(self) -> Float:
        return Float(self.dictionary.get("weight"))
