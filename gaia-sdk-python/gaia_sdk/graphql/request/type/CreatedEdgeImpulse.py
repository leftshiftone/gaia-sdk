
from gaia_sdk.graphql.request.type.Edge import Edge

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class CreatedEdgeImpulse(list):
    """
    Impulse which indicates the result of a create edge impulse
    """

    def id(self):
        self.append(lambda x: "id")

    """
    the edge instance
    """
    def data(self, config: Callable[['Edge'], None]):
        def callback(registry: VariableRegistry):
            entity = Edge()
            config(entity)
            return "data {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
