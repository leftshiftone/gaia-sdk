
from gaia_sdk.graphql.request.type.SkillStatus import SkillStatus

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


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
    The version used by this skill provision
    """
    def version(self):
        self.append(lambda x: "version")

    """
    The reference to skill
    """
    def skill_ref(self):
        self.append(lambda x: "skillRef")

    """
    CPU
    """
    def cpu(self):
        self.append(lambda x: "cpu")

    """
    Memory
    """
    def memory(self):
        self.append(lambda x: "memory")

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

    """
    The current status of the skill provision
    """
    def status(self, config: Callable[['SkillStatus'], None]):
        def callback(registry: VariableRegistry):
            entity = SkillStatus()
            config(entity)
            return "status {" + entity.render(registry) + "}"
        self.append(callback)

    """
    The contract associated with this provision
    """
    def contract(self):
        self.append(lambda x: "contract")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
