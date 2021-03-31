
from typing import Callable

from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.type.Code import Code


class UpdatedCodeImpulse(list):
    """
    Impulse which indicates the result of a update code impulse
    """

    def id(self):
        self.append(lambda x: "id")

    """
    the code instance
    """
    def data(self, config: Callable[['Code'], None]):
        def callback(registry: VariableRegistry):
            entity = Code()
            config(entity)
            return "data {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
