
from gaia_sdk.graphql.response.type.OnConversed import OnConversed

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
class Interaction:
    dictionary: dict
    @property
    def on_conversed(self) -> OnConversed:
        return OnConversed(self.dictionary.get("onConversed"))
