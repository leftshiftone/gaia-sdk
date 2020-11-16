
from gaia_sdk.graphql.request.type.Fulfilment import Fulfilment

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class UpdatedFulfilmentImpulse(list):
    """
    Impulse which indicates the result of a update fulfilment impulse
    """

    def id(self):
        self.append(lambda x: "id")

    """
    the fulfilment instance
    """
    def data(self, config: Callable[['Fulfilment'], None]):
        def callback(registry: VariableRegistry):
            entity = Fulfilment()
            config(entity)
            return "data {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
