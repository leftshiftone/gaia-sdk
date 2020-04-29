

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class Prompt(list):
    """
    this type represents the prompt information
    """

    """
    The prompt id
    """
    def identity_id(self):
        self.append(lambda x: "identityId")

    """
    The prompt reference id
    """
    def reference(self):
        self.append(lambda x: "reference")

    """
    The name of the prompt
    """
    def qualifier(self):
        self.append(lambda x: "qualifier")

    """
    Detailed description about the prompt
    """
    def appendent(self):
        self.append(lambda x: "appendent")

    """
    The utterance dictionary. The key is a language key and the value is a list of utterances
    """
    def utterance(self):
        self.append(lambda x: "utterance")

    """
    The list of labels of the prompt
    """
    def labellist(self):
        self.append(lambda x: "labellist")

    """
    The version of the prompt
    """
    def version(self):
        self.append(lambda x: "version")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
