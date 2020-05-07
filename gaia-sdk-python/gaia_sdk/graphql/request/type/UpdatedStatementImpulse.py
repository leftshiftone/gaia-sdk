
from gaia_sdk.graphql.request.type.Statement import Statement

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class UpdatedStatementImpulse(list):
    """
    Impulse which indicates the resulf of a update statement impulse
    """

    def id(self):
        self.append(lambda x: "id")

    """
    the statement instance
    """
    def data(self, config: Callable[['Statement'], None]):
        def callback(registry: VariableRegistry):
            entity = Statement()
            config(entity)
            return "data {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
