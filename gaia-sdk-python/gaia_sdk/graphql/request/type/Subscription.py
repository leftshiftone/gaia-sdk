
from gaia_sdk.graphql.request.type.Interaction import Interaction
from gaia_sdk.graphql.request.type.Introspection import Introspection
from gaia_sdk.graphql.request.type.Notification import Notification

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class Subscription(list):
    """
    the top level subscription type
    """

    def interact(self, config: Callable[['Interaction'], None]):
        def callback(registry: VariableRegistry):
            entity = Interaction()
            config(entity)
            return "interact {" + entity.render(registry) + "}"
        self.append(callback)

    def notify(self, config: Callable[['Notification'], None]):
        def callback(registry: VariableRegistry):
            entity = Notification()
            config(entity)
            return "notify {" + entity.render(registry) + "}"
        self.append(callback)

    """
    Container element for all introspect sensor fields
    """
    def introspect(self, config: Callable[['Introspection'], None]):
        def callback(registry: VariableRegistry):
            entity = Introspection()
            config(entity)
            return "introspect {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
