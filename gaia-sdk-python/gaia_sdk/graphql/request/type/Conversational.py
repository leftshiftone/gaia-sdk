
from gaia_sdk.graphql.request.type.PerceivedImpulse import PerceivedImpulse
from gaia_sdk.graphql.request.input.PerceiveReceptionImpulse import PerceiveReceptionImpulse
from gaia_sdk.graphql.request.input.PerceiveSuggestionImpulse import PerceiveSuggestionImpulse
from gaia_sdk.graphql.request.input.PerceiveButtonImpulse import PerceiveButtonImpulse
from gaia_sdk.graphql.request.input.PerceiveUtteranceImpulse import PerceiveUtteranceImpulse
from gaia_sdk.graphql.request.input.PerceiveSubmitImpulse import PerceiveSubmitImpulse

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class Conversational(list):
    """
    Type which contains all impulses needed for the maintainence of a conversation
    """

    """
    Utterance perception impulse used to send an utterance text to gaia
    """
    def perceive_utterance(self, impulse: PerceiveUtteranceImpulse, config: Callable[['PerceivedImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = PerceivedImpulse()
            config(entity)
            return f'perceiveUtterance(impulse:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    Button perception impulse used to send a button action to gaia
    """
    def perceive_button(self, impulse: PerceiveButtonImpulse, config: Callable[['PerceivedImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = PerceivedImpulse()
            config(entity)
            return f'perceiveButton(impulse:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    Submit perception impulse used to send a submit action to gaia
    """
    def perceive_submit(self, impulse: PerceiveSubmitImpulse, config: Callable[['PerceivedImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = PerceivedImpulse()
            config(entity)
            return f'perceiveSubmit(impulse:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    Reception perception impulse used to send a reception to gaia
    """
    def perceive_reception(self, impulse: PerceiveReceptionImpulse, config: Callable[['PerceivedImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = PerceivedImpulse()
            config(entity)
            return f'perceiveReception(impulse:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    Suggestion perception impulse used to send a suggestion action to gaia
    """
    def perceive_suggestion(self, impulse: PerceiveSuggestionImpulse, config: Callable[['PerceivedImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = PerceivedImpulse()
            config(entity)
            return f'perceiveSuggestion(impulse:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
