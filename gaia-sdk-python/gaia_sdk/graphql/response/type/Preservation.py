
from gaia_sdk.graphql.response.type.DeleteKnowledge import DeleteKnowledge
from gaia_sdk.graphql.response.type.UpdateKnowledge import UpdateKnowledge
from gaia_sdk.graphql.response.type.CreateKnowledge import CreateKnowledge
from gaia_sdk.graphql.response.type.ConnectKnowledge import ConnectKnowledge

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

class Preservation:
    """
    This type contains all preservation sensor impulses which are used to support
    read/write/delete memory functions in gaia.
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
    def create(self) -> CreateKnowledge:
        return CreateKnowledge(self.dictionary.get("create"))
    @property
    def update(self) -> UpdateKnowledge:
        return UpdateKnowledge(self.dictionary.get("update"))
    @property
    def delete(self) -> DeleteKnowledge:
        return DeleteKnowledge(self.dictionary.get("delete"))
    @property
    def connect(self) -> ConnectKnowledge:
        return ConnectKnowledge(self.dictionary.get("connect"))
