

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class Edge(list):
    """
    Container type for static information
    """

    def source(self):
        self.append(lambda x: "source")

    def target(self):
        self.append(lambda x: "target")

    def type(self):
        self.append(lambda x: "type")

    def weight(self):
        self.append(lambda x: "weight")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
