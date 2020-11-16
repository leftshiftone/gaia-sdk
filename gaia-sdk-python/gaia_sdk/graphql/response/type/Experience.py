
from gaia_sdk.graphql.response.type.BehaviourExecution import BehaviourExecution
from gaia_sdk.graphql.response.type.BehaviourNodeExecution import BehaviourNodeExecution

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

class Experience:
    """
    Container type for runtime information
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
    def behaviour_executions(self) -> List[BehaviourExecution]:
        return list(map(lambda x: BehaviourExecution(x), self.dictionary.get("behaviourExecutions")))
    @property
    def behaviour_node_executions(self) -> List[BehaviourNodeExecution]:
        return list(map(lambda x: BehaviourNodeExecution(x), self.dictionary.get("behaviourNodeExecutions")))
