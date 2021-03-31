
from gaia_sdk.graphql.response.type.EdgeKeyOne import EdgeKeyOne

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

class ConnectNodeRemovedImpulse:
    """
    Impulse which indicates the result removing a node connection
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
