
from gaia_sdk.graphql.request.type.StreamingImpulse import StreamingImpulse
from gaia_sdk.graphql.request.input.StreamImpulse import StreamImpulse

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class Practice(list):
    """
    This type contains all practice sensor impulses which are used to support
    practice in gaia.
    """

    """
    Stream practice preparation impulse used to transfer a skill to gaia.
        This perception impulse do not invoke the data transmission but establishes
        a connection to the streaming api.
    """
    def prepare(self, impulse: StreamImpulse, config: Callable[['StreamingImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = StreamingImpulse()
            config(entity)
            return f'prepare(impulse:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
