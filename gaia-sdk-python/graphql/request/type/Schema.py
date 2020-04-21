
from graphql.request.type.Query import Query
from graphql.request.type.Mutation import Mutation
from graphql.request.type.Subscription import Subscription

from typing import Callable
from api.VariableRegistry import VariableRegistry


class Schema(list):

    def query(selfconfig: (_:Query) => void) => this.push((registry) => {
        const entity = new Query();
        config(entity);
        return "query { " + entity.render(registry) + " }";
    });
    def mutation(selfconfig: (_:Mutation) => void) => this.push((registry) => {
        const entity = new Mutation();
        config(entity);
        return "mutation { " + entity.render(registry) + " }";
    });
    def subscription(selfconfig: (_:Subscription) => void) => this.push((registry) => {
        const entity = new Subscription();
        config(entity);
        return "subscription { " + entity.render(registry) + " }";
    });
    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
