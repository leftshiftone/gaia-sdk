

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class Identity(list):
    """
    Represents identity information
    """

    """
    The identity id
    """
    def identity_id(self):
        self.append(lambda x: "identityId")

    """
    The name of the identity
    """
    def qualifier(self):
        self.append(lambda x: "qualifier")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
