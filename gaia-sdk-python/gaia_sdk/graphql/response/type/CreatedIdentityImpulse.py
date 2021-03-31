
from gaia_sdk.graphql.response.type.Identity import Identity

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class CreatedIdentityImpulse:
    """
    Impulse which indicates the result of a create identity impulse
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
    the identity instance
    """
    @property
    def data(self) -> Identity:
        return Identity(self.dictionary.get("data"))
