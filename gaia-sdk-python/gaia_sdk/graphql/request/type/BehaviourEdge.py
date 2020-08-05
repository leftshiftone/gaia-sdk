
from gaia_sdk.graphql.request.type.Behaviour import Behaviour

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class BehaviourEdge(list):
    """
    Reresents a paginated behaviour
    """

    def node(self, config: Callable[['Behaviour'], None]):
        def callback(registry: VariableRegistry):
            entity = Behaviour()
            config(entity)
            return "node {" + entity.render(registry) + "}"
        self.append(callback)

    def cursor(self):
        self.append(lambda x: "cursor")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
