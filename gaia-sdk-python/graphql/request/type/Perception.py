
from graphql.request.type.Conversational import Conversational
from graphql.request.type.StreamingImpulse import StreamingImpulse
from graphql.request.type.PerceivedImpulse import PerceivedImpulse
from graphql.request.input.PerceiveStreamImpulse import PerceiveStreamImpulse
from graphql.request.input.PerceiveDataImpulse import PerceiveDataImpulse
from graphql.request.input.PerceiveActionImpulse import PerceiveActionImpulse

from typing import Callable
from api.VariableRegistry import VariableRegistry


class Perception(list):
    """
    This type contains all perception sensor impulses which are used to invoke
    events in gaia.
    """

    """
    Contains all perception fields needed for a conversation.
    """
    def conversational(self, config: Callable[['Conversational'], None]):
        def callback(_: VariableRegistry):
            entity = Conversational()
            config(entity)
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

    """
    Stream perception impulse used to invoke a data transformation behaviour.
        This perception impulse do not invoke the data transmission but establishes
        a connection to the streaming api.
    """
    def perceive_stream(self, impulse: PerceiveStreamImpulse, config: Callable[['StreamingImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = StreamingImpulse()
            config(entity)
            return f'perceiveStream(impulse:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
