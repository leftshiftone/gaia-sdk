
from graphql.response.type.Fulfilment import Fulfilment
from graphql.response.type.Behaviour import Behaviour
from graphql.response.type.Statement import Statement
from graphql.response.type.KnowledgeEdge import KnowledgeEdge
from graphql.response.type.Intent import Intent
from graphql.response.type.Prompt import Prompt
from graphql.response.type.Code import Code


class Knowledge:
    def intents(self) -> Intent:
        return self.intents
    def prompts(self) -> Prompt:
        return self.prompts
    def fulfilments(self) -> Fulfilment:
        return self.fulfilments
    def statements(self) -> Statement:
        return self.statements
    def codes(self) -> Code:
        return self.codes
    def behaviours(self) -> Behaviour:
        return self.behaviours
    def edges(self) -> KnowledgeEdge:
        return self.edges
