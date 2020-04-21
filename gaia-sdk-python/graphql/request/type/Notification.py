
from graphql.request.type.OnUpdated import OnUpdated
from graphql.request.type.OnDeleted import OnDeleted
from graphql.request.type.OnCreated import OnCreated

from typing import Callable
from api.VariableRegistry import VariableRegistry


class Notification(list):

    def on_created(selfconfig: (_:OnCreated) => void) => this.push((registry) => {
        const entity = new OnCreated();
        config(entity);
        return "onCreated { " + entity.render(registry) + " }";
    });
    def on_updated(selfconfig: (_:OnUpdated) => void) => this.push((registry) => {
        const entity = new OnUpdated();
        config(entity);
        return "onUpdated { " + entity.render(registry) + " }";
    });
    def on_deleted(selfconfig: (_:OnDeleted) => void) => this.push((registry) => {
        const entity = new OnDeleted();
        config(entity);
        return "onDeleted { " + entity.render(registry) + " }";
    });
    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
