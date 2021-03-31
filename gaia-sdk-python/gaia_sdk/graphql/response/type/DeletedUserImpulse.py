
from gaia_sdk.graphql.response.type.UserKeyOne import UserKeyOne

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class DeletedUserImpulse:
    """
    Impulse which indicates the result of a delete user impulse
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
    @property
    def data(self) -> UserKeyOne:
        return UserKeyOne(self.dictionary.get("data"))
