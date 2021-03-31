Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class EdgeKeyOne:
    """
    This entity represents the output of an edge delete impulse
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
    def source(self) -> Uuid:
        return Uuid(self.dictionary.get("source"))
    @property
    def edge_id(self) -> Uuid:
        return Uuid(self.dictionary.get("edgeId"))
