
from gaia_sdk.graphql.response.type.SkillVersion import SkillVersion

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

class Skill:
    """
    Represents Skill information
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
    Id of the tenant
    """
    @property
    def tenant_id(self) -> Uuid:
        return Uuid(self.dictionary.get("tenantId"))
    """
    Skill reference
    """
    @property
    def reference(self) -> Uuid:
        return Uuid(self.dictionary.get("reference"))
    """
    The name of the skill
    """
    @property
    def qualifier(self) -> String:
        return String(self.dictionary.get("qualifier"))
    """
    Detailed description about the skill
    """
    @property
    def appendent(self) -> String:
        return String(self.dictionary.get("appendent"))
    """
    The list of labels of the skill
    """
    @property
    def label_list(self) -> List[String]:
        return list(map(lambda x: String(x), self.dictionary.get("labelList")))
    """
    The uri of the repository where the skill is
    """
    @property
    def repository_uri(self) -> String:
        return String(self.dictionary.get("repositoryUri"))
    """
    The list of available and build skill versions
    """
    @property
    def versions(self) -> List[SkillVersion]:
        return list(map(lambda x: SkillVersion(x), self.dictionary.get("versions")))
    """
    A list of all available version tags
    """
    @property
    def tags(self) -> List[String]:
        return list(map(lambda x: String(x), self.dictionary.get("tags")))
