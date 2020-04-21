
from graphql.request.type.Evaluation import Evaluation
from graphql.request.type.Preservation import Preservation
from graphql.request.type.Practice import Practice
from graphql.request.type.Perception import Perception
from graphql.request.type.Activation import Activation

from typing import Callable
from api.VariableRegistry import VariableRegistry


class Mutation(list):
    """
    The top level mutation type
    """

    """
    Sensor impulses for all perception based functions.
        Perceptions are used to invoke events within gaia.
    """
    def perceive(selfconfig: (_:Perception) => void) => this.push((registry) => {
        const entity = new Perception();
        config(entity);
        return "perceive { " + entity.render(registry) + " }";
    });
    """
    Sensor impulses for all practice based functions.
        Practices are used to transfer skills to gaia and to train them.
    """
    def practice(selfconfig: (_:Practice) => void) => this.push((registry) => {
        const entity = new Practice();
        config(entity);
        return "practice { " + entity.render(registry) + " }";
    });
    """
    Sensor impulses for all preservation based functions.
        Preservations are used to invoke create/update/delete functions.
    """
    def preserve(selfconfig: (_:Preservation) => void) => this.push((registry) => {
        const entity = new Preservation();
        config(entity);
        return "preserve { " + entity.render(registry) + " }";
    });
    """
    Container element for all evaluate sensor fields.
        Evaluations are used to invoke skills and to return the result.
    """
    def evaluate(selfconfig: (_:Evaluation) => void) => this.push((registry) => {
        const entity = new Evaluation();
        config(entity);
        return "evaluate { " + entity.render(registry) + " }";
    });
    """
    Container element for all evaluate sensor fields.
        The activation can be used to unseal the vault or to grant access to an user.
    """
    def activate(selfconfig: (_:Activation) => void) => this.push((registry) => {
        const entity = new Activation();
        config(entity);
        return "activate { " + entity.render(registry) + " }";
    });
    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
