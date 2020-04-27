
from gaia_sdk.graphql.response.type.Fulfilment import Fulfilment
from gaia_sdk.graphql.response.type.Behaviour import Behaviour
from gaia_sdk.graphql.response.type.Statement import Statement
from gaia_sdk.graphql.response.type.KnowledgeEdge import KnowledgeEdge
from gaia_sdk.graphql.response.type.Intent import Intent
from gaia_sdk.graphql.response.type.Prompt import Prompt
from gaia_sdk.graphql.response.type.Code import Code

from dataclasses import dataclass
Uuid = str
String = str
Long = str
Timestamp = str
Struct = dict
Float = float
from gaia_sdk.graphql.request.enumeration.RuntimeState import RuntimeState
from gaia_sdk.graphql.request.enumeration.SkillState import SkillState

@dataclass
class Knowledge:
    dictionary: dict
    @property
    def intents(self) -> Intent:
        return Intent(self.dictionary.get("intents"))
    @property
    def prompts(self) -> Prompt:
        return Prompt(self.dictionary.get("prompts"))
    @property
    def fulfilments(self) -> Fulfilment:
        return Fulfilment(self.dictionary.get("fulfilments"))
    @property
    def statements(self) -> Statement:
        return Statement(self.dictionary.get("statements"))
    @property
    def codes(self) -> Code:
        return Code(self.dictionary.get("codes"))
    @property
    def behaviours(self) -> Behaviour:
        return Behaviour(self.dictionary.get("behaviours"))
    @property
    def edges(self) -> KnowledgeEdge:
        return KnowledgeEdge(self.dictionary.get("edges"))
