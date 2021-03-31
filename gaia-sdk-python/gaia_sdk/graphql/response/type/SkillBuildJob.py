
from gaia_sdk.graphql.response.type.SkillStatus import SkillStatus

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

class SkillBuildJob:
    """
    A skill build job creates definitive versions for Skill
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
    The reference of this build job
    """
    @property
    def reference(self) -> Uuid:
        return Uuid(self.dictionary.get("reference"))
    """
    Id of the tenant
    """
    @property
    def tenant_id(self) -> Uuid:
        return Uuid(self.dictionary.get("tenantId"))
    """
    reference to the skill being built
    """
    @property
    def skill_ref(self) -> String:
        return String(self.dictionary.get("skillRef"))
    """
    the associated version tag
    """
    @property
    def tag(self) -> String:
        return String(self.dictionary.get("tag"))
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
    def status(self) -> SkillStatus:
        return SkillStatus(self.dictionary.get("status"))
    """
    created at
    """
    @property
    def created(self) -> ISO8601:
        return ISO8601(self.dictionary.get("created"))
