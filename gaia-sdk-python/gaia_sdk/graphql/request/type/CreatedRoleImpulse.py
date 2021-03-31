
from typing import Callable

from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.type.Role import Role


class CreatedRoleImpulse(list):
    """
    Impulse which indicates the result of a create role impulse
    """

    def id(self):
        self.append(lambda x: "id")

    def data(self, config: Callable[['Role'], None]):
        def callback(registry: VariableRegistry):
            entity = Role()
            config(entity)
            return "data {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
