
from gaia_sdk.graphql.request.type.Prompt import Prompt

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class CreatedPromptImpulse(list):
    """
    Impulse which indicates the result of a create prompt impulse
    """

    def id(self):
        self.append(lambda x: "id")

    """
    the prompt instance
    """
    def data(self, config: Callable[['Prompt'], None]):
        def callback(registry: VariableRegistry):
            entity = Prompt()
            config(entity)
            return "data {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
