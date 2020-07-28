
from gaia_sdk.graphql.request.type.KeyOne import KeyOne

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class DeletedIdentityImpulse(list):
    """
    Impulse which indicates the result of a delete identity impulse
    """

    def id(self):
        self.append(lambda x: "id")

    def data(self, config: Callable[['KeyOne'], None]):
        def callback(registry: VariableRegistry):
            entity = KeyOne()
            config(entity)
            return "data {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))