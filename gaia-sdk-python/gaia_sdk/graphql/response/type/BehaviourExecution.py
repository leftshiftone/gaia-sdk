

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

class BehaviourExecution:
    """
    Represents behaviour execution information
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
    def state(self) -> String:
        return String(self.dictionary.get("state"))
    @property
    def timestamp(self) -> ISO8601:
        return ISO8601(self.dictionary.get("timestamp"))
    @property
    def duration(self) -> ISO8601:
        return ISO8601(self.dictionary.get("duration"))
    @property
    def start_event_type(self) -> String:
        return String(self.dictionary.get("startEventType"))
    @property
    def start_event_id(self) -> Uuid:
        return Uuid(self.dictionary.get("startEventId"))
    @property
    def init_attributes(self) -> Struct:
        return Struct(self.dictionary.get("initAttributes"))
    @property
    def process_id(self) -> Uuid:
        return Uuid(self.dictionary.get("processId"))
    @property
    def parent_process_id(self) -> Uuid:
        return Uuid(self.dictionary.get("parentProcessId"))
