
from gaia_sdk.graphql.request.type.SkillIntrospection import SkillIntrospection

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class Introspection(list):

    def cpu(self):
        self.append(lambda x: "cpu")

    def gpu(self):
        self.append(lambda x: "gpu")

    def memory(self):
        self.append(lambda x: "memory")

    def state(self):
        self.append(lambda x: "state")

    def started(self):
        self.append(lambda x: "started")

    def skills(self, config: Callable[['SkillIntrospection'], None]):
        def callback(registry: VariableRegistry):
            entity = SkillIntrospection()
            config(entity)
            return "skills {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
