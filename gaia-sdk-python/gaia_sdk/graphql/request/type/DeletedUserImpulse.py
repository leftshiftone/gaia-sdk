
from typing import Callable

from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.type.UserKeyOne import UserKeyOne


class DeletedUserImpulse(list):
    """
    Impulse which indicates the result of a delete user impulse
    """

    def id(self):
        self.append(lambda x: "id")

    def data(self, config: Callable[['UserKeyOne'], None]):
        def callback(registry: VariableRegistry):
            entity = UserKeyOne()
            config(entity)
            return "data {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
