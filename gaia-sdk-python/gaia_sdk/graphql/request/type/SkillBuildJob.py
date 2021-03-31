
from gaia_sdk.graphql.request.type.SkillStatus import SkillStatus

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class SkillBuildJob(list):
    """
    A skill build job creates definitive versions for Skill
    """

    """
    The reference of this build job
    """
    def reference(self):
        self.append(lambda x: "reference")

    """
    Id of the tenant
    """
    def tenant_id(self):
        self.append(lambda x: "tenantId")

    """
    reference to the skill being built
    """
    def skill_ref(self):
        self.append(lambda x: "skillRef")

    """
    the associated version tag
    """
    def tag(self):
        self.append(lambda x: "tag")

    """
    The name of the build job
    """
    def name(self):
        self.append(lambda x: "name")

    """
    The current status of the build job
    """
    def status(self, config: Callable[['SkillStatus'], None]):
        def callback(registry: VariableRegistry):
            entity = SkillStatus()
            config(entity)
            return "status {" + entity.render(registry) + "}"
        self.append(callback)

    """
    created at
    """
    def created(self):
        self.append(lambda x: "created")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
