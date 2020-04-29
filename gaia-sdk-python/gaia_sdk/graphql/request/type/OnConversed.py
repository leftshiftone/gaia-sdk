

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class OnConversed(list):

    def id(self):
        self.append(lambda x: "id")

    def name(self):
        self.append(lambda x: "name")

    def type(self):
        self.append(lambda x: "type")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
