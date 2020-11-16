
from gaia_sdk.graphql.request.type.UpdatedUserImpulse import UpdatedUserImpulse
from gaia_sdk.graphql.request.type.UpdatedTenantImpulse import UpdatedTenantImpulse
from gaia_sdk.graphql.request.type.UpdatedBehaviourImpulse import UpdatedBehaviourImpulse
from gaia_sdk.graphql.request.type.UpdatedApiKeyImpulse import UpdatedApiKeyImpulse
from gaia_sdk.graphql.request.type.UpdatedSkillImpulse import UpdatedSkillImpulse
from gaia_sdk.graphql.request.type.UpdatedCodeImpulse import UpdatedCodeImpulse
from gaia_sdk.graphql.request.type.UpdatedRoleImpulse import UpdatedRoleImpulse
from gaia_sdk.graphql.request.type.UpdatedIntentImpulse import UpdatedIntentImpulse
from gaia_sdk.graphql.request.type.UpdatedStatementImpulse import UpdatedStatementImpulse
from gaia_sdk.graphql.request.type.UpdatedFulfilmentImpulse import UpdatedFulfilmentImpulse
from gaia_sdk.graphql.request.type.UpdatedSkillProvisionImpulse import UpdatedSkillProvisionImpulse
from gaia_sdk.graphql.request.type.UpdatedIdentityImpulse import UpdatedIdentityImpulse
from gaia_sdk.graphql.request.type.UpdatedPromptImpulse import UpdatedPromptImpulse
from gaia_sdk.graphql.request.input.UpdateBehaviourImpulse import UpdateBehaviourImpulse
from gaia_sdk.graphql.request.input.UpdateSkillProvisionImpulse import UpdateSkillProvisionImpulse
from gaia_sdk.graphql.request.input.UpdateUserImpulse import UpdateUserImpulse
from gaia_sdk.graphql.request.input.UpdateIntentImpulse import UpdateIntentImpulse
from gaia_sdk.graphql.request.input.UpdateCodeImpulse import UpdateCodeImpulse
from gaia_sdk.graphql.request.input.UpdatePromptImpulse import UpdatePromptImpulse
from gaia_sdk.graphql.request.input.UpdateSkillImpulse import UpdateSkillImpulse
from gaia_sdk.graphql.request.input.UpdateIdentityImpulse import UpdateIdentityImpulse
from gaia_sdk.graphql.request.input.UpdateStatementImpulse import UpdateStatementImpulse
from gaia_sdk.graphql.request.input.UpdateApiKeyImpulse import UpdateApiKeyImpulse
from gaia_sdk.graphql.request.input.UpdateRoleImpulse import UpdateRoleImpulse
from gaia_sdk.graphql.request.input.UpdateTenantImpulse import UpdateTenantImpulse
from gaia_sdk.graphql.request.input.UpdateFulfilmentImpulse import UpdateFulfilmentImpulse

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class UpdateKnowledge(list):

    """
    updates a list of identities with the given specifications
    """
    def identities(self, impulses: List[UpdateIdentityImpulse], config: Callable[['UpdatedIdentityImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = UpdatedIdentityImpulse()
            config(entity)
            return f'identities(impulses:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    updates a list of tenants with the given specifications
    """
    def tenants(self, impulses: List[UpdateTenantImpulse], config: Callable[['UpdatedTenantImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = UpdatedTenantImpulse()
            config(entity)
            return f'tenants(impulses:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    updates a list of users with the given specifications
    """
    def users(self, impulses: List[UpdateUserImpulse], config: Callable[['UpdatedUserImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = UpdatedUserImpulse()
            config(entity)
            return f'users(impulses:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    updates a list of api keys with the given specifications
    """
    def api_keys(self, impulses: List[UpdateApiKeyImpulse], config: Callable[['UpdatedApiKeyImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = UpdatedApiKeyImpulse()
            config(entity)
            return f'apiKeys(impulses:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    updates a list of roles with the given specifications
    """
    def roles(self, impulses: List[UpdateRoleImpulse], config: Callable[['UpdatedRoleImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = UpdatedRoleImpulse()
            config(entity)
            return f'roles(impulses:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    updates a list of intents with the given specifications
    """
    def intents(self, impulses: List[UpdateIntentImpulse], config: Callable[['UpdatedIntentImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = UpdatedIntentImpulse()
            config(entity)
            return f'intents(impulses:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    updates a list of prompts with the given specifications
    """
    def prompts(self, impulses: List[UpdatePromptImpulse], config: Callable[['UpdatedPromptImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = UpdatedPromptImpulse()
            config(entity)
            return f'prompts(impulses:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    updates a list of statements with the given specifications
    """
    def statements(self, impulses: List[UpdateStatementImpulse], config: Callable[['UpdatedStatementImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = UpdatedStatementImpulse()
            config(entity)
            return f'statements(impulses:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    updates a list of fulfilments with the given specifications
    """
    def fulfilments(self, impulses: List[UpdateFulfilmentImpulse], config: Callable[['UpdatedFulfilmentImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = UpdatedFulfilmentImpulse()
            config(entity)
            return f'fulfilments(impulses:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    updates a list of behaviours with the given specifications
    """
    def behaviours(self, impulses: List[UpdateBehaviourImpulse], config: Callable[['UpdatedBehaviourImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = UpdatedBehaviourImpulse()
            config(entity)
            return f'behaviours(impulses:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    updates a list of codes with the given specifications
    """
    def codes(self, impulses: List[UpdateCodeImpulse], config: Callable[['UpdatedCodeImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = UpdatedCodeImpulse()
            config(entity)
            return f'codes(impulses:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    updates a list of skills with the given specifications
    """
    def skills(self, impulses: List[UpdateSkillImpulse], config: Callable[['UpdatedSkillImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = UpdatedSkillImpulse()
            config(entity)
            return f'skills(impulses:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    updates a list of skill provisions with the given specifications
    """
    def skill_provisions(self, impulses: List[UpdateSkillProvisionImpulse], config: Callable[['UpdatedSkillProvisionImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = UpdatedSkillProvisionImpulse()
            config(entity)
            return f'skillProvisions(impulses:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
