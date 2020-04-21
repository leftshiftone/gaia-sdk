
from graphql.request.type.Interaction import Interaction
from graphql.request.type.Introspection import Introspection
from graphql.request.type.Notification import Notification

from typing import Callable
from api.VariableRegistry import VariableRegistry


class Subscription(list):
    """
    the top level subscription type
    """

    def interact(selfconfig: (_:Interaction) => void) => this.push((registry) => {
        const entity = new Interaction();
        config(entity);
        return "interact { " + entity.render(registry) + " }";
    });
    def notify(selfconfig: (_:Notification) => void) => this.push((registry) => {
        const entity = new Notification();
        config(entity);
        return "notify { " + entity.render(registry) + " }";
    });
    """
    Container element for all introspect sensor fields
    """
    def introspect(selfconfig: (_:Introspection) => void) => this.push((registry) => {
        const entity = new Introspection();
        config(entity);
        return "introspect { " + entity.render(registry) + " }";
    });
    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
