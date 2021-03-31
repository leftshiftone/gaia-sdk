Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class ApiKey:
    """
    Represents api key information
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

    """
    The api key id
    """
    @property
    def api_key_id(self) -> Uuid:
        return Uuid(self.dictionary.get("apiKeyId"))
    """
    The name of the api key
    """
    @property
    def name(self) -> String:
        return String(self.dictionary.get("name"))
    """
    The description of the api key
    """
    @property
    def description(self) -> String:
        return String(self.dictionary.get("description"))
    """
    The flag to enable the api key
    """
    @property
    def enabled(self) -> Boolean:
        return Boolean(self.dictionary.get("enabled"))
