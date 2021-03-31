
from typing import Callable

from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.type.Failure import Failure


class SkillStatus(list):

    def health(self):
        self.append(lambda x: "health")

    def running(self):
        self.append(lambda x: "running")

    def pending(self):
        self.append(lambda x: "pending")

    def failures(self, config: Callable[['Failure'], None]):
        def callback(registry: VariableRegistry):
            entity = Failure()
            config(entity)
            return "failures {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
