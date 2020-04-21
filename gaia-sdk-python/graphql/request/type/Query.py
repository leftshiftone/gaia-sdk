
from graphql.request.type.Retrieval import Retrieval
from graphql.request.type.Introspection import Introspection

from typing import Callable
from api.VariableRegistry import VariableRegistry


class Query(list):
    """
    The top level query type
    """

    """
    Container element for all introspect sensor fields
    """
    def introspect(selfconfig: (_:Introspection) => void) => this.push((registry) => {
        const entity = new Introspection();
        config(entity);
        return "introspect { " + entity.render(registry) + " }";
    });
    """
    Container element for all retrieve sensor fields
    """
    def retrieve(selfconfig: (_:Retrieval) => void) => this.push((registry) => {
        const entity = new Retrieval();
        config(entity);
        return "retrieve { " + entity.render(registry) + " }";
    });
    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
