
from gaia_sdk.graphql.response.type.Intent import Intent

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
class DeletedIntentImpulse:
    """
    Impulse which indicates the resulf of a delete intent impulse
    """
    dictionary: dict
    @property
    def id(self) -> Uuid:
        return Uuid(self.dictionary.get("id"))
    """
    the intent instance
    """
    @property
    def intent(self) -> Intent:
        return Intent(self.dictionary.get("intent"))
