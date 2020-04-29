

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class OnUpdated(list):

    def id(self):
        self.append(lambda x: "id")

    def identity_id(self):
        self.append(lambda x: "identityId")

    def reference(self):
        self.append(lambda x: "reference")

    def type(self):
        self.append(lambda x: "type")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
