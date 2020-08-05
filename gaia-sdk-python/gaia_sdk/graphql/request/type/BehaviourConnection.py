
from gaia_sdk.graphql.request.type.PageInfo import PageInfo
from gaia_sdk.graphql.request.type.BehaviourEdge import BehaviourEdge

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class BehaviourConnection(list):
    """
    Represents a paginated collection of behaviours
    """

    def edges(self, config: Callable[['BehaviourEdge'], None]):
        def callback(registry: VariableRegistry):
            entity = BehaviourEdge()
            config(entity)
            return "edges {" + entity.render(registry) + "}"
        self.append(callback)

    def page_info(self, config: Callable[['PageInfo'], None]):
        def callback(registry: VariableRegistry):
            entity = PageInfo()
            config(entity)
            return "page_info {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
