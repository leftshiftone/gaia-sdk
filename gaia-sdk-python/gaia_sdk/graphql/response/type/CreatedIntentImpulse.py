
from gaia_sdk.graphql.response.type.Intent import Intent

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class CreatedIntentImpulse:
    """
    Impulse which indicates the result of a create intent impulse
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
    the intent instance
    """
    @property
    def data(self) -> Intent:
        return Intent(self.dictionary.get("data"))
