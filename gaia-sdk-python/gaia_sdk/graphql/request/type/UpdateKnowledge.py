
from gaia_sdk.graphql.request.type.UpdatedStatementImpulse import UpdatedStatementImpulse
from gaia_sdk.graphql.request.type.UpdatedFulfilmentImpulse import UpdatedFulfilmentImpulse
from gaia_sdk.graphql.request.type.UpdatedBehaviourImpulse import UpdatedBehaviourImpulse
from gaia_sdk.graphql.request.type.UpdatedPromptImpulse import UpdatedPromptImpulse
from gaia_sdk.graphql.request.type.UpdatedCodeImpulse import UpdatedCodeImpulse
from gaia_sdk.graphql.request.type.UpdatedIntentImpulse import UpdatedIntentImpulse
from gaia_sdk.graphql.request.input.UpdateStatementImpulse import UpdateStatementImpulse
from gaia_sdk.graphql.request.input.UpdateBehaviourImpulse import UpdateBehaviourImpulse
from gaia_sdk.graphql.request.input.UpdateIntentImpulse import UpdateIntentImpulse
from gaia_sdk.graphql.request.input.UpdateCodeImpulse import UpdateCodeImpulse
from gaia_sdk.graphql.request.input.UpdatePromptImpulse import UpdatePromptImpulse
from gaia_sdk.graphql.request.input.UpdateFulfilmentImpulse import UpdateFulfilmentImpulse

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

    """
    updates a list of prompts with the given specifications
    """
    def prompts(self, impulse: List[UpdatePromptImpulse], config: Callable[['UpdatedPromptImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = UpdatedPromptImpulse()
            config(entity)
            return f'prompts(impulse:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    updates a list of statements with the given specifications
    """
    def statements(self, impulse: List[UpdateStatementImpulse], config: Callable[['UpdatedStatementImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = UpdatedStatementImpulse()
            config(entity)
            return f'statements(impulse:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    updates a list of fulfilments with the given specifications
    """
    def fulfilments(self, impulse: List[UpdateFulfilmentImpulse], config: Callable[['UpdatedFulfilmentImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = UpdatedFulfilmentImpulse()
            config(entity)
            return f'fulfilments(impulse:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    updates a list of behaviours with the given specifications
    """
    def behaviours(self, impulse: List[UpdateBehaviourImpulse], config: Callable[['UpdatedBehaviourImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = UpdatedBehaviourImpulse()
            config(entity)
            return f'behaviours(impulse:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    updates a list of codes with the given specifications
    """
    def codes(self, impulse: List[UpdateCodeImpulse], config: Callable[['UpdatedCodeImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = UpdatedCodeImpulse()
            config(entity)
            return f'codes(impulse:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
