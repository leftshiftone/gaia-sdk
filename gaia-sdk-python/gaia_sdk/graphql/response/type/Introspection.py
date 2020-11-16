
from gaia_sdk.graphql.response.type.SkillIntrospection import SkillIntrospection

from typing import List
Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool
from gaia_sdk.graphql.request.enumeration.RuntimeState import RuntimeState
from gaia_sdk.graphql.request.enumeration.SkillState import SkillState
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType

class Introspection:
    dictionary: dict

    def __init__(self, dictionary: dict):
        self.dictionary = dictionary

    def __eq__(self, other):
        if type(other) is type(self):
            return self.dictionary == other.dictionary
        return False

    def __repr__(self):
        return {'dictionary': self.dictionary}

    @property
    def cpu(self) -> String:
        return String(self.dictionary.get("cpu"))
    @property
    def gpu(self) -> String:
        return String(self.dictionary.get("gpu"))
    @property
    def memory(self) -> String:
        return String(self.dictionary.get("memory"))
    @property
    def state(self) -> RuntimeState:
        return RuntimeState(self.dictionary.get("state"))
    @property
    def started(self) -> ISO8601:
        return ISO8601(self.dictionary.get("started"))
    @property
    def skills(self) -> List[SkillIntrospection]:
        return list(map(lambda x: SkillIntrospection(x), self.dictionary.get("skills")))
