
from gaia_sdk.graphql.response.type.DeletedIntentImpulse import DeletedIntentImpulse
from gaia_sdk.graphql.response.type.CreatedIntentImpulse import CreatedIntentImpulse
from gaia_sdk.graphql.response.type.UpdatedIntentImpulse import UpdatedIntentImpulse
from gaia_sdk.graphql.request.input.CreateIntentImpulse import CreateIntentImpulse
from gaia_sdk.graphql.request.input.UpdateIntentImpulse import UpdateIntentImpulse
from gaia_sdk.graphql.request.input.DeleteIntentImpulse import DeleteIntentImpulse

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
class Preservation:
    """
    This type contains all preservation sensor impulses which are used to support
    read/write/delete memory functions in gaia.
    """
    dictionary: dict
    """
    creates a list of intents with the given specifications
    """
    @property
    def create_intents(self) -> CreatedIntentImpulse:
        return CreatedIntentImpulse(self.dictionary.get("createIntents"))
    """
    updates a list of intents with the given specifications
    """
    @property
    def update_intents(self) -> UpdatedIntentImpulse:
        return UpdatedIntentImpulse(self.dictionary.get("updateIntents"))
    """
    deletes a list of intents with the given specifications
    """
    @property
    def delete_intents(self) -> DeletedIntentImpulse:
        return DeletedIntentImpulse(self.dictionary.get("deleteIntents"))
