

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
class DeletedEdgeImpulse:
    """
    Impulse which indicates the result of a delete edge impulse
    """
    dictionary: dict
    @property
    def id(self) -> Uuid:
        return Uuid(self.dictionary.get("id"))
    @property
    def source(self) -> Uuid:
        return Uuid(self.dictionary.get("source"))
    @property
    def target(self) -> Uuid:
        return Uuid(self.dictionary.get("target"))
