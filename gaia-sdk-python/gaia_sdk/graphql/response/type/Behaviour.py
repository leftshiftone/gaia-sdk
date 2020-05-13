

from dataclasses import dataclass
from typing import List
Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
from gaia_sdk.graphql.request.enumeration.RuntimeState import RuntimeState
from gaia_sdk.graphql.request.enumeration.SkillState import SkillState

@dataclass
class Behaviour:
    """
    this type represents the behaviour information
    """
    dictionary: dict
    """
    The behaviour id
    """
    @property
    def identity_id(self) -> Uuid:
        return Uuid(self.dictionary.get("identityId"))
    """
    The behaviour reference id
    """
    @property
    def reference(self) -> Uuid:
        return Uuid(self.dictionary.get("reference"))
    """
    The name of the behaviour
    """
    @property
    def qualifier(self) -> String:
        return String(self.dictionary.get("qualifier"))
    """
    Detailed description about the behaviour
    """
    @property
    def appendent(self) -> String:
        return String(self.dictionary.get("appendent"))
    """
    The list of labels of the behaviour
    """
    @property
    def label_list(self) -> List[String]:
        return list(map(lambda x: String(x), self.dictionary.get("labelList")))
    """
    The behaviour xml
    """
    @property
    def behaviour(self) -> String:
        return String(self.dictionary.get("behaviour"))
