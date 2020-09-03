

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField


class DeleteSkillImpulse():
    """
    The specification to delete a Skill instance
    """
    tenantId: str
    reference: str

    def __init__(self, tenantId: str, reference: str):
        self.tenantId = tenantId
        self.reference = reference

    def __eq__(self, other):
        return self.tenantId == other.tenantId and self.reference == other.reference

    def __repr__(self):
        return {'tenantId': self.tenantId, 'reference': self.reference}
