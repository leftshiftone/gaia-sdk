
from graphql.request.type.OnConversed import OnConversed

from typing import Callable
from api.VariableRegistry import VariableRegistry


class Interaction(list):

    def on_conversed(selfconfig: (_:OnConversed) => void) => this.push((registry) => {
        const entity = new OnConversed();
        config(entity);
        return "onConversed { " + entity.render(registry) + " }";
    });
    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
