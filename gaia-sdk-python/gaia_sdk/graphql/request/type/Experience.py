
from graphql.request.type.BehaviourExecution import BehaviourExecution
from graphql.request.type.BehaviourNodeExecution import BehaviourNodeExecution

from typing import Callable
from api.VariableRegistry import VariableRegistry


class Experience(list):
    """
    Container type for runtime information
    """

    def behaviour_executions(self, config: Callable[['BehaviourExecution'], None]):
        def callback(_: VariableRegistry):
            entity = BehaviourExecution()
            config(entity)
        self.append(callback)

    def behaviour_node_executions(self, config: Callable[['BehaviourNodeExecution'], None]):
        def callback(_: VariableRegistry):
            entity = BehaviourNodeExecution()
            config(entity)
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
