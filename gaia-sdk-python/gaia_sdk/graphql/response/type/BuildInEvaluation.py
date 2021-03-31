Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class BuildInEvaluation:
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
    def behaviour(self) -> String:
        return String(self.dictionary.get("behaviour"))
    @property
    def gaiaquery(self) -> String:
        return String(self.dictionary.get("gaiaquery"))
