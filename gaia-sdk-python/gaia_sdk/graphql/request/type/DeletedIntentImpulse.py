
from graphql.request.type.Intent import Intent

from typing import Callable
from api.VariableRegistry import VariableRegistry


class DeletedIntentImpulse(list):
    """
    Impulse which indicates the resulf of a delete intent impulse
    """

    def id(self):
        self.append(lambda x: "id")

    """
    the intent instance
    """
    def intent(self, config: Callable[['Intent'], None]):
        def callback(_: VariableRegistry):
            entity = Intent()
            config(entity)
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
