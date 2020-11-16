
from gaia_sdk.graphql.response.type.ConnectNodeRemovedImpulse import ConnectNodeRemovedImpulse
from gaia_sdk.graphql.response.type.ConnectNodeUnsetImpulse import ConnectNodeUnsetImpulse
from gaia_sdk.graphql.response.type.ConnectNodeAppendedImpulse import ConnectNodeAppendedImpulse
from gaia_sdk.graphql.response.type.ConnectNodeSetImpulse import ConnectNodeSetImpulse
from gaia_sdk.graphql.request.input.ConnectSetNodeImpulse import ConnectSetNodeImpulse
from gaia_sdk.graphql.request.input.ConnectAppendNodeImpulse import ConnectAppendNodeImpulse
from gaia_sdk.graphql.request.input.ConnectUnsetNodeImpulse import ConnectUnsetNodeImpulse
from gaia_sdk.graphql.request.input.ConnectRemoveNodeImpulse import ConnectRemoveNodeImpulse

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

class ConnectNodeKnowledge:
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
    def append(self) -> ConnectNodeAppendedImpulse:
        return ConnectNodeAppendedImpulse(self.dictionary.get("append"))
    @property
    def remove(self) -> ConnectNodeRemovedImpulse:
        return ConnectNodeRemovedImpulse(self.dictionary.get("remove"))
    @property
    def set(self) -> ConnectNodeSetImpulse:
        return ConnectNodeSetImpulse(self.dictionary.get("set"))
    @property
    def unset(self) -> ConnectNodeUnsetImpulse:
        return ConnectNodeUnsetImpulse(self.dictionary.get("unset"))
