

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField


class SkillProvision(list):
    """
    Represents SkillProvision information
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
    The name of the skill provision
    """
    def qualifier(self):
        self.append(lambda x: "qualifier")

    """
    Detailed description about the skill provision
    """
    def appendent(self):
        self.append(lambda x: "appendent")

    """
    The list of labels of the skill provision
    """
    def label_list(self):
        self.append(lambda x: "labelList")

    """
    The version of the skill
    """
    def version(self):
        self.append(lambda x: "version")

    """
    The reference to skill
    """
    def skill_ref(self):
        self.append(lambda x: "skillRef")

    """
    Initial CPU
    """
    def initial_cpu(self):
        self.append(lambda x: "initialCpu")

    """
    Maximal allowed CPU
    """
    def maximal_cpu(self):
        self.append(lambda x: "maximalCpu")

    """
    Initial Memory
    """
    def initial_memory(self):
        self.append(lambda x: "initialMemory")

    """
    Maximal allowed Memory
    """
    def maximal_memory(self):
        self.append(lambda x: "maximalMemory")

    """
    Amount of replicas
    """
    def replicas(self):
        self.append(lambda x: "replicas")

    """
    Whether the skill provision should be enabled or not
    """
    def enabled(self):
        self.append(lambda x: "enabled")

    """
    Amount of seconds that the skill requires to be ready
    """
    def bootstrap_timeout(self):
        self.append(lambda x: "bootstrapTimeout")

    """
    Value-Key pairs with information needed for the skill provision
    """
    def environment(self):
        self.append(lambda x: "environment")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
