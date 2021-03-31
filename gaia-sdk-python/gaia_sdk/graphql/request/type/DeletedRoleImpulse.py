
from typing import Callable

from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.type.RoleKeyOne import RoleKeyOne


class DeletedRoleImpulse(list):
    """
    Impulse which indicates the result of a delete role impulse
    """

    def id(self):
        self.append(lambda x: "id")

    def data(self, config: Callable[['RoleKeyOne'], None]):
        def callback(registry: VariableRegistry):
            entity = RoleKeyOne()
            config(entity)
            return "data {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
