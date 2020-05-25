

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class Behaviour(list):
    """
    this type represents the behaviour information
    """

    """
    The behaviour id
    """
    def identity_id(self):
        self.append(lambda x: "identityId")

    """
    The behaviour reference id
    """
    def reference(self):
        self.append(lambda x: "reference")

    """
    The name of the behaviour
    """
    def qualifier(self):
        self.append(lambda x: "qualifier")

    """
    Detailed description about the behaviour
    """
    def appendent(self):
        self.append(lambda x: "appendent")

    """
    The list of labels of the behaviour
    """
    def label_list(self):
        self.append(lambda x: "labelList")

    """
    The behaviour xml
    """
    def behaviour(self):
        self.append(lambda x: "behaviour")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
