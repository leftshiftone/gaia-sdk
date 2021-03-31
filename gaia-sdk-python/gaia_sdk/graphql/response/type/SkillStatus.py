
from typing import List

from gaia_sdk.graphql.response.type.Failure import Failure

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class SkillStatus:
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
    def health(self) -> String:
        return String(self.dictionary.get("health"))
    @property
    def running(self) -> Int:
        return Int(self.dictionary.get("running"))
    @property
    def pending(self) -> Int:
        return Int(self.dictionary.get("pending"))
    @property
    def failures(self) -> List[Failure]:
        return list(map(lambda x: Failure(x), self.dictionary.get("failures")))
