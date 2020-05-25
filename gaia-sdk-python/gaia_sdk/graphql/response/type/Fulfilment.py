

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
class Fulfilment:
    """
    this type represents the fulfilment information
    """
    dictionary: dict
    """
    The fulfilment id
    """
    @property
    def identity_id(self) -> Uuid:
        return Uuid(self.dictionary.get("identityId"))
    """
    The fulfilment reference id
    """
    @property
    def reference(self) -> Uuid:
        return Uuid(self.dictionary.get("reference"))
    """
    The name of the fulfilment
    """
    @property
    def qualifier(self) -> String:
        return String(self.dictionary.get("qualifier"))
    """
    Detailed description about the fulfilment
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
    The list of labels of the fulfilment
    """
    @property
    def label_list(self) -> List[String]:
        return list(map(lambda x: String(x), self.dictionary.get("labelList")))
    """
    The version of the fulfilment
    """
    @property
    def version(self) -> String:
        return String(self.dictionary.get("version"))
