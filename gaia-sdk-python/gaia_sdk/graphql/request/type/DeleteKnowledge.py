
from gaia_sdk.graphql.request.type.DeletedIntentImpulse import DeletedIntentImpulse
from gaia_sdk.graphql.request.input.DeleteIntentImpulse import DeleteIntentImpulse

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class DeleteKnowledge(list):

    """
    deletes a list of intents with the given specifications
    """
    def intents(self, impulse: List[DeleteIntentImpulse], config: Callable[['DeletedIntentImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = DeletedIntentImpulse()
            config(entity)
            return f'intents(impulse:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
