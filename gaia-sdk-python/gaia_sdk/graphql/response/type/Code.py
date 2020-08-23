

from dataclasses import dataclass
from typing import List
Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
from gaia_sdk.graphql.request.enumeration.RuntimeState import RuntimeState
from gaia_sdk.graphql.request.enumeration.SkillState import SkillState
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField

@dataclass
class Code:
    """
    Represents code information
    """
    dictionary: dict
    """
    The code id
    """
    @property
    def identity_id(self) -> Uuid:
        return Uuid(self.dictionary.get("identityId"))
    """
    The code reference id
    """
    @property
    def reference(self) -> Uuid:
        return Uuid(self.dictionary.get("reference"))
    """
    The name of the code
    """
    @property
    def qualifier(self) -> String:
        return String(self.dictionary.get("qualifier"))
    """
    Detailed description about the code
    """
    @property
    def appendent(self) -> String:
        return String(self.dictionary.get("appendent"))
    """
    The code dictionary. The key is a file name and the value is the code
    """
    @property
    def code(self) -> Struct:
        return Struct(self.dictionary.get("code"))
    """
    The list of labels of the code
    """
    @property
    def label_list(self) -> List[String]:
        return list(map(lambda x: String(x), self.dictionary.get("labelList")))
    """
    The type of the code
    """
    @property
    def type(self) -> String:
        return String(self.dictionary.get("type"))
