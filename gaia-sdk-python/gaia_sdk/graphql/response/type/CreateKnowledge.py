
from dataclasses import dataclass
from typing import List

from gaia_sdk.graphql.response.type.CreatedBehaviourImpulse import CreatedBehaviourImpulse
from gaia_sdk.graphql.response.type.CreatedCodeImpulse import CreatedCodeImpulse
from gaia_sdk.graphql.response.type.CreatedEdgeImpulse import CreatedEdgeImpulse
from gaia_sdk.graphql.response.type.CreatedFulfilmentImpulse import CreatedFulfilmentImpulse
from gaia_sdk.graphql.response.type.CreatedIdentityImpulse import CreatedIdentityImpulse
from gaia_sdk.graphql.response.type.CreatedIntentImpulse import CreatedIntentImpulse
from gaia_sdk.graphql.response.type.CreatedPromptImpulse import CreatedPromptImpulse
from gaia_sdk.graphql.response.type.CreatedSkillImpulse import CreatedSkillImpulse
from gaia_sdk.graphql.response.type.CreatedSkillProvisionImpulse import CreatedSkillProvisionImpulse
from gaia_sdk.graphql.response.type.CreatedStatementImpulse import CreatedStatementImpulse

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float


@dataclass
class CreateKnowledge:
    dictionary: dict
    """
    creates a list of identities with the given specifications
    """
    @property
    def identities(self) -> List[CreatedIdentityImpulse]:
        return list(map(lambda x: CreatedIdentityImpulse(x), self.dictionary.get("identities")))
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
