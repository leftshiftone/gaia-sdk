
from gaia_sdk.graphql.request.type.Intent import Intent

from typing import Callable
from gaia_sdk.api.VariableRegistry import VariableRegistry


class UpdatedIntentsImpulse(list):
    """
    Impulse which indicates the resulf of a update intent impulse
    """

    def id(self):
        self.append(lambda x: "id")

    """
    the intent instance
    """
    def intents(self, config: Callable[['Intent'], None]):
        def callback(registry: VariableRegistry):
            entity = Intent()
            config(entity)
            return "intents {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
