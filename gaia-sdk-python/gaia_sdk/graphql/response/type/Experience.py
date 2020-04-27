
from gaia_sdk.graphql.response.type.BehaviourExecution import BehaviourExecution
from gaia_sdk.graphql.response.type.BehaviourNodeExecution import BehaviourNodeExecution

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
class Experience:
    """
    Container type for runtime information
    """
    dictionary: dict
    @property
    def behaviour_executions(self) -> BehaviourExecution:
        return BehaviourExecution(self.dictionary.get("behaviourExecutions"))
    @property
    def behaviour_node_executions(self) -> BehaviourNodeExecution:
        return BehaviourNodeExecution(self.dictionary.get("behaviourNodeExecutions"))
