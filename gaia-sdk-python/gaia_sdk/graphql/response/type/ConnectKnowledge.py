
from gaia_sdk.graphql.response.type.ConnectNodeKnowledge import ConnectNodeKnowledge

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class ConnectKnowledge:
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
    def node(self) -> ConnectNodeKnowledge:
        return ConnectNodeKnowledge(self.dictionary.get("node"))
