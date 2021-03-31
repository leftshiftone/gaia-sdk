
from gaia_sdk.graphql.response.type.AsyncSkillEvaluation import AsyncSkillEvaluation
from gaia_sdk.graphql.response.type.SyncSkillEvaluation import SyncSkillEvaluation

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


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
