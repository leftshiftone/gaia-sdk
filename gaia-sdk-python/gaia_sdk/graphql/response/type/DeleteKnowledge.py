
from gaia_sdk.graphql.response.type.DeletedFulfilmentImpulse import DeletedFulfilmentImpulse
from gaia_sdk.graphql.response.type.DeletedBehaviourImpulse import DeletedBehaviourImpulse
from gaia_sdk.graphql.response.type.DeletedIntentImpulse import DeletedIntentImpulse
from gaia_sdk.graphql.response.type.DeletedPromptImpulse import DeletedPromptImpulse
from gaia_sdk.graphql.response.type.DeletedStatementImpulse import DeletedStatementImpulse
from gaia_sdk.graphql.response.type.DeletedCodeImpulse import DeletedCodeImpulse
from gaia_sdk.graphql.response.type.DeletedEdgeImpulse import DeletedEdgeImpulse
from gaia_sdk.graphql.request.input.DeleteFulfilmentImpulse import DeleteFulfilmentImpulse
from gaia_sdk.graphql.request.input.DeleteCodeImpulse import DeleteCodeImpulse
from gaia_sdk.graphql.request.input.DeleteEdgeImpulse import DeleteEdgeImpulse
from gaia_sdk.graphql.request.input.DeleteStatementImpulse import DeleteStatementImpulse
from gaia_sdk.graphql.request.input.DeletePromptImpulse import DeletePromptImpulse
from gaia_sdk.graphql.request.input.DeleteBehaviourImpulse import DeleteBehaviourImpulse
from gaia_sdk.graphql.request.input.DeleteIntentImpulse import DeleteIntentImpulse

from dataclasses import dataclass
from typing import List
Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
from gaia_sdk.graphql.request.enumeration.RuntimeState import RuntimeState
from gaia_sdk.graphql.request.enumeration.SkillState import SkillState

@dataclass
class DeleteKnowledge:
    dictionary: dict
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
