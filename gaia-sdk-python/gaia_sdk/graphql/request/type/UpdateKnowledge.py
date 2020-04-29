
from gaia_sdk.graphql.request.type.UpdatedIntentImpulse import UpdatedIntentImpulse
from gaia_sdk.graphql.request.input.UpdateIntentImpulse import UpdateIntentImpulse

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class UpdateKnowledge(list):

    """
    updates a list of intents with the given specifications
    """
    def intents(self, impulse: List[UpdateIntentImpulse], config: Callable[['UpdatedIntentImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = UpdatedIntentImpulse()
            config(entity)
            return f'intents(impulse:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
