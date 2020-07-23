
from gaia_sdk.graphql.response.type.Fulfilment import Fulfilment

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
class UpdatedFulfilmentImpulse:
    """
    Impulse which indicates the result of a update fulfilment impulse
    """
    dictionary: dict
    @property
    def id(self) -> Uuid:
        return Uuid(self.dictionary.get("id"))
    """
    the fulfilment instance
    """
    @property
    def data(self) -> Fulfilment:
        return Fulfilment(self.dictionary.get("data"))
