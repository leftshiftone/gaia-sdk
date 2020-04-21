
from graphql.request.type.SyncSkillEvaluation import SyncSkillEvaluation
from graphql.request.type.AsyncSkillEvaluation import AsyncSkillEvaluation

from typing import Callable
from api.VariableRegistry import VariableRegistry


class SkillEvaluation(list):

    def sync(self, impulse: String, config: Callable[['SyncSkillEvaluation'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = SyncSkillEvaluation()
            config(entity)
            return f'sync(impulse:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def async(self, impulse: String, config: Callable[['AsyncSkillEvaluation'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = AsyncSkillEvaluation()
            config(entity)
            return f'async(impulse:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
