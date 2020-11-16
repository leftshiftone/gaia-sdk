

from typing import List
Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool
from gaia_sdk.graphql.request.enumeration.RuntimeState import RuntimeState
from gaia_sdk.graphql.request.enumeration.SkillState import SkillState
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType

class Role:
    """
    Represents Role information
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
    Id of the role
    """
    @property
    def role_id(self) -> Uuid:
        return Uuid(self.dictionary.get("roleId"))
    """
    The name of the role
    """
    @property
    def name(self) -> String:
        return String(self.dictionary.get("name"))
    """
    The permissions of the role
    """
    @property
    def permissions(self) -> List[String]:
        return list(map(lambda x: String(x), self.dictionary.get("permissions")))
