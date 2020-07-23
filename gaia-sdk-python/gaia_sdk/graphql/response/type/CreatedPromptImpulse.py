
from gaia_sdk.graphql.response.type.Prompt import Prompt

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
class CreatedPromptImpulse:
    """
    Impulse which indicates the result of a create prompt impulse
    """
    dictionary: dict
    @property
    def id(self) -> Uuid:
        return Uuid(self.dictionary.get("id"))
    """
    the prompt instance
    """
    @property
    def data(self) -> Prompt:
        return Prompt(self.dictionary.get("data"))
