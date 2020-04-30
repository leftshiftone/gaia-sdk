
from gaia_sdk.graphql.request.type.DeletedFulfilmentImpulse import DeletedFulfilmentImpulse
from gaia_sdk.graphql.request.type.DeletedBehaviourImpulse import DeletedBehaviourImpulse
from gaia_sdk.graphql.request.type.DeletedIntentImpulse import DeletedIntentImpulse
from gaia_sdk.graphql.request.type.DeletedPromptImpulse import DeletedPromptImpulse
from gaia_sdk.graphql.request.type.DeletedStatementImpulse import DeletedStatementImpulse
from gaia_sdk.graphql.request.type.DeletedCodeImpulse import DeletedCodeImpulse
from gaia_sdk.graphql.request.input.DeleteFulfilmentImpulse import DeleteFulfilmentImpulse
from gaia_sdk.graphql.request.input.DeleteCodeImpulse import DeleteCodeImpulse
from gaia_sdk.graphql.request.input.DeleteStatementImpulse import DeleteStatementImpulse
from gaia_sdk.graphql.request.input.DeletePromptImpulse import DeletePromptImpulse
from gaia_sdk.graphql.request.input.DeleteBehaviourImpulse import DeleteBehaviourImpulse
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

    """
    deletes a list of prompts with the given specifications
    """
    def prompts(self, impulse: List[DeletePromptImpulse], config: Callable[['DeletedPromptImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = DeletedPromptImpulse()
            config(entity)
            return f'prompts(impulse:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    deletes a list of statements with the given specifications
    """
    def statements(self, impulse: List[DeleteStatementImpulse], config: Callable[['DeletedStatementImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = DeletedStatementImpulse()
            config(entity)
            return f'statements(impulse:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    deletes a list of fulfilments with the given specifications
    """
    def fulfilments(self, impulse: List[DeleteFulfilmentImpulse], config: Callable[['DeletedFulfilmentImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = DeletedFulfilmentImpulse()
            config(entity)
            return f'fulfilments(impulse:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    deletes a list of behaviours with the given specifications
    """
    def behaviours(self, impulse: List[DeleteBehaviourImpulse], config: Callable[['DeletedBehaviourImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = DeletedBehaviourImpulse()
            config(entity)
            return f'behaviours(impulse:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    deletes a list of codes with the given specifications
    """
    def codes(self, impulse: List[DeleteCodeImpulse], config: Callable[['DeletedCodeImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = DeletedCodeImpulse()
            config(entity)
            return f'codes(impulse:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
