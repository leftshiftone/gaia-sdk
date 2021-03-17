
from gaia_sdk.graphql.request.type.IntentDetectionRate import IntentDetectionRate
from gaia_sdk.graphql.request.type.TopExecutedBehaviour import TopExecutedBehaviour
from gaia_sdk.graphql.request.type.BehaviourState import BehaviourState
from gaia_sdk.graphql.request.type.MetricsEntityCount import MetricsEntityCount

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class IdentityMetrics(list):
    """
    Represents identity metrics information
    """

    def identity_id(self):
        self.append(lambda x: "identityId")

    def entity_count(self, config: Callable[['MetricsEntityCount'], None]):
        def callback(registry: VariableRegistry):
            entity = MetricsEntityCount()
            config(entity)
            return "entity_count {" + entity.render(registry) + "}"
        self.append(callback)

    def top_executed_behaviours(self, config: Callable[['TopExecutedBehaviour'], None]):
        def callback(registry: VariableRegistry):
            entity = TopExecutedBehaviour()
            config(entity)
            return "top_executed_behaviours {" + entity.render(registry) + "}"
        self.append(callback)

    def behaviour_states(self, config: Callable[['BehaviourState'], None]):
        def callback(registry: VariableRegistry):
            entity = BehaviourState()
            config(entity)
            return "behaviour_states {" + entity.render(registry) + "}"
        self.append(callback)

    def intent_detection_rate(self, config: Callable[['IntentDetectionRate'], None]):
        def callback(registry: VariableRegistry):
            entity = IntentDetectionRate()
            config(entity)
            return "intent_detection_rate {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
