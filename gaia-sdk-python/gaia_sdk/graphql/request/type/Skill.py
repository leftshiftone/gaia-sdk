

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class Skill(list):
    """
    Represents Skill information
    """

    """
    Id of the tenant
    """
    def tenant_id(self):
        self.append(lambda x: "tenantId")

    """
    Skill reference
    """
    def reference(self):
        self.append(lambda x: "reference")

    """
    The name of the skill
    """
    def qualifier(self):
        self.append(lambda x: "qualifier")

    """
    Detailed description about the skill
    """
    def appendent(self):
        self.append(lambda x: "appendent")

    """
    The list of labels of the skill
    """
    def label_list(self):
        self.append(lambda x: "labelList")

    """
    The uri of the repository where the skill is
    """
    def repository_uri(self):
        self.append(lambda x: "repositoryUri")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
