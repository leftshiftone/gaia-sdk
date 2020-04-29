
from gaia_sdk.graphql.request.type.Fulfilment import Fulfilment
from gaia_sdk.graphql.request.type.Behaviour import Behaviour
from gaia_sdk.graphql.request.type.Statement import Statement
from gaia_sdk.graphql.request.type.KnowledgeEdge import KnowledgeEdge
from gaia_sdk.graphql.request.type.Intent import Intent
from gaia_sdk.graphql.request.type.Prompt import Prompt
from gaia_sdk.graphql.request.type.Code import Code

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class Knowledge(list):

    def intents(self, config: Callable[['Intent'], None]):
        def callback(registry: VariableRegistry):
            entity = Intent()
            config(entity)
            return "intents {" + entity.render(registry) + "}"
        self.append(callback)

    def prompts(self, config: Callable[['Prompt'], None]):
        def callback(registry: VariableRegistry):
            entity = Prompt()
            config(entity)
            return "prompts {" + entity.render(registry) + "}"
        self.append(callback)

    def fulfilments(self, config: Callable[['Fulfilment'], None]):
        def callback(registry: VariableRegistry):
            entity = Fulfilment()
            config(entity)
            return "fulfilments {" + entity.render(registry) + "}"
        self.append(callback)

    def statements(self, config: Callable[['Statement'], None]):
        def callback(registry: VariableRegistry):
            entity = Statement()
            config(entity)
            return "statements {" + entity.render(registry) + "}"
        self.append(callback)

    def codes(self, config: Callable[['Code'], None]):
        def callback(registry: VariableRegistry):
            entity = Code()
            config(entity)
            return "codes {" + entity.render(registry) + "}"
        self.append(callback)

    def behaviours(self, config: Callable[['Behaviour'], None]):
        def callback(registry: VariableRegistry):
            entity = Behaviour()
            config(entity)
            return "behaviours {" + entity.render(registry) + "}"
        self.append(callback)

    def edges(self, config: Callable[['KnowledgeEdge'], None]):
        def callback(registry: VariableRegistry):
            entity = KnowledgeEdge()
            config(entity)
            return "edges {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
