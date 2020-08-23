
from gaia_sdk.graphql.response.type.Behaviour import Behaviour

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
class UpdatedBehaviourImpulse:
    """
    Impulse which indicates the result of a update behaviour impulse
    """
    dictionary: dict
    @property
    def id(self) -> Uuid:
        return Uuid(self.dictionary.get("id"))
    """
    the behaviour instance
    """
    @property
    def data(self) -> Behaviour:
        return Behaviour(self.dictionary.get("data"))
