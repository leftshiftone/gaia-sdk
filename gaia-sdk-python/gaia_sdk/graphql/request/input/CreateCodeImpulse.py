

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class CreateCodeImpulse():
    """
    The specification to create a code instance
    """
    identityId: str
    qualifier: str
    appendent: str
    code: dict
    type: str
    labelList: List[str]

    def __init__(self, identityId: str, qualifier: str, appendent: str, code: dict, type: str, labelList: List[str]):
        self.identityId = identityId
        self.qualifier = qualifier
        self.appendent = appendent
        self.code = code
        self.type = type
        self.labelList = labelList

    def __eq__(self, other):
        if type(other) is type(self):
            return self.identityId == other.identityId and self.qualifier == other.qualifier and self.appendent == other.appendent and self.code == other.code and self.type == other.type and self.labelList == other.labelList
        return False

    def __repr__(self):
        return {'identityId': self.identityId, 'qualifier': self.qualifier, 'appendent': self.appendent, 'code': self.code, 'type': self.type, 'labelList': self.labelList}
