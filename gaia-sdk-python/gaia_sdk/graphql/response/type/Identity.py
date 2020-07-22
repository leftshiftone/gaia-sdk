

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
class Identity:
    """
    Represents identity information
    """
    dictionary: dict
    """
    The identity id
    """
    @property
    def identity_id(self) -> Uuid:
        return Uuid(self.dictionary.get("identityId"))
    """
    The name of the identity
    """
    @property
    def qualifier(self) -> String:
        return String(self.dictionary.get("qualifier"))
