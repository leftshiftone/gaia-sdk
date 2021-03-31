
from typing import List

from gaia_sdk.graphql.response.type.BehaviourNodeExecution import BehaviourNodeExecution

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class BehaviourExecutionDetail:
    """
    Represents a detailed summary of executed entities to a given processInstanceId
    """
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
    def process_instance_id(self) -> Uuid:
        return Uuid(self.dictionary.get("processInstanceId"))
    @property
    def identity_id(self) -> Uuid:
        return Uuid(self.dictionary.get("identityId"))
    @property
    def qualifier(self) -> String:
        return String(self.dictionary.get("qualifier"))
    @property
    def behaviours(self) -> Struct:
        return Struct(self.dictionary.get("behaviours"))
    @property
    def behaviour_id(self) -> Uuid:
        return Uuid(self.dictionary.get("behaviourId"))
    @property
    def nodes(self) -> List[BehaviourNodeExecution]:
        return list(map(lambda x: BehaviourNodeExecution(x), self.dictionary.get("nodes")))
