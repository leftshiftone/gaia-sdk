
from gaia_sdk.graphql.response.type.SkillBuildJob import SkillBuildJob

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class CanceledSkillBuildJobImpulse:
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
    def id(self) -> Uuid:
        return Uuid(self.dictionary.get("id"))
    @property
    def data(self) -> SkillBuildJob:
        return SkillBuildJob(self.dictionary.get("data"))
