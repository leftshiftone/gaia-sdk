
from gaia_sdk.graphql.request.type.Code import Code

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class UpdatedCodeImpulse(list):
    """
    Impulse which indicates the result of a update code impulse
    """

    def id(self):
        self.append(lambda x: "id")

    """
    the code instance
    """
    def data(self, config: Callable[['Code'], None]):
        def callback(registry: VariableRegistry):
            entity = Code()
            config(entity)
            return "data {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
