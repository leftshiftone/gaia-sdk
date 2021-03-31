
from gaia_sdk.graphql.response.type.Edge import Edge

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class CreatedEdgeImpulse:
    """
    Impulse which indicates the result of a create edge impulse
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
    the edge instance
    """
    @property
    def data(self) -> Edge:
        return Edge(self.dictionary.get("data"))
