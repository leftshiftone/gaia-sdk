

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class CreateSkillImpulse():
    """
    The specification to create a skill instance
    """
    tenantId: str
    qualifier: str
    appendent: str
    labelList: List[str]
    repositoryUri: str

    def __init__(self, tenantId: str, qualifier: str, appendent: str, labelList: List[str], repositoryUri: str):
        self.tenantId = tenantId
        self.qualifier = qualifier
        self.appendent = appendent
        self.labelList = labelList
        self.repositoryUri = repositoryUri

    def __eq__(self, other):
        if type(other) is type(self):
            return self.tenantId == other.tenantId and self.qualifier == other.qualifier and self.appendent == other.appendent and self.labelList == other.labelList and self.repositoryUri == other.repositoryUri
        return False

    def __repr__(self):
        return {'tenantId': self.tenantId, 'qualifier': self.qualifier, 'appendent': self.appendent, 'labelList': self.labelList, 'repositoryUri': self.repositoryUri}
