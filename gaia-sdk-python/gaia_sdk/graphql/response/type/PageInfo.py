

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
class PageInfo:
    """
    Represents information used for paginiation
    """
    dictionary: dict
    @property
    def start_cursor(self) -> String:
        return String(self.dictionary.get("startCursor"))
    @property
    def end_cursor(self) -> String:
        return String(self.dictionary.get("endCursor"))
    @property
    def has_next_page(self) -> Boolean:
        return Boolean(self.dictionary.get("hasNextPage"))
    @property
    def has_previous_page(self) -> Boolean:
        return Boolean(self.dictionary.get("hasPreviousPage"))
