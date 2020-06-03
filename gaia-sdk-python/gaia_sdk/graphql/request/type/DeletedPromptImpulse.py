

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class DeletedPromptImpulse(list):
    """
    Impulse which indicates the result of a delete prompt impulse
    """

    def id(self):
        self.append(lambda x: "id")

    def identity_id(self):
        self.append(lambda x: "identityId")

    def reference(self):
        self.append(lambda x: "reference")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
