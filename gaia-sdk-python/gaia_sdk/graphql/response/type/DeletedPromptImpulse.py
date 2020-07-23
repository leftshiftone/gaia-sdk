
from gaia_sdk.graphql.response.type.KeyOne import KeyOne

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
class DeletedPromptImpulse:
    """
    Impulse which indicates the result of a delete prompt impulse
    """
    dictionary: dict
    @property
    def id(self) -> Uuid:
        return Uuid(self.dictionary.get("id"))
    @property
    def data(self) -> KeyOne:
        return KeyOne(self.dictionary.get("data"))
