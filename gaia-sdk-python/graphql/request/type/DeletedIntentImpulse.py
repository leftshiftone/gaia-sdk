
from graphql.request.type.Intent import Intent

from typing import Callable
from api.VariableRegistry import VariableRegistry


class DeletedIntentImpulse(list):
    """
    Impulse which indicates the resulf of a delete intent impulse
    """

    def id(self):
        self.append(lambda x: "id")

    """
    the intent instance
    """
    def intent(selfconfig: (_:Intent) => void) => this.push((registry) => {
        const entity = new Intent();
        config(entity);
        return "intent { " + entity.render(registry) + " }";
    });
    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
