

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class ApiKey(list):
    """
    Represents api key information
    """

    """
    The api key id
    """
    def api_key_id(self):
        self.append(lambda x: "apiKeyId")

    """
    The name of the api key
    """
    def name(self):
        self.append(lambda x: "name")

    """
    The description of the api key
    """
    def description(self):
        self.append(lambda x: "description")

    """
    The flag to enable the api key
    """
    def enabled(self):
        self.append(lambda x: "enabled")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
