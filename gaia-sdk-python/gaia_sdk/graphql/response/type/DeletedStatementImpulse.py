
from gaia_sdk.graphql.response.type.Intent import Intent

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
class DeletedStatementImpulse:
    """
    Impulse which indicates the resulf of a delete statement impulse
    """
    dictionary: dict
    @property
    def id(self) -> Uuid:
        return Uuid(self.dictionary.get("id"))
    """
    the statement instance
    """
    @property
    def statement(self) -> Intent:
        return Intent(self.dictionary.get("statement"))