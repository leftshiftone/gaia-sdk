

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
class Prompt:
    """
    this type represents the prompt information
    """
    dictionary: dict
    """
    The prompt id
    """
    @property
    def identity_id(self) -> Uuid:
        return Uuid(self.dictionary.get("identityId"))
    """
    The prompt reference id
    """
    @property
    def reference(self) -> Uuid:
        return Uuid(self.dictionary.get("reference"))
    """
    The name of the prompt
    """
    @property
    def qualifier(self) -> String:
        return String(self.dictionary.get("qualifier"))
    """
    Detailed description about the prompt
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
    The list of labels of the prompt
    """
    @property
    def label_list(self) -> List[String]:
        return list(map(lambda x: String(x), self.dictionary.get("labelList")))
    """
    The version of the prompt
    """
    @property
    def version(self) -> String:
        return String(self.dictionary.get("version"))
