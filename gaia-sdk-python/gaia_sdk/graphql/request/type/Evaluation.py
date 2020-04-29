
from gaia_sdk.graphql.request.type.BuildInEvaluation import BuildInEvaluation
from gaia_sdk.graphql.request.type.SkillEvaluation import SkillEvaluation

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class Evaluation(list):

    def skill(self, config: Callable[['SkillEvaluation'], None]):
        def callback(registry: VariableRegistry):
            entity = SkillEvaluation()
            config(entity)
            return "skill {" + entity.render(registry) + "}"
        self.append(callback)

    def build_in(self, config: Callable[['BuildInEvaluation'], None]):
        def callback(registry: VariableRegistry):
            entity = BuildInEvaluation()
            config(entity)
            return "build_in {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
