
from gaia_sdk.graphql.response.type.Fulfilment import Fulfilment

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class CreatedFulfilmentImpulse:
    """
    Impulse which indicates the result of a create fulfilment impulse
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
    the fulfilment instance
    """
    @property
    def data(self) -> Fulfilment:
        return Fulfilment(self.dictionary.get("data"))
