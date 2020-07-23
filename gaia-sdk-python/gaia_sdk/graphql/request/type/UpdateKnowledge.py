
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
    def intents(self, impulses: List[UpdateIntentImpulse], config: Callable[['UpdatedIntentImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = UpdatedIntentImpulse()
            config(entity)
            return f'intents(impulses:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    updates a list of prompts with the given specifications
    """
    def prompts(self, impulses: List[UpdatePromptImpulse], config: Callable[['UpdatedPromptImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = UpdatedPromptImpulse()
            config(entity)
            return f'prompts(impulses:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    updates a list of statements with the given specifications
    """
    def statements(self, impulses: List[UpdateStatementImpulse], config: Callable[['UpdatedStatementImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = UpdatedStatementImpulse()
            config(entity)
            return f'statements(impulses:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    updates a list of fulfilments with the given specifications
    """
    def fulfilments(self, impulses: List[UpdateFulfilmentImpulse], config: Callable[['UpdatedFulfilmentImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = UpdatedFulfilmentImpulse()
            config(entity)
            return f'fulfilments(impulses:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    updates a list of behaviours with the given specifications
    """
    def behaviours(self, impulses: List[UpdateBehaviourImpulse], config: Callable[['UpdatedBehaviourImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = UpdatedBehaviourImpulse()
            config(entity)
            return f'behaviours(impulses:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    updates a list of codes with the given specifications
    """
    def codes(self, impulses: List[UpdateCodeImpulse], config: Callable[['UpdatedCodeImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = UpdatedCodeImpulse()
            config(entity)
            return f'codes(impulses:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
