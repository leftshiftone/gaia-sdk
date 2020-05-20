
from gaia_sdk.graphql.request.type.KnowledgeEdge import KnowledgeEdge

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class DeletedKnowledgeEdgeImpulse(list):
    """
    Impulse which indicates the result of a delete edge impulse
    """

    def id(self):
        self.append(lambda x: "id")

    """
    the edge instance
    """
    def data(self, config: Callable[['KnowledgeEdge'], None]):
        def callback(registry: VariableRegistry):
            entity = KnowledgeEdge()
            config(entity)
            return "data {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
