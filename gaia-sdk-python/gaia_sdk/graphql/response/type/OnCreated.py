Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class OnCreated:
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
    def identity_id(self) -> Uuid:
        return Uuid(self.dictionary.get("identityId"))
    @property
    def reference(self) -> Uuid:
        return Uuid(self.dictionary.get("reference"))
    @property
    def type(self) -> String:
        return String(self.dictionary.get("type"))
