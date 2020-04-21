
from graphql.response.type.Interaction import Interaction
from graphql.response.type.Introspection import Introspection
from graphql.response.type.Notification import Notification


class Subscription:
    """
    the top level subscription type
    """
    def interact(self) -> Interaction:
        return self.interact
    def notify(self) -> Notification:
        return self.notify
    """
    Container element for all introspect sensor fields
    """
    def introspect(self) -> Introspection:
        return self.introspect
