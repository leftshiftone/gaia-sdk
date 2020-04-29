

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class SkillIntrospection(list):

    def name(self):
        self.append(lambda x: "name")

    def state(self):
        self.append(lambda x: "state")

    def started(self):
        self.append(lambda x: "started")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
