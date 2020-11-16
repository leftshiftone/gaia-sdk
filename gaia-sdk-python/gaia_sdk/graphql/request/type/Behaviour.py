

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class Behaviour(list):
    """
    Represents behaviour information
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
