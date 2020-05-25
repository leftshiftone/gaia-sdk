
from gaia_sdk.graphql.response.type.Code import Code

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
class CreatedCodeImpulse:
    """
    Impulse which indicates the result of a create code impulse
    """
    dictionary: dict
    @property
    def id(self) -> Uuid:
        return Uuid(self.dictionary.get("id"))
    """
    the code instance
    """
    @property
    def data(self) -> Code:
        return Code(self.dictionary.get("data"))
