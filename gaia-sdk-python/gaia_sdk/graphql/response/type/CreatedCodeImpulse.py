
from gaia_sdk.graphql.response.type.Code import Code

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class CreatedCodeImpulse:
    """
    Impulse which indicates the result of a create code impulse
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
    the code instance
    """
    @property
    def data(self) -> Code:
        return Code(self.dictionary.get("data"))
