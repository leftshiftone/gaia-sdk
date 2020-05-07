
from gaia_sdk.graphql.request.type.Intent import Intent

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class DeletedIntentImpulse(list):
    """
    Impulse which indicates the resulf of a delete intent impulse
    """

    def id(self):
        self.append(lambda x: "id")

    """
    the intent instance
    """
    def data(self, config: Callable[['Intent'], None]):
        def callback(registry: VariableRegistry):
            entity = Intent()
            config(entity)
            return "data {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
