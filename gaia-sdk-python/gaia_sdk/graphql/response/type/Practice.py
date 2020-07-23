
from gaia_sdk.graphql.response.type.StreamingImpulse import StreamingImpulse
from gaia_sdk.graphql.request.input.StreamImpulse import StreamImpulse

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
class Practice:
    """
    This type contains all practice sensor impulses which are used to support
    practice in gaia.
    """
    dictionary: dict
    """
    Stream practice preparation impulse used to transfer a skill to gaia.
        This perception impulse do not invoke the data transmission but establishes
        a connection to the streaming api.
    """
    @property
    def prepare(self) -> StreamingImpulse:
        return StreamingImpulse(self.dictionary.get("prepare"))
