
from gaia_sdk.graphql.request.type.BehaviourStatesPerDay import BehaviourStatesPerDay

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class BehaviourMetrics(list):

    def identity_id(self):
        self.append(lambda x: "identityId")

    def behaviour_id(self):
        self.append(lambda x: "behaviourId")

    def states_per_day(self, config: Callable[['BehaviourStatesPerDay'], None]):
        def callback(registry: VariableRegistry):
            entity = BehaviourStatesPerDay()
            config(entity)
            return "states_per_day {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
