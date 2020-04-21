
from graphql.response.type.PerceivedImpulse import PerceivedImpulse
from graphql.response.input.PerceiveReceptionImpulse import PerceiveReceptionImpulse
from graphql.response.input.PerceiveSuggestionImpulse import PerceiveSuggestionImpulse
from graphql.response.input.PerceiveButtonImpulse import PerceiveButtonImpulse
from graphql.response.input.PerceiveUtteranceImpulse import PerceiveUtteranceImpulse
from graphql.response.input.PerceiveSubmitImpulse import PerceiveSubmitImpulse


class Conversational:
    """
    Type which contains all impulses needed for the maintainence of a conversation
    """
    """
    Utterance perception impulse used to send an utterance text to gaia
    """
    def perceiveUtterance(self) -> PerceivedImpulse:
        return self.perceiveUtterance
    """
    Button perception impulse used to send a button action to gaia
    """
    def perceiveButton(self) -> PerceivedImpulse:
        return self.perceiveButton
    """
    Submit perception impulse used to send a submit action to gaia
    """
    def perceiveSubmit(self) -> PerceivedImpulse:
        return self.perceiveSubmit
    """
    Reception perception impulse used to send a reception to gaia
    """
    def perceiveReception(self) -> PerceivedImpulse:
        return self.perceiveReception
    """
    Suggestion perception impulse used to send a suggestion action to gaia
    """
    def perceiveSuggestion(self) -> PerceivedImpulse:
        return self.perceiveSuggestion
