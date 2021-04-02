
from gaia_sdk.graphql.response.type.BehaviourExecution import BehaviourExecution
from gaia_sdk.graphql.response.type.BehaviourMetrics import BehaviourMetrics
from gaia_sdk.graphql.response.type.IdentityMetrics import IdentityMetrics
from gaia_sdk.graphql.response.type.BehaviourNodeExecution import BehaviourNodeExecution
from gaia_sdk.graphql.response.type.BehaviourExecutionDetail import BehaviourExecutionDetail

from typing import List
Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool
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
    def behaviour_execution(self) -> BehaviourExecutionDetail:
        return BehaviourExecutionDetail(self.dictionary.get("behaviourExecution"))
    @property
    def behaviour_executions(self) -> List[BehaviourExecution]:
        return list(map(lambda x: BehaviourExecution(x), self.dictionary.get("behaviourExecutions")))
    @property
    def behaviour_node_executions(self) -> List[BehaviourNodeExecution]:
        return list(map(lambda x: BehaviourNodeExecution(x), self.dictionary.get("behaviourNodeExecutions")))
    @property
    def identity_metrics(self) -> IdentityMetrics:
        return IdentityMetrics(self.dictionary.get("identityMetrics"))
    @property
    def behaviour_metrics(self) -> BehaviourMetrics:
        return BehaviourMetrics(self.dictionary.get("behaviourMetrics"))
