

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
class Impulse:
    """
    Each message returned from GAIA implements this interface
    """
    dictionary: dict
    """
    The id of the impulse
    """
    @property
    def id(self) -> Uuid:
        return Uuid(self.dictionary.get("id"))
