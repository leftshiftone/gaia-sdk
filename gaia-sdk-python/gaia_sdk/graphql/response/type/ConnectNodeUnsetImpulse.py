
from typing import List

from gaia_sdk.graphql.response.type.EdgeKeyOne import EdgeKeyOne

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class ConnectNodeUnsetImpulse:
    """
    Impulse which indicates the result unsetting a node connection
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
    edges removed by this request
    """
    @property
    def removed_edges(self) -> List[EdgeKeyOne]:
        return list(map(lambda x: EdgeKeyOne(x), self.dictionary.get("removedEdges")))
