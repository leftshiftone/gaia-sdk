

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class CreateApiKeyImpulse():
    """
    The specification to create an api key instance
    """
    name: str
    description: str
    enabled: bool

    def __init__(self, name: str, description: str, enabled: bool):
        self.name = name
        self.description = description
        self.enabled = enabled

    def __eq__(self, other):
        if type(other) is type(self):
            return self.name == other.name and self.description == other.description and self.enabled == other.enabled
        return False

    def __repr__(self):
        return {'name': self.name, 'description': self.description, 'enabled': self.enabled}
