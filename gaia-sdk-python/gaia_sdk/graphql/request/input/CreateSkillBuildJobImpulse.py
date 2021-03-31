

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class CreateSkillBuildJobImpulse():
    tenantId: str
    skillRef: str
    tag: str

    def __init__(self, tenantId: str, skillRef: str, tag: str):
        self.tenantId = tenantId
        self.skillRef = skillRef
        self.tag = tag

    def __eq__(self, other):
        if type(other) is type(self):
            return self.tenantId == other.tenantId and self.skillRef == other.skillRef and self.tag == other.tag
        return False

    def __repr__(self):
        return {'tenantId': self.tenantId, 'skillRef': self.skillRef, 'tag': self.tag}
