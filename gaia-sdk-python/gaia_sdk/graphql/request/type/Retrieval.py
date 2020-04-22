
from graphql.request.type.Experience import Experience
from graphql.request.type.Knowledge import Knowledge

from typing import Callable
from api.VariableRegistry import VariableRegistry


class Retrieval(list):

    """
    Container element which collects all information static data
    """
    def knowledge(self, config: Callable[['Knowledge'], None]):
        def callback(_: VariableRegistry):
            entity = Knowledge()
            config(entity)
        self.append(callback)

    """
    Container element which collects all information about runtime data
    """
    def experience(self, config: Callable[['Experience'], None]):
        def callback(_: VariableRegistry):
            entity = Experience()
            config(entity)
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
