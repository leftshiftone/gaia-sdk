
from gaia_sdk.graphql.response.type.PerceivedImpulse import PerceivedImpulse
from gaia_sdk.graphql.request.input.PerceiveReceptionImpulse import PerceiveReceptionImpulse
from gaia_sdk.graphql.request.input.PerceiveSuggestionImpulse import PerceiveSuggestionImpulse
from gaia_sdk.graphql.request.input.PerceiveButtonImpulse import PerceiveButtonImpulse
from gaia_sdk.graphql.request.input.PerceiveUtteranceImpulse import PerceiveUtteranceImpulse
from gaia_sdk.graphql.request.input.PerceiveSubmitImpulse import PerceiveSubmitImpulse

from typing import List
Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType

class Conversational:
    """
    Type which contains all impulses needed for the maintainence of a conversation
    """
    dictionary: dict

    def __init__(self, dictionary: dict):
        self.dictionary = dictionary

    def __eq__(self, other):
        if type(other) is type(self):
            return self.dictionary == other.dictionary
        return False

    def __repr__(self):
        return {'dictionary': self.dictionary}

    """
    Utterance perception impulse used to send an utterance text to gaia
    """
    @property
    def perceive_utterance(self) -> PerceivedImpulse:
        return PerceivedImpulse(self.dictionary.get("perceiveUtterance"))
    """
    Button perception impulse used to send a button action to gaia
    """
    @property
    def perceive_button(self) -> PerceivedImpulse:
        return PerceivedImpulse(self.dictionary.get("perceiveButton"))
    """
    Submit perception impulse used to send a submit action to gaia
    """
    @property
    def perceive_submit(self) -> PerceivedImpulse:
        return PerceivedImpulse(self.dictionary.get("perceiveSubmit"))
    """
    Reception perception impulse used to send a reception to gaia
    """
    @property
    def perceive_reception(self) -> PerceivedImpulse:
        return PerceivedImpulse(self.dictionary.get("perceiveReception"))
    """
    Suggestion perception impulse used to send a suggestion action to gaia
    """
    @property
    def perceive_suggestion(self) -> PerceivedImpulse:
        return PerceivedImpulse(self.dictionary.get("perceiveSuggestion"))
