
from gaia_sdk.graphql.request.type.SyncSkillEvaluation import SyncSkillEvaluation
from gaia_sdk.graphql.request.type.AsyncSkillEvaluation import AsyncSkillEvaluation

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class SkillEvaluation(list):

    def sync_eval(self, impulse: str, config: Callable[['SyncSkillEvaluation'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = SyncSkillEvaluation()
            config(entity)
            return f'syncEval(impulse:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def async_eval(self, impulse: str, config: Callable[['AsyncSkillEvaluation'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = AsyncSkillEvaluation()
            config(entity)
            return f'asyncEval(impulse:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
