
from graphql.request.type.Interaction import Interaction
from graphql.request.type.Introspection import Introspection
from graphql.request.type.Notification import Notification

from typing import Callable
from api.VariableRegistry import VariableRegistry


class Subscription(list):
    """
    the top level subscription type
    """

    def interact(self, config: Callable[['Interaction'], None]):
        def callback(_: VariableRegistry):
            entity = Interaction()
            config(entity)
        self.append(callback)

    def notify(self, config: Callable[['Notification'], None]):
        def callback(_: VariableRegistry):
            entity = Notification()
            config(entity)
        self.append(callback)

    """
    Container element for all introspect sensor fields
    """
    def introspect(self, config: Callable[['Introspection'], None]):
        def callback(_: VariableRegistry):
            entity = Introspection()
            config(entity)
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
