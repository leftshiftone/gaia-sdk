

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class Activation(list):

    def tmp(self):
        self.append(lambda x: "tmp")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
