
from typing import List

from gaia_sdk.graphql.response.type.SkillBuildJob import SkillBuildJob

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


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

    """
    Introspects the build jobs currently available in the system
    """
    @property
    def build_jobs(self) -> List[SkillBuildJob]:
        return list(map(lambda x: SkillBuildJob(x), self.dictionary.get("buildJobs")))
