

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class DeletedEdgeImpulse(list):
    """
    Impulse which indicates the result of a delete edge impulse
    """

    def id(self):
        self.append(lambda x: "id")

    def source(self):
        self.append(lambda x: "source")

    def target(self):
        self.append(lambda x: "target")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
