

from typing import Callable
from api.VariableRegistry import VariableRegistry


class SkillPracticedImpulse(list):
    """
    This impulse returns the result of a skill practice query request
    """

    def id(self):
        self.append(lambda x: "id")

    """
    The result of the skill practice
    """
    def data(self):
        self.append(lambda x: "data")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
