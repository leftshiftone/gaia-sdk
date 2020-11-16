
from gaia_sdk.graphql.request.type.Evaluation import Evaluation
from gaia_sdk.graphql.request.type.Preservation import Preservation
from gaia_sdk.graphql.request.type.Practice import Practice
from gaia_sdk.graphql.request.type.Perception import Perception
from gaia_sdk.graphql.request.type.Activation import Activation

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class Mutation(list):
    """
    The top level mutation type
    """

    """
    Sensor impulses for all perception based functions.
        Perceptions are used to invoke events within gaia.
    """
    def perceive(self, config: Callable[['Perception'], None]):
        def callback(registry: VariableRegistry):
            entity = Perception()
            config(entity)
            return "perceive {" + entity.render(registry) + "}"
        self.append(callback)

    """
    Sensor impulses for all practice based functions.
        Practices are used to transfer skills to gaia and to train them.
    """
    def practice(self, config: Callable[['Practice'], None]):
        def callback(registry: VariableRegistry):
            entity = Practice()
            config(entity)
            return "practice {" + entity.render(registry) + "}"
        self.append(callback)

    """
    Sensor impulses for all preservation based functions.
        Preservations are used to invoke create/update/delete functions.
    """
    def preserve(self, config: Callable[['Preservation'], None]):
        def callback(registry: VariableRegistry):
            entity = Preservation()
            config(entity)
            return "preserve {" + entity.render(registry) + "}"
        self.append(callback)

    """
    Container element for all evaluate sensor fields.
        Evaluations are used to invoke skills and to return the result.
    """
    def evaluate(self, config: Callable[['Evaluation'], None]):
        def callback(registry: VariableRegistry):
            entity = Evaluation()
            config(entity)
            return "evaluate {" + entity.render(registry) + "}"
        self.append(callback)

    """
    Container element for all evaluate sensor fields.
        The activation can be used to unseal the vault or to grant access to an user.
    """
    def activate(self, config: Callable[['Activation'], None]):
        def callback(registry: VariableRegistry):
            entity = Activation()
            config(entity)
            return "activate {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
