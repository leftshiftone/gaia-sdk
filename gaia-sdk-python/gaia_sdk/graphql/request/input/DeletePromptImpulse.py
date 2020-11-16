

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class DeletePromptImpulse():
    """
    The specification to delete a prompt instance
    """
    identityId: str
    reference: str

    def __init__(self, identityId: str, reference: str):
        self.identityId = identityId
        self.reference = reference

    def __eq__(self, other):
        if type(other) is type(self):
            return self.identityId == other.identityId and self.reference == other.reference
        return False

    def __repr__(self):
        return {'identityId': self.identityId, 'reference': self.reference}
