
from gaia_sdk.graphql.response.type.CreatedEdgeImpulse import CreatedEdgeImpulse
from gaia_sdk.graphql.response.type.CreatedCodeImpulse import CreatedCodeImpulse
from gaia_sdk.graphql.response.type.CreatedPromptImpulse import CreatedPromptImpulse
from gaia_sdk.graphql.response.type.CreatedIntentImpulse import CreatedIntentImpulse
from gaia_sdk.graphql.response.type.CreatedSkillImpulse import CreatedSkillImpulse
from gaia_sdk.graphql.response.type.CreatedFulfilmentImpulse import CreatedFulfilmentImpulse
from gaia_sdk.graphql.response.type.CreatedUserImpulse import CreatedUserImpulse
from gaia_sdk.graphql.response.type.CreatedSkillProvisionImpulse import CreatedSkillProvisionImpulse
from gaia_sdk.graphql.response.type.CreatedTenantImpulse import CreatedTenantImpulse
from gaia_sdk.graphql.response.type.CreatedStatementImpulse import CreatedStatementImpulse
from gaia_sdk.graphql.response.type.CreatedRoleImpulse import CreatedRoleImpulse
from gaia_sdk.graphql.response.type.CreatedBehaviourImpulse import CreatedBehaviourImpulse
from gaia_sdk.graphql.response.type.CreatedIdentityImpulse import CreatedIdentityImpulse
from gaia_sdk.graphql.response.type.CreatedApiKeyImpulse import CreatedApiKeyImpulse
from gaia_sdk.graphql.request.input.CreateTenantImpulse import CreateTenantImpulse
from gaia_sdk.graphql.request.input.CreateSkillImpulse import CreateSkillImpulse
from gaia_sdk.graphql.request.input.CreateEdgeImpulse import CreateEdgeImpulse
from gaia_sdk.graphql.request.input.CreateIdentityImpulse import CreateIdentityImpulse
from gaia_sdk.graphql.request.input.CreateCodeImpulse import CreateCodeImpulse
from gaia_sdk.graphql.request.input.CreateFulfilmentImpulse import CreateFulfilmentImpulse
from gaia_sdk.graphql.request.input.CreateStatementImpulse import CreateStatementImpulse
from gaia_sdk.graphql.request.input.CreateSkillProvisionImpulse import CreateSkillProvisionImpulse
from gaia_sdk.graphql.request.input.CreateRoleImpulse import CreateRoleImpulse
from gaia_sdk.graphql.request.input.CreateIntentImpulse import CreateIntentImpulse
from gaia_sdk.graphql.request.input.CreatePromptImpulse import CreatePromptImpulse
from gaia_sdk.graphql.request.input.CreateBehaviourImpulse import CreateBehaviourImpulse
from gaia_sdk.graphql.request.input.CreateUserImpulse import CreateUserImpulse
from gaia_sdk.graphql.request.input.CreateApiKeyImpulse import CreateApiKeyImpulse

from typing import List
Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType

class CreateKnowledge:
    dictionary: dict

    def __init__(self, dictionary: dict):
        self.dictionary = dictionary

    def __eq__(self, other):
        if type(other) is type(self):
            return self.dictionary == other.dictionary
        return False

    def __repr__(self):
        return {'dictionary': self.dictionary}

    """
    creates a list of identities with the given specifications
    """
    @property
    def identities(self) -> List[CreatedIdentityImpulse]:
        return list(map(lambda x: CreatedIdentityImpulse(x), self.dictionary.get("identities")))
    """
    creates a list of tenants with the given specifications
    """
    @property
    def tenants(self) -> List[CreatedTenantImpulse]:
        return list(map(lambda x: CreatedTenantImpulse(x), self.dictionary.get("tenants")))
    """
    creates a list of users with the given specifications
    """
    @property
    def users(self) -> List[CreatedUserImpulse]:
        return list(map(lambda x: CreatedUserImpulse(x), self.dictionary.get("users")))
    """
    creates a list of api keys with the given specifications
    """
    @property
    def api_keys(self) -> List[CreatedApiKeyImpulse]:
        return list(map(lambda x: CreatedApiKeyImpulse(x), self.dictionary.get("apiKeys")))
    """
    creates a list of roles with the given specifications
    """
    @property
    def roles(self) -> List[CreatedRoleImpulse]:
        return list(map(lambda x: CreatedRoleImpulse(x), self.dictionary.get("roles")))
    """
    creates a list of intents with the given specifications
    """
    @property
    def intents(self) -> List[CreatedIntentImpulse]:
        return list(map(lambda x: CreatedIntentImpulse(x), self.dictionary.get("intents")))
    """
    creates a list of prompts with the given specifications
    """
    @property
    def prompts(self) -> List[CreatedPromptImpulse]:
        return list(map(lambda x: CreatedPromptImpulse(x), self.dictionary.get("prompts")))
    """
    creates a list of statements with the given specifications
    """
    @property
    def statements(self) -> List[CreatedStatementImpulse]:
        return list(map(lambda x: CreatedStatementImpulse(x), self.dictionary.get("statements")))
    """
    creates a list of fulfilments with the given specifications
    """
    @property
    def fulfilments(self) -> List[CreatedFulfilmentImpulse]:
        return list(map(lambda x: CreatedFulfilmentImpulse(x), self.dictionary.get("fulfilments")))
    """
    creates a list of behaviours with the given specifications
    """
    @property
    def behaviours(self) -> List[CreatedBehaviourImpulse]:
        return list(map(lambda x: CreatedBehaviourImpulse(x), self.dictionary.get("behaviours")))
    """
    creates a list of codes with the given specifications
    """
    @property
    def codes(self) -> List[CreatedCodeImpulse]:
        return list(map(lambda x: CreatedCodeImpulse(x), self.dictionary.get("codes")))
    """
    creates a list of edges with the given specifications
    """
    @property
    def edges(self) -> List[CreatedEdgeImpulse]:
        return list(map(lambda x: CreatedEdgeImpulse(x), self.dictionary.get("edges")))
    """
    creates a list of skills with the given specifications
    """
    @property
    def skills(self) -> List[CreatedSkillImpulse]:
        return list(map(lambda x: CreatedSkillImpulse(x), self.dictionary.get("skills")))
    """
    creates a list of skill provisions with the given specifications
    """
    @property
    def skill_provisions(self) -> List[CreatedSkillProvisionImpulse]:
        return list(map(lambda x: CreatedSkillProvisionImpulse(x), self.dictionary.get("skillProvisions")))
