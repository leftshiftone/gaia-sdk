
from graphql.request.type.BehaviourExecution import BehaviourExecution
from graphql.request.type.BehaviourNodeExecution import BehaviourNodeExecution

from typing import Callable
from api.VariableRegistry import VariableRegistry


class Experience(list):
    """
    Container type for runtime information
    """

    def behaviour_executions(selfconfig: (_:BehaviourExecution) => void) => this.push((registry) => {
        const entity = new BehaviourExecution();
        config(entity);
        return "behaviourExecutions { " + entity.render(registry) + " }";
    });
    def behaviour_node_executions(selfconfig: (_:BehaviourNodeExecution) => void) => this.push((registry) => {
        const entity = new BehaviourNodeExecution();
        config(entity);
        return "behaviourNodeExecutions { " + entity.render(registry) + " }";
    });
    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
