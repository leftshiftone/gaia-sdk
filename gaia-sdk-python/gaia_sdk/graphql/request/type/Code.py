

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class Code(list):
    """
    Represents code information
    """

    """
    The code id
    """
    def identity_id(self):
        self.append(lambda x: "identityId")

    """
    The code reference id
    """
    def reference(self):
        self.append(lambda x: "reference")

    """
    The name of the code
    """
    def qualifier(self):
        self.append(lambda x: "qualifier")

    """
    Detailed description about the code
    """
    def appendent(self):
        self.append(lambda x: "appendent")

    """
    The code dictionary. The key is a file name and the value is the code
    """
    def code(self):
        self.append(lambda x: "code")

    """
    The list of labels of the code
    """
    def label_list(self):
        self.append(lambda x: "labelList")

    """
    The type of the code
    """
    def type(self):
        self.append(lambda x: "type")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
