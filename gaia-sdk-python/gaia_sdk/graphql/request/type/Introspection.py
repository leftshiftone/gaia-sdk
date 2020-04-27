
from gaia_sdk.graphql.request.type.SkillIntrospection import SkillIntrospection

from typing import Callable
from gaia_sdk.api.VariableRegistry import VariableRegistry


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
