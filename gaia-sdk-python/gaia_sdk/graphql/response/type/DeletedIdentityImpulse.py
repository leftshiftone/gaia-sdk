
from gaia_sdk.graphql.response.type.KeyOne import KeyOne

from dataclasses import dataclass
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

@dataclass
class DeletedIdentityImpulse:
    """
    Impulse which indicates the result of a delete identity impulse
    """
    dictionary: dict
    @property
    def id(self) -> Uuid:
        return Uuid(self.dictionary.get("id"))
    @property
    def data(self) -> KeyOne:
        return KeyOne(self.dictionary.get("data"))
