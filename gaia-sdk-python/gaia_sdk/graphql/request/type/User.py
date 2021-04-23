

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class User(list):
    """
    Represents User information
    """

    """
    Id of the user
    """
    def user_id(self):
        self.append(lambda x: "userId")

    """
    The username of the user
    """
    def username(self):
        self.append(lambda x: "username")

    """
    The email of the user
    """
    def email(self):
        self.append(lambda x: "email")

    """
    The first name of the user
    """
    def first_name(self):
        self.append(lambda x: "firstName")

    """
    The last name of the user
    """
    def last_name(self):
        self.append(lambda x: "lastName")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
