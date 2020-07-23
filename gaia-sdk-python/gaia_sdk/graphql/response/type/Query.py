
from gaia_sdk.graphql.response.type.Retrieval import Retrieval
from gaia_sdk.graphql.response.type.Introspection import Introspection

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
class Query:
    """
    The top level query type
    """
    dictionary: dict
    """
    Container element for all introspect sensor fields
    """
    @property
    def introspect(self) -> Introspection:
        return Introspection(self.dictionary.get("introspect"))
    """
    Container element for all retrieve sensor fields
    """
    @property
    def retrieve(self) -> Retrieval:
        return Retrieval(self.dictionary.get("retrieve"))
