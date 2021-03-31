
from gaia_sdk.graphql.response.type.OnConversed import OnConversed

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class Interaction:
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
    def on_conversed(self) -> OnConversed:
        return OnConversed(self.dictionary.get("onConversed"))
