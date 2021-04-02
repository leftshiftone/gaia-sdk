
from gaia_sdk.graphql.response.type.UpdatedUserImpulse import UpdatedUserImpulse
from gaia_sdk.graphql.response.type.UpdatedTenantImpulse import UpdatedTenantImpulse
from gaia_sdk.graphql.response.type.UpdatedBehaviourImpulse import UpdatedBehaviourImpulse
from gaia_sdk.graphql.response.type.UpdatedApiKeyImpulse import UpdatedApiKeyImpulse
from gaia_sdk.graphql.response.type.UpdatedSkillImpulse import UpdatedSkillImpulse
from gaia_sdk.graphql.response.type.UpdatedCodeImpulse import UpdatedCodeImpulse
from gaia_sdk.graphql.response.type.UpdatedRoleImpulse import UpdatedRoleImpulse
from gaia_sdk.graphql.response.type.UpdatedIntentImpulse import UpdatedIntentImpulse
from gaia_sdk.graphql.response.type.UpdatedStatementImpulse import UpdatedStatementImpulse
from gaia_sdk.graphql.response.type.UpdatedFulfilmentImpulse import UpdatedFulfilmentImpulse
from gaia_sdk.graphql.response.type.UpdatedSkillProvisionImpulse import UpdatedSkillProvisionImpulse
from gaia_sdk.graphql.response.type.UpdatedIdentityImpulse import UpdatedIdentityImpulse
from gaia_sdk.graphql.response.type.UpdatedPromptImpulse import UpdatedPromptImpulse
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

class UpdateKnowledge:
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
    updates a list of identities with the given specifications
    """
    @property
    def identities(self) -> List[UpdatedIdentityImpulse]:
        return list(map(lambda x: UpdatedIdentityImpulse(x), self.dictionary.get("identities")))
    """
    updates a list of tenants with the given specifications
    """
    @property
    def tenants(self) -> List[UpdatedTenantImpulse]:
        return list(map(lambda x: UpdatedTenantImpulse(x), self.dictionary.get("tenants")))
    """
    updates a list of users with the given specifications
    """
    @property
    def users(self) -> List[UpdatedUserImpulse]:
        return list(map(lambda x: UpdatedUserImpulse(x), self.dictionary.get("users")))
    """
    updates a list of api keys with the given specifications
    """
    @property
    def api_keys(self) -> List[UpdatedApiKeyImpulse]:
        return list(map(lambda x: UpdatedApiKeyImpulse(x), self.dictionary.get("apiKeys")))
    """
    updates a list of roles with the given specifications
    """
    @property
    def roles(self) -> List[UpdatedRoleImpulse]:
        return list(map(lambda x: UpdatedRoleImpulse(x), self.dictionary.get("roles")))
    """
    updates a list of intents with the given specifications
    """
    @property
    def intents(self) -> List[UpdatedIntentImpulse]:
        return list(map(lambda x: UpdatedIntentImpulse(x), self.dictionary.get("intents")))
    """
    updates a list of prompts with the given specifications
    """
    @property
    def prompts(self) -> List[UpdatedPromptImpulse]:
        return list(map(lambda x: UpdatedPromptImpulse(x), self.dictionary.get("prompts")))
    """
    updates a list of statements with the given specifications
    """
    @property
    def statements(self) -> List[UpdatedStatementImpulse]:
        return list(map(lambda x: UpdatedStatementImpulse(x), self.dictionary.get("statements")))
    """
    updates a list of fulfilments with the given specifications
    """
    @property
    def fulfilments(self) -> List[UpdatedFulfilmentImpulse]:
        return list(map(lambda x: UpdatedFulfilmentImpulse(x), self.dictionary.get("fulfilments")))
    """
    updates a list of behaviours with the given specifications
    """
    @property
    def behaviours(self) -> List[UpdatedBehaviourImpulse]:
        return list(map(lambda x: UpdatedBehaviourImpulse(x), self.dictionary.get("behaviours")))
    """
    updates a list of codes with the given specifications
    """
    @property
    def codes(self) -> List[UpdatedCodeImpulse]:
        return list(map(lambda x: UpdatedCodeImpulse(x), self.dictionary.get("codes")))
    """
    updates a list of skills with the given specifications
    """
    @property
    def skills(self) -> List[UpdatedSkillImpulse]:
        return list(map(lambda x: UpdatedSkillImpulse(x), self.dictionary.get("skills")))
    """
    updates a list of skill provisions with the given specifications
    """
    @property
    def skill_provisions(self) -> List[UpdatedSkillProvisionImpulse]:
        return list(map(lambda x: UpdatedSkillProvisionImpulse(x), self.dictionary.get("skillProvisions")))
