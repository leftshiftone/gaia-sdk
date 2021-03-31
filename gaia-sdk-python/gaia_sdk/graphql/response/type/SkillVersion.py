

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

class SkillVersion:
    """
    A skill version is a built version of a skill created by a SkillBuildJob
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
    def skill_ref(self) -> String:
        return String(self.dictionary.get("skillRef"))
    @property
    def version(self) -> String:
        return String(self.dictionary.get("version"))
    @property
    def created(self) -> ISO8601:
        return ISO8601(self.dictionary.get("created"))
