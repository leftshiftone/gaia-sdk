
from gaia_sdk.graphql.request.type.Tenant import Tenant

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class UpdatedTenantImpulse(list):
    """
    Impulse which indicates the result of a update Tenant impulse
    """

    def id(self):
        self.append(lambda x: "id")

    """
    the Tenant instance
    """
    def data(self, config: Callable[['Tenant'], None]):
        def callback(registry: VariableRegistry):
            entity = Tenant()
            config(entity)
            return "data {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
