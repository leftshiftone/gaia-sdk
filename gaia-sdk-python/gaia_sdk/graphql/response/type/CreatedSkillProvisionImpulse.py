
from gaia_sdk.graphql.response.type.SkillProvision import SkillProvision

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

class CreatedSkillProvisionImpulse:
    """
    Impulse which indicates the result of a create SkillProvision impulse
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

    @property
    def id(self) -> Uuid:
        return Uuid(self.dictionary.get("id"))
    """
    the SkillProvision instance
    """
    @property
    def data(self) -> SkillProvision:
        return SkillProvision(self.dictionary.get("data"))
