

from dataclasses import dataclass
from typing import List
Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
from gaia_sdk.graphql.request.enumeration.RuntimeState import RuntimeState
from gaia_sdk.graphql.request.enumeration.SkillState import SkillState

@dataclass
class BehaviourNodeExecution:
    dictionary: dict
    @property
    def process_instance_id(self) -> Uuid:
        return Uuid(self.dictionary.get("processInstanceId"))
    @property
    def node_instance_id(self) -> Uuid:
        return Uuid(self.dictionary.get("nodeInstanceId"))
    @property
    def state(self) -> String:
        return String(self.dictionary.get("state"))
    @property
    def execution_group_id(self) -> Uuid:
        return Uuid(self.dictionary.get("executionGroupId"))
    @property
    def node_id(self) -> Uuid:
        return Uuid(self.dictionary.get("nodeId"))
    @property
    def process_id(self) -> Uuid:
        return Uuid(self.dictionary.get("processId"))
    @property
    def type(self) -> String:
        return String(self.dictionary.get("type"))
    @property
    def transitions(self) -> Struct:
        return Struct(self.dictionary.get("transitions"))
    @property
    def timestamp(self) -> ISO8601:
        return ISO8601(self.dictionary.get("timestamp"))
    @property
    def parent_process_id(self) -> Uuid:
        return Uuid(self.dictionary.get("parentProcessId"))
