

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class Intent(list):
    """
    this type represents the intent information
    """

    """
    The identity id
    """
    def identity_id(self):
        self.append(lambda x: "identityId")

    """
    The intent reference id
    """
    def reference(self):
        self.append(lambda x: "reference")

    """
    The name of the intent
    """
    def qualifier(self):
        self.append(lambda x: "qualifier")

    """
    Detailed description about the intent
    """
    def appendent(self):
        self.append(lambda x: "appendent")

    """
    The utterance dictionary. The key is a language key and the value is a list of utterances
    """
    def utterance(self):
        self.append(lambda x: "utterance")

    """
    The list of labels of the intent
    """
    def labellist(self):
        self.append(lambda x: "labellist")

    """
    The version of the intent
    """
    def version(self):
        self.append(lambda x: "version")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
