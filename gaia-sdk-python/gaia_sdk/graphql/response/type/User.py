

from typing import List
Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType

class User:
    """
    Represents User information
    """
    dictionary: dict

    def __init__(self, dictionary: dict):
        self.dictionary = dictionary

    def __eq__(self, other):
        if type(other) is type(self):
            return self.dictionary == other.dictionary
        return False

    def __repr__(self):
        return {'dictionary': self.dictionary}

    """
    Id of the user
    """
    @property
    def user_id(self) -> Uuid:
        return Uuid(self.dictionary.get("userId"))
    """
    The username of the user
    """
    @property
    def username(self) -> String:
        return String(self.dictionary.get("username"))
    """
    The email of the user
    """
    @property
    def email(self) -> String:
        return String(self.dictionary.get("email"))
    """
    The first name of the user
    """
    @property
    def first_name(self) -> String:
        return String(self.dictionary.get("firstName"))
    """
    The last name of the user
    """
    @property
    def last_name(self) -> String:
        return String(self.dictionary.get("lastName"))
