

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class Impulse(list):
    """
    Each message returned from GAIA implements this interface
    """

    """
    The id of the impulse
    """
    def id(self):
        self.append(lambda x: "id")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
