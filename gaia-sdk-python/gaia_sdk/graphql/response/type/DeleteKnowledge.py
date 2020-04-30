
from gaia_sdk.graphql.response.type.DeletedIntentImpulse import DeletedIntentImpulse
from gaia_sdk.graphql.request.input.DeleteIntentImpulse import DeleteIntentImpulse

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
class DeleteKnowledge:
    dictionary: dict
    """
    deletes a list of intents with the given specifications
    """
    @property
    def intents(self) -> List[DeletedIntentImpulse]:
        return list(map(lambda x: DeletedIntentImpulse(x), self.dictionary.get("intents")))
