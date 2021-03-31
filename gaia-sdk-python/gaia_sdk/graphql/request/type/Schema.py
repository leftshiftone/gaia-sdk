
from gaia_sdk.graphql.request.type.Query import Query
from gaia_sdk.graphql.request.type.Mutation import Mutation
from gaia_sdk.graphql.request.type.Subscription import Subscription

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class Schema(list):

    def query(self, config: Callable[['Query'], None]):
        def callback(registry: VariableRegistry):
            entity = Query()
            config(entity)
            return "query {" + entity.render(registry) + "}"
        self.append(callback)

    def mutation(self, config: Callable[['Mutation'], None]):
        def callback(registry: VariableRegistry):
            entity = Mutation()
            config(entity)
            return "mutation {" + entity.render(registry) + "}"
        self.append(callback)

    def subscription(self, config: Callable[['Subscription'], None]):
        def callback(registry: VariableRegistry):
            entity = Subscription()
            config(entity)
            return "subscription {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
