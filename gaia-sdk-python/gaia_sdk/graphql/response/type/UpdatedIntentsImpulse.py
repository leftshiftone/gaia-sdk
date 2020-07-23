
from gaia_sdk.graphql.response.type.Intent import Intent

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
class UpdatedIntentsImpulse:
    """
    Impulse which indicates the resulf of a update intent impulse
    """
    dictionary: dict
    @property
    def id(self) -> Uuid:
        return Uuid(self.dictionary.get("id"))
    """
    the intent instance
    """
    @property
    def intents(self) -> Intent:
        return Intent(self.dictionary.get("intents"))
