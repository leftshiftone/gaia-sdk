

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class Statement(list):
    """
    this type represents the statement information
    """

    """
    The statement id
    """
    def identity_id(self):
        self.append(lambda x: "identityId")

    """
    The statement reference id
    """
    def reference(self):
        self.append(lambda x: "reference")

    """
    The name of the statement
    """
    def qualifier(self):
        self.append(lambda x: "qualifier")

    """
    Detailed description about the statement
    """
    def appendent(self):
        self.append(lambda x: "appendent")

    """
    The utterance dictionary. The key is a language key and the value is a list of utterances
    """
    def utterance(self):
        self.append(lambda x: "utterance")

    """
    The list of labels of the statement
    """
    def label_list(self):
        self.append(lambda x: "labelList")

    """
    The version of the statement
    """
    def version(self):
        self.append(lambda x: "version")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
