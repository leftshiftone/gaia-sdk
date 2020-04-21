
from graphql.response.type.DeletedIntentImpulse import DeletedIntentImpulse
from graphql.response.type.CreatedIntentImpulse import CreatedIntentImpulse
from graphql.response.type.UpdatedIntentImpulse import UpdatedIntentImpulse
from graphql.response.input.CreateIntentImpulse import CreateIntentImpulse
from graphql.response.input.UpdateIntentImpulse import UpdateIntentImpulse
from graphql.response.input.DeleteIntentImpulse import DeleteIntentImpulse


class Preservation:
    """
    This type contains all preservation sensor impulses which are used to support
    read/write/delete memory functions in gaia.
    """
    """
    creates an intent with the given specification
    """
    def createIntent(self) -> CreatedIntentImpulse:
        return self.createIntent
    """
    updates an intent with the given specification
    """
    def updateIntent(self) -> UpdatedIntentImpulse:
        return self.updateIntent
    """
    deletes an intent with the given specification
    """
    def deleteIntent(self) -> DeletedIntentImpulse:
        return self.deleteIntent
    """
    creates a list of intents with the given specifications
    """
    def createIntents(self) -> CreatedIntentImpulse:
        return self.createIntents
    """
    updates a list of intents with the given specifications
    """
    def updateIntents(self) -> UpdatedIntentImpulse:
        return self.updateIntents
    """
    deletes a list of intents with the given specifications
    """
    def deleteIntents(self) -> DeletedIntentImpulse:
        return self.deleteIntents
