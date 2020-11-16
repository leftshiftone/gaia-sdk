
from gaia_sdk.graphql.response.type.EdgeKeyOne import EdgeKeyOne
from gaia_sdk.graphql.response.type.Edge import Edge

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
