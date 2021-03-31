
from typing import List

from gaia_sdk.graphql.response.type.Edge import Edge
from gaia_sdk.graphql.response.type.EdgeKeyOne import EdgeKeyOne

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class ConnectNodeSetImpulse:
    """
    Impulse which indicates the result setting a node connection
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
    edges removed before setting the new edge
    """
    @property
    def removed_edges(self) -> List[EdgeKeyOne]:
        return list(map(lambda x: EdgeKeyOne(x), self.dictionary.get("removedEdges")))
    """
    edge created by this request
    """
    @property
    def new_edge(self) -> Edge:
        return Edge(self.dictionary.get("newEdge"))
