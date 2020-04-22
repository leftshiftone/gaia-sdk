
from graphql.request.type.SkillIntrospection import SkillIntrospection

from typing import Callable
from api.VariableRegistry import VariableRegistry


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
        def callback(_: VariableRegistry):
            entity = SkillIntrospection()
            config(entity)
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
