
from gaia_sdk.graphql.response.type.BuildInEvaluation import BuildInEvaluation
from gaia_sdk.graphql.response.type.SkillEvaluation import SkillEvaluation

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class Evaluation:
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
    def skill(self) -> SkillEvaluation:
        return SkillEvaluation(self.dictionary.get("skill"))
    @property
    def build_in(self) -> BuildInEvaluation:
        return BuildInEvaluation(self.dictionary.get("buildIn"))
