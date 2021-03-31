

from typing import List
Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class Tenant:
    """
    Represents tenant information
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
    The tenant id
    """
    @property
    def tenant_id(self) -> Uuid:
        return Uuid(self.dictionary.get("tenantId"))
    """
    The name of the tenant
    """
    @property
    def qualifier(self) -> String:
        return String(self.dictionary.get("qualifier"))
    """
    The list of implicit identities
    """
    @property
    def implicit_identities(self) -> List[String]:
        return list(map(lambda x: String(x), self.dictionary.get("implicitIdentities")))
    """
    The list of explicit identities
    """
    @property
    def explicit_identities(self) -> List[String]:
        return list(map(lambda x: String(x), self.dictionary.get("explicitIdentities")))
