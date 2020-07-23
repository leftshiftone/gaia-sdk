
from gaia_sdk.graphql.response.type.Conversational import Conversational
from gaia_sdk.graphql.response.type.PerceivedImpulse import PerceivedImpulse
from gaia_sdk.graphql.request.input.PerceiveDataImpulse import PerceiveDataImpulse
from gaia_sdk.graphql.request.input.PerceiveActionImpulse import PerceiveActionImpulse

from dataclasses import dataclass
from typing import List
Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
from gaia_sdk.graphql.request.enumeration.RuntimeState import RuntimeState
from gaia_sdk.graphql.request.enumeration.SkillState import SkillState

@dataclass
class Perception:
    """
    This type contains all perception sensor impulses which are used to invoke
    events in gaia.
    """
    dictionary: dict
    """
    Contains all perception fields needed for a conversation.
    """
    @property
    def conversational(self) -> Conversational:
        return Conversational(self.dictionary.get("conversational"))
    """
    Data perception impulse used to invoke a data transformation behaviour
    """
    @property
    def perceive_data(self) -> PerceivedImpulse:
        return PerceivedImpulse(self.dictionary.get("perceiveData"))
    """
    Action perception impulse used to invoke a data transformation behaviour
    """
    @property
    def perceive_action(self) -> PerceivedImpulse:
        return PerceivedImpulse(self.dictionary.get("perceiveAction"))
