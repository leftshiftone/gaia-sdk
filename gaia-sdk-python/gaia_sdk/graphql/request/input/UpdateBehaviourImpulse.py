

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class UpdateBehaviourImpulse():
    """
    The specification to update a behaviour instance
    """
    identityId: str
    reference: str
    qualifier: str
    appendent: str
    behaviour: str
    labelList: List[str]

    def __init__(self, identityId: str, reference: str, qualifier: str, appendent: str, behaviour: str, labelList: List[str]):
        self.identityId = identityId
        self.reference = reference
        self.qualifier = qualifier
        self.appendent = appendent
        self.behaviour = behaviour
        self.labelList = labelList

    def __eq__(self, other):
        if type(other) is type(self):
            return self.identityId == other.identityId and self.reference == other.reference and self.qualifier == other.qualifier and self.appendent == other.appendent and self.behaviour == other.behaviour and self.labelList == other.labelList
        return False

    def __repr__(self):
        return {'identityId': self.identityId, 'reference': self.reference, 'qualifier': self.qualifier, 'appendent': self.appendent, 'behaviour': self.behaviour, 'labelList': self.labelList}
