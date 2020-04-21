
from graphql.request.type.Experience import Experience
from graphql.request.type.Knowledge import Knowledge

from typing import Callable
from api.VariableRegistry import VariableRegistry


class Retrieval(list):

    """
    Container element which collects all information static data
    """
    def knowledge(selfconfig: (_:Knowledge) => void) => this.push((registry) => {
        const entity = new Knowledge();
        config(entity);
        return "knowledge { " + entity.render(registry) + " }";
    });
    """
    Container element which collects all information about runtime data
    """
    def experience(selfconfig: (_:Experience) => void) => this.push((registry) => {
        const entity = new Experience();
        config(entity);
        return "experience { " + entity.render(registry) + " }";
    });
    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
