
from gaia_sdk.graphql.request.type.Retrieval import Retrieval
from gaia_sdk.graphql.request.type.Introspection import Introspection

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class Query(list):
    """
    The top level query type
    """

    """
    Container element for all introspect sensor fields
    """
    def introspect(self, config: Callable[['Introspection'], None]):
        def callback(registry: VariableRegistry):
            entity = Introspection()
            config(entity)
            return "introspect {" + entity.render(registry) + "}"
        self.append(callback)

    """
    Container element for all retrieve sensor fields
    """
    def retrieve(self, config: Callable[['Retrieval'], None]):
        def callback(registry: VariableRegistry):
            entity = Retrieval()
            config(entity)
            return "retrieve {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
