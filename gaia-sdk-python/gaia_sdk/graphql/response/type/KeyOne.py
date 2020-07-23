

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
class KeyOne:
    """
    This entity represents the output of a delete impulse
    """
    dictionary: dict
    @property
    def identity_id(self) -> Uuid:
        return Uuid(self.dictionary.get("identityId"))
    @property
    def reference(self) -> Uuid:
        return Uuid(self.dictionary.get("reference"))
