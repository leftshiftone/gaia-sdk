
from gaia_sdk.graphql.request.type.Intent import Intent

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class DeletedStatementImpulse(list):
    """
    Impulse which indicates the resulf of a delete statement impulse
    """

    def id(self):
        self.append(lambda x: "id")

    """
    the statement instance
    """
    def data(self, config: Callable[['Intent'], None]):
        def callback(registry: VariableRegistry):
            entity = Intent()
            config(entity)
            return "data {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
