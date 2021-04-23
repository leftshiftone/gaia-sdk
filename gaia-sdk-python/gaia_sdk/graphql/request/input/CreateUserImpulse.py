

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class CreateUserImpulse():
    """
    The specification to create an user instance
    """
    username: str
    email: str
    firstName: str
    lastName: str
    password: str

    def __init__(self, username: str, email: str, firstName: str, lastName: str, password: str):
        self.username = username
        self.email = email
        self.firstName = firstName
        self.lastName = lastName
        self.password = password

    def __eq__(self, other):
        if type(other) is type(self):
            return self.username == other.username and self.email == other.email and self.firstName == other.firstName and self.lastName == other.lastName and self.password == other.password
        return False

    def __repr__(self):
        return {'username': self.username, 'email': self.email, 'firstName': self.firstName, 'lastName': self.lastName, 'password': self.password}
