

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

class SkillProvisionBuildJob:
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
    Id of the tenant
    """
    @property
    def tenant_id(self) -> Uuid:
        return Uuid(self.dictionary.get("tenantId"))
    """
    Reference to the skill provision for that build job
    """
    @property
    def provision_ref(self) -> String:
        return String(self.dictionary.get("provisionRef"))
    """
    Reference to the skill
    """
    @property
    def skill_ref(self) -> String:
        return String(self.dictionary.get("skillRef"))
    """
    The name of the build job
    """
    @property
    def name(self) -> String:
        return String(self.dictionary.get("name"))
    """
    The current status of the build job
    """
    @property
    def status(self) -> Struct:
        return Struct(self.dictionary.get("status"))
