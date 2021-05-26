
from gaia_sdk.graphql.request.type.BehaviourExecution import BehaviourExecution
from gaia_sdk.graphql.request.type.BehaviourMetrics import BehaviourMetrics
from gaia_sdk.graphql.request.type.IdentityMetrics import IdentityMetrics
from gaia_sdk.graphql.request.type.BehaviourExecutionDetail import BehaviourExecutionDetail

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class Experience(list):
    """
    Container type for runtime information
    """

    def behaviour_execution(self, identityId: str, processInstanceId: str, config: Callable[['BehaviourExecutionDetail'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("identityId", identityId)
            name2 = registry.register("processInstanceId", processInstanceId)
            entity = BehaviourExecutionDetail()
            config(entity)
            return f'behaviourExecution(identityId:{name1}, processInstanceId:{name2})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def behaviour_executions(self, identityId: str, limit: int, offset: int, startDate: str, endDate: str, config: Callable[['BehaviourExecution'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("identityId", identityId)
            name2 = registry.register("limit", limit)
            name3 = registry.register("offset", offset)
            name4 = registry.register("startDate", startDate)
            name5 = registry.register("endDate", endDate)
            entity = BehaviourExecution()
            config(entity)
            return f'behaviourExecutions(identityId:{name1}, limit:{name2}, offset:{name3}, startDate:{name4}, endDate:{name5})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def identity_metrics(self, identityId: str, startDate: str, endDate: str, limit: int, config: Callable[['IdentityMetrics'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("identityId", identityId)
            name2 = registry.register("startDate", startDate)
            name3 = registry.register("endDate", endDate)
            name4 = registry.register("limit", limit)
            entity = IdentityMetrics()
            config(entity)
            return f'identityMetrics(identityId:{name1}, startDate:{name2}, endDate:{name3}, limit:{name4})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def behaviour_metrics(self, identityId: str, behaviourId: str, startDate: str, endDate: str, limit: int, config: Callable[['BehaviourMetrics'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("identityId", identityId)
            name2 = registry.register("behaviourId", behaviourId)
            name3 = registry.register("startDate", startDate)
            name4 = registry.register("endDate", endDate)
            name5 = registry.register("limit", limit)
            entity = BehaviourMetrics()
            config(entity)
            return f'behaviourMetrics(identityId:{name1}, behaviourId:{name2}, startDate:{name3}, endDate:{name4}, limit:{name5})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
