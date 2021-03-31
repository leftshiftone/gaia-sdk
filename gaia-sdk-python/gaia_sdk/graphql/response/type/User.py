

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
    """
    Is the User using 2FA
    """
    @property
    def using2_f_a(self) -> Boolean:
        return Boolean(self.dictionary.get("using2FA"))
    """
    The tenants of the user
    """
    @property
    def tenants(self) -> List[String]:
        return list(map(lambda x: String(x), self.dictionary.get("tenants")))
    """
    The roles of the user
    """
    @property
    def roles(self) -> List[String]:
        return list(map(lambda x: String(x), self.dictionary.get("roles")))
    """
    The groups of the user
    """
    @property
    def groups(self) -> List[String]:
        return list(map(lambda x: String(x), self.dictionary.get("groups")))
    """
    The permissions of the user
    """
    @property
    def permissions(self) -> List[String]:
        return list(map(lambda x: String(x), self.dictionary.get("permissions")))
