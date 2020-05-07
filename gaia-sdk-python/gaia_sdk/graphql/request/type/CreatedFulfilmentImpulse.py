
from gaia_sdk.graphql.request.type.Fulfilment import Fulfilment

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class CreatedFulfilmentImpulse(list):
    """
    Impulse which indicates the resulf of a create fulfilment impulse
    """

    def id(self):
        self.append(lambda x: "id")

    """
    the fulfilment instance
    """
    def data(self, config: Callable[['Fulfilment'], None]):
        def callback(registry: VariableRegistry):
            entity = Fulfilment()
            config(entity)
            return "data {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
