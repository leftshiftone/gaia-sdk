

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField


class UpdateApiKeyImpulse():
    """
    The specification to update an apiKey instance
    """
    apiKeyId: str
    secret: str
    name: str
    enabled: bool

    def __init__(self, apiKeyId: str, secret: str, name: str, enabled: bool):
        self.apiKeyId = apiKeyId
        self.secret = secret
        self.name = name
        self.enabled = enabled

    def __eq__(self, other):
        if type(other) is type(self):
            return self.apiKeyId == other.apiKeyId and self.secret == other.secret and self.name == other.name and self.enabled == other.enabled
        return False

    def __repr__(self):
        return {'apiKeyId': self.apiKeyId, 'secret': self.secret, 'name': self.name, 'enabled': self.enabled}
