
from gaia_sdk.graphql.response.type.DeletedIdentityImpulse import DeletedIdentityImpulse
from gaia_sdk.graphql.response.type.DeletedFulfilmentImpulse import DeletedFulfilmentImpulse
from gaia_sdk.graphql.response.type.DeletedBehaviourImpulse import DeletedBehaviourImpulse
from gaia_sdk.graphql.response.type.DeletedSkillProvisionImpulse import DeletedSkillProvisionImpulse
from gaia_sdk.graphql.response.type.DeletedIntentImpulse import DeletedIntentImpulse
from gaia_sdk.graphql.response.type.DeletedPromptImpulse import DeletedPromptImpulse
from gaia_sdk.graphql.response.type.DeletedStatementImpulse import DeletedStatementImpulse
from gaia_sdk.graphql.response.type.DeletedSkillImpulse import DeletedSkillImpulse
from gaia_sdk.graphql.response.type.DeletedCodeImpulse import DeletedCodeImpulse
from gaia_sdk.graphql.response.type.DeletedEdgeImpulse import DeletedEdgeImpulse
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

from typing import List
Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool
from gaia_sdk.graphql.request.enumeration.RuntimeState import RuntimeState
from gaia_sdk.graphql.request.enumeration.SkillState import SkillState
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField

class DeleteKnowledge:
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
    deletes a list of identities with the given specifications
    """
    @property
    def identities(self) -> List[DeletedIdentityImpulse]:
        return list(map(lambda x: DeletedIdentityImpulse(x), self.dictionary.get("identities")))
    """
    deletes a list of intents with the given specifications
    """
    @property
    def intents(self) -> List[DeletedIntentImpulse]:
        return list(map(lambda x: DeletedIntentImpulse(x), self.dictionary.get("intents")))
    """
    deletes a list of prompts with the given specifications
    """
    @property
    def prompts(self) -> List[DeletedPromptImpulse]:
        return list(map(lambda x: DeletedPromptImpulse(x), self.dictionary.get("prompts")))
    """
    deletes a list of statements with the given specifications
    """
    @property
    def statements(self) -> List[DeletedStatementImpulse]:
        return list(map(lambda x: DeletedStatementImpulse(x), self.dictionary.get("statements")))
    """
    deletes a list of fulfilments with the given specifications
    """
    @property
    def fulfilments(self) -> List[DeletedFulfilmentImpulse]:
        return list(map(lambda x: DeletedFulfilmentImpulse(x), self.dictionary.get("fulfilments")))
    """
    deletes a list of behaviours with the given specifications
    """
    @property
    def behaviours(self) -> List[DeletedBehaviourImpulse]:
        return list(map(lambda x: DeletedBehaviourImpulse(x), self.dictionary.get("behaviours")))
    """
    deletes a list of codes with the given specifications
    """
    @property
    def codes(self) -> List[DeletedCodeImpulse]:
        return list(map(lambda x: DeletedCodeImpulse(x), self.dictionary.get("codes")))
    """
    deletes a list of edges with the given specifications
    """
    @property
    def edges(self) -> List[DeletedEdgeImpulse]:
        return list(map(lambda x: DeletedEdgeImpulse(x), self.dictionary.get("edges")))
    """
    deletes a list of skills with the given specifications
    """
    @property
    def skills(self) -> List[DeletedSkillImpulse]:
        return list(map(lambda x: DeletedSkillImpulse(x), self.dictionary.get("skills")))
    """
    deletes a list of skill provisions with the given specifications
    """
    @property
    def skill_provisions(self) -> List[DeletedSkillProvisionImpulse]:
        return list(map(lambda x: DeletedSkillProvisionImpulse(x), self.dictionary.get("skillProvisions")))
