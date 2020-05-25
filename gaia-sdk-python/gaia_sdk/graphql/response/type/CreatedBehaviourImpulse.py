
from gaia_sdk.graphql.response.type.Behaviour import Behaviour

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
class CreatedBehaviourImpulse:
    """
    Impulse which indicates the result of a create behaviour impulse
    """
    dictionary: dict
    @property
    def id(self) -> Uuid:
        return Uuid(self.dictionary.get("id"))
    """
    the behaviour instance
    """
    @property
    def data(self) -> Behaviour:
        return Behaviour(self.dictionary.get("data"))
