

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class DeleteApiKeyImpulse():
    """
    The specification to delete an api key instance
    """
    apiKeyId: str

    def __init__(self, apiKeyId: str):
        self.apiKeyId = apiKeyId

    def __eq__(self, other):
        if type(other) is type(self):
            return self.apiKeyId == other.apiKeyId
        return False

    def __repr__(self):
        return {'apiKeyId': self.apiKeyId}
