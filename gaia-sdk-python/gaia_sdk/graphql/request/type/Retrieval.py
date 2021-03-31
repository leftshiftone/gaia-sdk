
from gaia_sdk.graphql.request.type.Experience import Experience
from gaia_sdk.graphql.request.type.Knowledge import Knowledge

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class Retrieval(list):

    """
    Container element which collects all information static data
    """
    def knowledge(self, config: Callable[['Knowledge'], None]):
        def callback(registry: VariableRegistry):
            entity = Knowledge()
            config(entity)
            return "knowledge {" + entity.render(registry) + "}"
        self.append(callback)

    """
    Container element which collects all information about runtime data
    """
    def experience(self, config: Callable[['Experience'], None]):
        def callback(registry: VariableRegistry):
            entity = Experience()
            config(entity)
            return "experience {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
