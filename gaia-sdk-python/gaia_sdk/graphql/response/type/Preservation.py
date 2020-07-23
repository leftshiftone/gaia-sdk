
from gaia_sdk.graphql.response.type.DeleteKnowledge import DeleteKnowledge
from gaia_sdk.graphql.response.type.UpdateKnowledge import UpdateKnowledge
from gaia_sdk.graphql.response.type.CreateKnowledge import CreateKnowledge

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
class Preservation:
    """
    This type contains all preservation sensor impulses which are used to support
    read/write/delete memory functions in gaia.
    """
    dictionary: dict
    @property
    def create(self) -> CreateKnowledge:
        return CreateKnowledge(self.dictionary.get("create"))
    @property
    def update(self) -> UpdateKnowledge:
        return UpdateKnowledge(self.dictionary.get("update"))
    @property
    def delete(self) -> DeleteKnowledge:
        return DeleteKnowledge(self.dictionary.get("delete"))
