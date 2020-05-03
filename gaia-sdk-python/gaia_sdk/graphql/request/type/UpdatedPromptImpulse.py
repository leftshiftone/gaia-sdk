
from gaia_sdk.graphql.request.type.Prompt import Prompt

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class UpdatedPromptImpulse(list):
    """
    Impulse which indicates the resulf of a update prompt impulse
    """

    def id(self):
        self.append(lambda x: "id")

    """
    the prompt instance
    """
    def prompt(self, config: Callable[['Prompt'], None]):
        def callback(registry: VariableRegistry):
            entity = Prompt()
            config(entity)
            return "prompt {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))