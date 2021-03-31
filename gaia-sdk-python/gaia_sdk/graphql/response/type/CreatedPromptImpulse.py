
from gaia_sdk.graphql.response.type.Prompt import Prompt

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class CreatedPromptImpulse:
    """
    Impulse which indicates the result of a create prompt impulse
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
    the prompt instance
    """
    @property
    def data(self) -> Prompt:
        return Prompt(self.dictionary.get("data"))
