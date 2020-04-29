
from gaia_sdk.graphql.request.type.CreatedIntentImpulse import CreatedIntentImpulse
from gaia_sdk.graphql.request.input.CreateIntentImpulse import CreateIntentImpulse

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class CreateKnowledge(list):

    """
    creates a list of intents with the given specifications
    """
    def intents(self, impulses: List[CreateIntentImpulse], config: Callable[['CreatedIntentImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = CreatedIntentImpulse()
            config(entity)
            return f'intents(impulses:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
