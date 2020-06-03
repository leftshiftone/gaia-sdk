
from gaia_sdk.graphql.request.type.CreatedEdgeImpulse import CreatedEdgeImpulse
from gaia_sdk.graphql.request.type.CreatedCodeImpulse import CreatedCodeImpulse
from gaia_sdk.graphql.request.type.CreatedPromptImpulse import CreatedPromptImpulse
from gaia_sdk.graphql.request.type.CreatedStatementImpulse import CreatedStatementImpulse
from gaia_sdk.graphql.request.type.CreatedIntentImpulse import CreatedIntentImpulse
from gaia_sdk.graphql.request.type.CreatedBehaviourImpulse import CreatedBehaviourImpulse
from gaia_sdk.graphql.request.type.CreatedFulfilmentImpulse import CreatedFulfilmentImpulse
from gaia_sdk.graphql.request.input.CreateIntentImpulse import CreateIntentImpulse
from gaia_sdk.graphql.request.input.CreatePromptImpulse import CreatePromptImpulse
from gaia_sdk.graphql.request.input.CreateBehaviourImpulse import CreateBehaviourImpulse
from gaia_sdk.graphql.request.input.CreateEdgeImpulse import CreateEdgeImpulse
from gaia_sdk.graphql.request.input.CreateCodeImpulse import CreateCodeImpulse
from gaia_sdk.graphql.request.input.CreateFulfilmentImpulse import CreateFulfilmentImpulse
from gaia_sdk.graphql.request.input.CreateStatementImpulse import CreateStatementImpulse

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

    """
    creates a list of prompts with the given specifications
    """
    def prompts(self, impulses: List[CreatePromptImpulse], config: Callable[['CreatedPromptImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = CreatedPromptImpulse()
            config(entity)
            return f'prompts(impulses:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    creates a list of statements with the given specifications
    """
    def statements(self, impulses: List[CreateStatementImpulse], config: Callable[['CreatedStatementImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = CreatedStatementImpulse()
            config(entity)
            return f'statements(impulses:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    creates a list of fulfilments with the given specifications
    """
    def fulfilments(self, impulses: List[CreateFulfilmentImpulse], config: Callable[['CreatedFulfilmentImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = CreatedFulfilmentImpulse()
            config(entity)
            return f'fulfilments(impulses:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    creates a list of behaviours with the given specifications
    """
    def behaviours(self, impulses: List[CreateBehaviourImpulse], config: Callable[['CreatedBehaviourImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = CreatedBehaviourImpulse()
            config(entity)
            return f'behaviours(impulses:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    creates a list of codes with the given specifications
    """
    def codes(self, impulses: List[CreateCodeImpulse], config: Callable[['CreatedCodeImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = CreatedCodeImpulse()
            config(entity)
            return f'codes(impulses:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    creates a list of edges with the given specifications
    """
    def edges(self, impulses: List[CreateEdgeImpulse], config: Callable[['CreatedEdgeImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = CreatedEdgeImpulse()
            config(entity)
            return f'edges(impulses:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
