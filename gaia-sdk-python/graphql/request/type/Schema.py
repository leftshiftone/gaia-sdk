
from graphql.request.type.Query import Query
from graphql.request.type.Mutation import Mutation
from graphql.request.type.Subscription import Subscription

from typing import Callable
from api.VariableRegistry import VariableRegistry


class Schema(list):

    def query(self, config: Callable[['Query'], None]):
        def callback(_: VariableRegistry):
            entity = Query()
            config(entity)
        self.append(callback)

    def mutation(self, config: Callable[['Mutation'], None]):
        def callback(_: VariableRegistry):
            entity = Mutation()
            config(entity)
        self.append(callback)

    def subscription(self, config: Callable[['Subscription'], None]):
        def callback(_: VariableRegistry):
            entity = Subscription()
            config(entity)
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
