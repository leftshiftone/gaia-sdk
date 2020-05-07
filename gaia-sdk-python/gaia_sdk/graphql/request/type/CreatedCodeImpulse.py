
from gaia_sdk.graphql.request.type.Code import Code

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class CreatedCodeImpulse(list):
    """
    Impulse which indicates the resulf of a create code impulse
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
