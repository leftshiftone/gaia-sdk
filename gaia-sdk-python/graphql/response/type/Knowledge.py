
from graphql.response.type.Fulfilment import Fulfilment
from graphql.response.type.Statement import Statement
from graphql.response.type.KnowledgeEdge import KnowledgeEdge
from graphql.response.type.Intent import Intent
from graphql.response.type.Prompt import Prompt


class Knowledge:
    def intents(self) -> Intent:
        return self.intents
    def prompts(self) -> Prompt:
        return self.prompts
    def fulfilments(self) -> Fulfilment:
        return self.fulfilments
    def statements(self) -> Statement:
        return self.statements
    def edge(self) -> KnowledgeEdge:
        return self.edge
