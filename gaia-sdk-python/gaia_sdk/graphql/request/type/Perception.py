
from gaia_sdk.graphql.request.type.Conversational import Conversational
from gaia_sdk.graphql.request.type.PerceivedImpulse import PerceivedImpulse
from gaia_sdk.graphql.request.input.PerceiveDataImpulse import PerceiveDataImpulse
from gaia_sdk.graphql.request.input.PerceiveActionImpulse import PerceiveActionImpulse

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class Perception(list):
    """
    This type contains all perception sensor impulses which are used to invoke
    events in gaia.
    """

    """
    Contains all perception fields needed for a conversation.
    """
    def conversational(self, config: Callable[['Conversational'], None]):
        def callback(registry: VariableRegistry):
            entity = Conversational()
            config(entity)
            return "conversational {" + entity.render(registry) + "}"
        self.append(callback)

    """
    Data perception impulse used to invoke a data transformation behaviour
    """
    def perceive_data(self, impulse: PerceiveDataImpulse, config: Callable[['PerceivedImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = PerceivedImpulse()
            config(entity)
            return f'perceiveData(impulse:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    Action perception impulse used to invoke a data transformation behaviour
    """
    def perceive_action(self, impulse: PerceiveActionImpulse, config: Callable[['PerceivedImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = PerceivedImpulse()
            config(entity)
            return f'perceiveAction(impulse:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
