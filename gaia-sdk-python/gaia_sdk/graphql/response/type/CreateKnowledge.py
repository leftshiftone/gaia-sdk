
from gaia_sdk.graphql.response.type.CreatedIntentImpulse import CreatedIntentImpulse
from gaia_sdk.graphql.request.input.CreateIntentImpulse import CreateIntentImpulse

from dataclasses import dataclass
from typing import List
Uuid = str
String = str
Long = str
Timestamp = str
Struct = dict
Float = float
from gaia_sdk.graphql.request.enumeration.RuntimeState import RuntimeState
from gaia_sdk.graphql.request.enumeration.SkillState import SkillState

@dataclass
class CreateKnowledge:
    dictionary: dict
    """
    creates a list of intents with the given specifications
    """
    @property
    def intents(self) -> List[CreatedIntentImpulse]:
        return list(map(lambda x: CreatedIntentImpulse(x), self.dictionary.get("intents")))
