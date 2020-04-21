
from graphql.request.type.Evaluation import Evaluation
from graphql.request.type.Preservation import Preservation
from graphql.request.type.Practice import Practice
from graphql.request.type.Perception import Perception
from graphql.request.type.Activation import Activation

from typing import Callable
from api.VariableRegistry import VariableRegistry


class Mutation(list):
    """
    The top level mutation type
    """

    """
    Sensor impulses for all perception based functions.
        Perceptions are used to invoke events within gaia.
    """
    def perceive(self, config: Callable[['Perception'], None]):
        def callback(_: VariableRegistry):
            entity = Perception()
            config(entity)
        self.append(callback)

    """
    Sensor impulses for all practice based functions.
        Practices are used to transfer skills to gaia and to train them.
    """
    def practice(self, config: Callable[['Practice'], None]):
        def callback(_: VariableRegistry):
            entity = Practice()
            config(entity)
        self.append(callback)

    """
    Sensor impulses for all preservation based functions.
        Preservations are used to invoke create/update/delete functions.
    """
    def preserve(self, config: Callable[['Preservation'], None]):
        def callback(_: VariableRegistry):
            entity = Preservation()
            config(entity)
        self.append(callback)

    """
    Container element for all evaluate sensor fields.
        Evaluations are used to invoke skills and to return the result.
    """
    def evaluate(self, config: Callable[['Evaluation'], None]):
        def callback(_: VariableRegistry):
            entity = Evaluation()
            config(entity)
        self.append(callback)

    """
    Container element for all evaluate sensor fields.
        The activation can be used to unseal the vault or to grant access to an user.
    """
    def activate(self, config: Callable[['Activation'], None]):
        def callback(_: VariableRegistry):
            entity = Activation()
            config(entity)
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
