
from gaia_sdk.graphql.request.type.Behaviour import Behaviour

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class CreatedBehaviourImpulse(list):
    """
    Impulse which indicates the resulf of a create behaviour impulse
    """

    def id(self):
        self.append(lambda x: "id")

    """
    the behaviour instance
    """
    def data(self, config: Callable[['Behaviour'], None]):
        def callback(registry: VariableRegistry):
            entity = Behaviour()
            config(entity)
            return "data {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
