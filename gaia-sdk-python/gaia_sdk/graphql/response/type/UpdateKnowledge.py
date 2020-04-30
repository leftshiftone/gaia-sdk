
from gaia_sdk.graphql.response.type.UpdatedIntentImpulse import UpdatedIntentImpulse
from gaia_sdk.graphql.request.input.UpdateIntentImpulse import UpdateIntentImpulse

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
class UpdateKnowledge:
    dictionary: dict
    """
    updates a list of intents with the given specifications
    """
    @property
    def intents(self) -> List[UpdatedIntentImpulse]:
        return list(map(lambda x: UpdatedIntentImpulse(x), self.dictionary.get("intents")))
