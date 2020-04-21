
from graphql.request.type.BuildInEvaluation import BuildInEvaluation
from graphql.request.type.SkillEvaluation import SkillEvaluation

from typing import Callable
from api.VariableRegistry import VariableRegistry


class Evaluation(list):

    def skill(self, config: Callable[['SkillEvaluation'], None]):
        def callback(_: VariableRegistry):
            entity = SkillEvaluation()
            config(entity)
        self.append(callback)

    def build_in(self, config: Callable[['BuildInEvaluation'], None]):
        def callback(_: VariableRegistry):
            entity = BuildInEvaluation()
            config(entity)
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
