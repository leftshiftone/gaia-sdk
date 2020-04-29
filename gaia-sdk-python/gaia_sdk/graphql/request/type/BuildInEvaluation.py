

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class BuildInEvaluation(list):

    def behaviour(self):
        self.append(lambda x: "behaviour")

    def gaiaquery(self):
        self.append(lambda x: "gaiaquery")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
