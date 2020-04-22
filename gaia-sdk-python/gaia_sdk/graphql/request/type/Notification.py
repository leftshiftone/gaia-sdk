
from graphql.request.type.OnUpdated import OnUpdated
from graphql.request.type.OnDeleted import OnDeleted
from graphql.request.type.OnCreated import OnCreated

from typing import Callable
from api.VariableRegistry import VariableRegistry


class Notification(list):

    def on_created(self, config: Callable[['OnCreated'], None]):
        def callback(_: VariableRegistry):
            entity = OnCreated()
            config(entity)
        self.append(callback)

    def on_updated(self, config: Callable[['OnUpdated'], None]):
        def callback(_: VariableRegistry):
            entity = OnUpdated()
            config(entity)
        self.append(callback)

    def on_deleted(self, config: Callable[['OnDeleted'], None]):
        def callback(_: VariableRegistry):
            entity = OnDeleted()
            config(entity)
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
