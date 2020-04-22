
from graphql.request.type.OnConversed import OnConversed

from typing import Callable
from api.VariableRegistry import VariableRegistry


class Interaction(list):

    def on_conversed(self, config: Callable[['OnConversed'], None]):
        def callback(_: VariableRegistry):
            entity = OnConversed()
            config(entity)
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
