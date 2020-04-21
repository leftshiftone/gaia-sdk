

from typing import Callable
from api.VariableRegistry import VariableRegistry


class AsyncSkillEvaluation(list):

    def tbd(self):
        self.append(lambda x: "tbd")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))