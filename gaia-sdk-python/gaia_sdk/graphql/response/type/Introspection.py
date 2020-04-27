
from gaia_sdk.graphql.response.type.SkillIntrospection import SkillIntrospection

from dataclasses import dataclass
Uuid = str
String = str
Long = str
Timestamp = str
Struct = dict
Float = float
from gaia_sdk.graphql.request.enumeration.RuntimeState import RuntimeState
from gaia_sdk.graphql.request.enumeration.SkillState import SkillState

@dataclass
class Introspection:
    dictionary: dict
    @property
    def cpu(self) -> String:
        return String(self.dictionary.get("cpu"))
    @property
    def gpu(self) -> String:
        return String(self.dictionary.get("gpu"))
    @property
    def memory(self) -> String:
        return String(self.dictionary.get("memory"))
    @property
    def state(self) -> RuntimeState:
        return RuntimeState(self.dictionary.get("state"))
    @property
    def started(self) -> Timestamp:
        return Timestamp(self.dictionary.get("started"))
    @property
    def skills(self) -> SkillIntrospection:
        return SkillIntrospection(self.dictionary.get("skills"))
