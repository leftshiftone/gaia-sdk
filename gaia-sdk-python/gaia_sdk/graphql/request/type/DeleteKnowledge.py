
from gaia_sdk.graphql.request.type.DeletedIdentityImpulse import DeletedIdentityImpulse
from gaia_sdk.graphql.request.type.DeletedFulfilmentImpulse import DeletedFulfilmentImpulse
from gaia_sdk.graphql.request.type.DeletedBehaviourImpulse import DeletedBehaviourImpulse
from gaia_sdk.graphql.request.type.DeletedSkillProvisionImpulse import DeletedSkillProvisionImpulse
from gaia_sdk.graphql.request.type.DeletedIntentImpulse import DeletedIntentImpulse
from gaia_sdk.graphql.request.type.DeletedPromptImpulse import DeletedPromptImpulse
from gaia_sdk.graphql.request.type.DeletedStatementImpulse import DeletedStatementImpulse
from gaia_sdk.graphql.request.type.DeletedSkillImpulse import DeletedSkillImpulse
from gaia_sdk.graphql.request.type.DeletedCodeImpulse import DeletedCodeImpulse
from gaia_sdk.graphql.request.type.DeletedEdgeImpulse import DeletedEdgeImpulse
from gaia_sdk.graphql.request.input.DeleteFulfilmentImpulse import DeleteFulfilmentImpulse
from gaia_sdk.graphql.request.input.DeleteCodeImpulse import DeleteCodeImpulse
from gaia_sdk.graphql.request.input.DeleteEdgeImpulse import DeleteEdgeImpulse
from gaia_sdk.graphql.request.input.DeleteStatementImpulse import DeleteStatementImpulse
from gaia_sdk.graphql.request.input.DeletePromptImpulse import DeletePromptImpulse
from gaia_sdk.graphql.request.input.DeleteBehaviourImpulse import DeleteBehaviourImpulse
from gaia_sdk.graphql.request.input.DeleteIntentImpulse import DeleteIntentImpulse
from gaia_sdk.graphql.request.input.DeleteSkillImpulse import DeleteSkillImpulse
from gaia_sdk.graphql.request.input.DeleteSkillProvisionImpulse import DeleteSkillProvisionImpulse
from gaia_sdk.graphql.request.input.DeleteIdentityImpulse import DeleteIdentityImpulse

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField


class DeleteKnowledge(list):

    """
    deletes a list of identities with the given specifications
    """
    def identities(self, impulses: List[DeleteIdentityImpulse], config: Callable[['DeletedIdentityImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = DeletedIdentityImpulse()
            config(entity)
            return f'identities(impulses:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    deletes a list of intents with the given specifications
    """
    def intents(self, impulses: List[DeleteIntentImpulse], config: Callable[['DeletedIntentImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = DeletedIntentImpulse()
            config(entity)
            return f'intents(impulses:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    deletes a list of prompts with the given specifications
    """
    def prompts(self, impulses: List[DeletePromptImpulse], config: Callable[['DeletedPromptImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = DeletedPromptImpulse()
            config(entity)
            return f'prompts(impulses:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    deletes a list of statements with the given specifications
    """
    def statements(self, impulses: List[DeleteStatementImpulse], config: Callable[['DeletedStatementImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = DeletedStatementImpulse()
            config(entity)
            return f'statements(impulses:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    deletes a list of fulfilments with the given specifications
    """
    def fulfilments(self, impulses: List[DeleteFulfilmentImpulse], config: Callable[['DeletedFulfilmentImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = DeletedFulfilmentImpulse()
            config(entity)
            return f'fulfilments(impulses:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    deletes a list of behaviours with the given specifications
    """
    def behaviours(self, impulses: List[DeleteBehaviourImpulse], config: Callable[['DeletedBehaviourImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = DeletedBehaviourImpulse()
            config(entity)
            return f'behaviours(impulses:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    deletes a list of codes with the given specifications
    """
    def codes(self, impulses: List[DeleteCodeImpulse], config: Callable[['DeletedCodeImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = DeletedCodeImpulse()
            config(entity)
            return f'codes(impulses:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    deletes a list of edges with the given specifications
    """
    def edges(self, impulses: List[DeleteEdgeImpulse], config: Callable[['DeletedEdgeImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = DeletedEdgeImpulse()
            config(entity)
            return f'edges(impulses:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    deletes a list of skills with the given specifications
    """
    def skills(self, impulses: List[DeleteSkillImpulse], config: Callable[['DeletedSkillImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = DeletedSkillImpulse()
            config(entity)
            return f'skills(impulses:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    deletes a list of skill provisions with the given specifications
    """
    def skill_provisions(self, impulses: List[DeleteSkillProvisionImpulse], config: Callable[['DeletedSkillProvisionImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = DeletedSkillProvisionImpulse()
            config(entity)
            return f'skillProvisions(impulses:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
