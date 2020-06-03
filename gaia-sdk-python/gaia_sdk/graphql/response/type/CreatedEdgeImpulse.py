
from gaia_sdk.graphql.response.type.Edge import Edge

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
class CreatedEdgeImpulse:
    """
    Impulse which indicates the result of a create edge impulse
    """
    dictionary: dict
    @property
    def id(self) -> Uuid:
        return Uuid(self.dictionary.get("id"))
    """
    the edge instance
    """
    @property
    def data(self) -> Edge:
        return Edge(self.dictionary.get("data"))
