
from gaia_sdk.graphql.response.type.Statement import Statement

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
class CreatedStatementImpulse:
    """
    Impulse which indicates the resulf of a create statement impulse
    """
    dictionary: dict
    @property
    def id(self) -> Uuid:
        return Uuid(self.dictionary.get("id"))
    """
    the statement instance
    """
    @property
    def statement(self) -> Statement:
        return Statement(self.dictionary.get("statement"))
