

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class KeyOne(list):
    """
    This entity represents the output of a delete impulse
    """

    def identity_id(self):
        self.append(lambda x: "identityId")

    def reference(self):
        self.append(lambda x: "reference")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
