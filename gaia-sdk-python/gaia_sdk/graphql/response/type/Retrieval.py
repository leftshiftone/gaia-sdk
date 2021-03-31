
from gaia_sdk.graphql.response.type.Experience import Experience
from gaia_sdk.graphql.response.type.Knowledge import Knowledge

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class Retrieval:
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
    Container element which collects all information static data
    """
    @property
    def knowledge(self) -> Knowledge:
        return Knowledge(self.dictionary.get("knowledge"))
    """
    Container element which collects all information about runtime data
    """
    @property
    def experience(self) -> Experience:
        return Experience(self.dictionary.get("experience"))
