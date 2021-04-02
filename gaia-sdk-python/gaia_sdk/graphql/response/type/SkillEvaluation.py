
from gaia_sdk.graphql.response.type.SyncSkillEvaluation import SyncSkillEvaluation
from gaia_sdk.graphql.response.type.AsyncSkillEvaluation import AsyncSkillEvaluation

from typing import List
Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType

class SkillEvaluation:
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
    def sync_eval(self) -> SyncSkillEvaluation:
        return SyncSkillEvaluation(self.dictionary.get("syncEval"))
    @property
    def async_eval(self) -> AsyncSkillEvaluation:
        return AsyncSkillEvaluation(self.dictionary.get("asyncEval"))
