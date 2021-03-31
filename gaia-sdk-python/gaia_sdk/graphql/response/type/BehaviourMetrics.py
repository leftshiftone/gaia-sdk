
from typing import List

from gaia_sdk.graphql.response.type.BehaviourStatesPerDay import BehaviourStatesPerDay

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class BehaviourMetrics:
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
    def identity_id(self) -> Uuid:
        return Uuid(self.dictionary.get("identityId"))
    @property
    def behaviour_id(self) -> Uuid:
        return Uuid(self.dictionary.get("behaviourId"))
    @property
    def states_per_day(self) -> List[BehaviourStatesPerDay]:
        return list(map(lambda x: BehaviourStatesPerDay(x), self.dictionary.get("statesPerDay")))
