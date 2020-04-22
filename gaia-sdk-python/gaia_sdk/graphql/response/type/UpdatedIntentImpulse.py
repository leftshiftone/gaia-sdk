
from graphql.response.type.Intent import Intent


class UpdatedIntentImpulse:
    """
    Impulse which indicates the resulf of a update intent impulse
    """
    def id(self) -> Uuid:
        return self.id
    """
    the intent instance
    """
    def intent(self) -> Intent:
        return self.intent
