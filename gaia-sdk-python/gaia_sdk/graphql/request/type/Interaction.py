
from gaia_sdk.graphql.request.type.OnConversed import OnConversed

from typing import Callable
from gaia_sdk.api.VariableRegistry import VariableRegistry


class Interaction(list):

    def on_conversed(self, config: Callable[['OnConversed'], None]):
        def callback(registry: VariableRegistry):
            entity = OnConversed()
            config(entity)
            return "on_conversed {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))