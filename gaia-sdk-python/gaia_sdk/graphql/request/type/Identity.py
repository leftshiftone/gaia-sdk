

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class Identity(list):
    """
    Represents identity information
    """

    """
    The identity id
    """
    def identity_id(self):
        self.append(lambda x: "identityId")

    """
    The tenant id
    """
    def tenant_id(self):
        self.append(lambda x: "tenantId")

    """
    The name of the identity
    """
    def qualifier(self):
        self.append(lambda x: "qualifier")

    """
    The available languages of the identity
    """
    def available_languages(self):
        self.append(lambda x: "availableLanguages")

    """
    The order of languages that will be used in case of missing translations
    """
    def language_order(self):
        self.append(lambda x: "languageOrder")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
