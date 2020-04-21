
from graphql.request.type.Fulfilment import Fulfilment
from graphql.request.type.Statement import Statement
from graphql.request.type.KnowledgeEdge import KnowledgeEdge
from graphql.request.type.Intent import Intent
from graphql.request.type.Prompt import Prompt

from typing import Callable
from api.VariableRegistry import VariableRegistry


class Knowledge(list):

    def intents(self, config: Callable[['Intent'], None]):
        def callback(_: VariableRegistry):
            entity = Intent()
            config(entity)
        self.append(callback)

    def prompts(self, config: Callable[['Prompt'], None]):
        def callback(_: VariableRegistry):
            entity = Prompt()
            config(entity)
        self.append(callback)

    def fulfilments(self, config: Callable[['Fulfilment'], None]):
        def callback(_: VariableRegistry):
            entity = Fulfilment()
            config(entity)
        self.append(callback)

    def statements(self, config: Callable[['Statement'], None]):
        def callback(_: VariableRegistry):
            entity = Statement()
            config(entity)
        self.append(callback)

    def edge(self, config: Callable[['KnowledgeEdge'], None]):
        def callback(_: VariableRegistry):
            entity = KnowledgeEdge()
            config(entity)
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
