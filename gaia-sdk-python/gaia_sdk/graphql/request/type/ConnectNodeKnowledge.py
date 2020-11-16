
from gaia_sdk.graphql.request.type.ConnectNodeRemovedImpulse import ConnectNodeRemovedImpulse
from gaia_sdk.graphql.request.type.ConnectNodeUnsetImpulse import ConnectNodeUnsetImpulse
from gaia_sdk.graphql.request.type.ConnectNodeAppendedImpulse import ConnectNodeAppendedImpulse
from gaia_sdk.graphql.request.type.ConnectNodeSetImpulse import ConnectNodeSetImpulse
from gaia_sdk.graphql.request.input.ConnectSetNodeImpulse import ConnectSetNodeImpulse
from gaia_sdk.graphql.request.input.ConnectAppendNodeImpulse import ConnectAppendNodeImpulse
from gaia_sdk.graphql.request.input.ConnectUnsetNodeImpulse import ConnectUnsetNodeImpulse
from gaia_sdk.graphql.request.input.ConnectRemoveNodeImpulse import ConnectRemoveNodeImpulse

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class ConnectNodeKnowledge(list):

    def append(self, impulse: ConnectAppendNodeImpulse, config: Callable[['ConnectNodeAppendedImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = ConnectNodeAppendedImpulse()
            config(entity)
            return f'append(impulse:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def remove(self, impulse: ConnectRemoveNodeImpulse, config: Callable[['ConnectNodeRemovedImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = ConnectNodeRemovedImpulse()
            config(entity)
            return f'remove(impulse:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def set(self, impulse: ConnectSetNodeImpulse, config: Callable[['ConnectNodeSetImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = ConnectNodeSetImpulse()
            config(entity)
            return f'set(impulse:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def unset(self, impulse: ConnectUnsetNodeImpulse, config: Callable[['ConnectNodeUnsetImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = ConnectNodeUnsetImpulse()
            config(entity)
            return f'unset(impulse:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
