
from graphql.response.type.Intent import Intent


class CreatedIntentImpulse:
    """
    Impulse which indicates the resulf of a create intent impulse
    """
    def id(self) -> Uuid:
        return self.id
    """
    the intent instance
    """
    def intent(self) -> Intent:
        return self.intent
