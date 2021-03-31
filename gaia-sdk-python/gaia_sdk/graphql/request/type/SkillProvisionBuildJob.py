

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class SkillProvisionBuildJob(list):

    """
    Id of the tenant
    """
    def tenant_id(self):
        self.append(lambda x: "tenantId")

    """
    Reference to the skill provision for that build job
    """
    def provision_ref(self):
        self.append(lambda x: "provisionRef")

    """
    Reference to the skill
    """
    def skill_ref(self):
        self.append(lambda x: "skillRef")

    """
    The name of the build job
    """
    def name(self):
        self.append(lambda x: "name")

    """
    The current status of the build job
    """
    def status(self):
        self.append(lambda x: "status")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
