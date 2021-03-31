
from gaia_sdk.graphql.request.type.OnUpdated import OnUpdated
from gaia_sdk.graphql.request.type.OnDeleted import OnDeleted
from gaia_sdk.graphql.request.type.OnCreated import OnCreated

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class Notification(list):

    def on_created(self, config: Callable[['OnCreated'], None]):
        def callback(registry: VariableRegistry):
            entity = OnCreated()
            config(entity)
            return "on_created {" + entity.render(registry) + "}"
        self.append(callback)

    def on_updated(self, config: Callable[['OnUpdated'], None]):
        def callback(registry: VariableRegistry):
            entity = OnUpdated()
            config(entity)
            return "on_updated {" + entity.render(registry) + "}"
        self.append(callback)

    def on_deleted(self, config: Callable[['OnDeleted'], None]):
        def callback(registry: VariableRegistry):
            entity = OnDeleted()
            config(entity)
            return "on_deleted {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
