
from dataclasses import dataclass
from typing import List

from gaia_sdk.graphql.response.type.UpdatedBehaviourImpulse import UpdatedBehaviourImpulse
from gaia_sdk.graphql.response.type.UpdatedCodeImpulse import UpdatedCodeImpulse
from gaia_sdk.graphql.response.type.UpdatedFulfilmentImpulse import UpdatedFulfilmentImpulse
from gaia_sdk.graphql.response.type.UpdatedIdentityImpulse import UpdatedIdentityImpulse
from gaia_sdk.graphql.response.type.UpdatedIntentImpulse import UpdatedIntentImpulse
from gaia_sdk.graphql.response.type.UpdatedPromptImpulse import UpdatedPromptImpulse
from gaia_sdk.graphql.response.type.UpdatedSkillImpulse import UpdatedSkillImpulse
from gaia_sdk.graphql.response.type.UpdatedSkillProvisionImpulse import UpdatedSkillProvisionImpulse
from gaia_sdk.graphql.response.type.UpdatedStatementImpulse import UpdatedStatementImpulse

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float


@dataclass
class UpdateKnowledge:
    dictionary: dict
    """
    updates a list of identities with the given specifications
    """
    @property
    def identities(self) -> List[UpdatedIdentityImpulse]:
        return list(map(lambda x: UpdatedIdentityImpulse(x), self.dictionary.get("identities")))
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
