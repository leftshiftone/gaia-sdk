
from gaia_sdk.graphql.request.type.ConnectNodeRemovedImpulse import ConnectNodeRemovedImpulse
from gaia_sdk.graphql.request.type.ConnectNodeUnsetImpulse import ConnectNodeUnsetImpulse
from gaia_sdk.graphql.request.type.ConnectNodeAppendedImpulse import ConnectNodeAppendedImpulse
from gaia_sdk.graphql.request.type.ConnectNodeSetImpulse import ConnectNodeSetImpulse

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField


class ConnectNodeKnowledge(list):

    def append(self, type: EdgeType, target: str, properties: dict, weight: float, config: Callable[['ConnectNodeAppendedImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("type", type)
            name2 = registry.register("target", target)
            name3 = registry.register("properties", properties)
            name4 = registry.register("weight", weight)
            entity = ConnectNodeAppendedImpulse()
            config(entity)
            return f'append(type:{name1}, target:{name2}, properties:{name3}, weight:{name4})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def remove(self, type: EdgeType, target: str, config: Callable[['ConnectNodeRemovedImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("type", type)
            name2 = registry.register("target", target)
            entity = ConnectNodeRemovedImpulse()
            config(entity)
            return f'remove(type:{name1}, target:{name2})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def set(self, type: EdgeType, target: str, properties: dict, weight: float, config: Callable[['ConnectNodeSetImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("type", type)
            name2 = registry.register("target", target)
            name3 = registry.register("properties", properties)
            name4 = registry.register("weight", weight)
            entity = ConnectNodeSetImpulse()
            config(entity)
            return f'set(type:{name1}, target:{name2}, properties:{name3}, weight:{name4})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def unset(self, type: EdgeType, config: Callable[['ConnectNodeUnsetImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("type", type)
            entity = ConnectNodeUnsetImpulse()
            config(entity)
            return f'unset(type:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
