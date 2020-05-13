

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
class Statement:
    """
    this type represents the statement information
    """
    dictionary: dict
    """
    The statement id
    """
    @property
    def identity_id(self) -> Uuid:
        return Uuid(self.dictionary.get("identityId"))
    """
    The statement reference id
    """
    @property
    def reference(self) -> Uuid:
        return Uuid(self.dictionary.get("reference"))
    """
    The name of the statement
    """
    @property
    def qualifier(self) -> String:
        return String(self.dictionary.get("qualifier"))
    """
    Detailed description about the statement
    """
    @property
    def appendent(self) -> String:
        return String(self.dictionary.get("appendent"))
    """
    The utterance dictionary. The key is a language key and the value is a list of utterances
    """
    @property
    def utterance(self) -> Struct:
        return Struct(self.dictionary.get("utterance"))
    """
    The list of labels of the statement
    """
    @property
    def label_list(self) -> List[String]:
        return list(map(lambda x: String(x), self.dictionary.get("labelList")))
    """
    The version of the statement
    """
    @property
    def version(self) -> String:
        return String(self.dictionary.get("version"))
