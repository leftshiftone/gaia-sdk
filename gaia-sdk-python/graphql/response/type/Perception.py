
from graphql.response.type.Conversational import Conversational
from graphql.response.type.StreamingImpulse import StreamingImpulse
from graphql.response.type.PerceivedImpulse import PerceivedImpulse
from graphql.response.input.PerceiveStreamImpulse import PerceiveStreamImpulse
from graphql.response.input.PerceiveDataImpulse import PerceiveDataImpulse
from graphql.response.input.PerceiveActionImpulse import PerceiveActionImpulse


class Perception:
    """
    This type contains all perception sensor impulses which are used to invoke
    events in gaia.
    """
    """
    Contains all perception fields needed for a conversation.
    """
    def conversational(self) -> Conversational:
        return self.conversational
    """
    Data perception impulse used to invoke a data transformation behaviour
    """
    def perceiveData(self) -> PerceivedImpulse:
        return self.perceiveData
    """
    Action perception impulse used to invoke a data transformation behaviour
    """
    def perceiveAction(self) -> PerceivedImpulse:
        return self.perceiveAction
    """
    Stream perception impulse used to invoke a data transformation behaviour.
        This perception impulse do not invoke the data transmission but establishes
        a connection to the streaming api.
    """
    def perceiveStream(self) -> StreamingImpulse:
        return self.perceiveStream
