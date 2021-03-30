
from gaia_sdk.graphql.request.type.SkillBuildJob import SkillBuildJob

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class Introspection(list):

    """
    Introspects the build jobs currently available in the system
    """
    def build_jobs(self, tenantId: str, config: Callable[['SkillBuildJob'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("tenantId", tenantId)
            entity = SkillBuildJob()
            config(entity)
            return f'buildJobs(tenantId:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
