
from graphql.response.type.Evaluation import Evaluation
from graphql.response.type.Preservation import Preservation
from graphql.response.type.Practice import Practice
from graphql.response.type.Perception import Perception
from graphql.response.type.Activation import Activation


class Mutation:
    """
    The top level mutation type
    """
    """
    Sensor impulses for all perception based functions.
        Perceptions are used to invoke events within gaia.
    """
    def perceive(self) -> Perception:
        return self.perceive
    """
    Sensor impulses for all practice based functions.
        Practices are used to transfer skills to gaia and to train them.
    """
    def practice(self) -> Practice:
        return self.practice
    """
    Sensor impulses for all preservation based functions.
        Preservations are used to invoke create/update/delete functions.
    """
    def preserve(self) -> Preservation:
        return self.preserve
    """
    Container element for all evaluate sensor fields.
        Evaluations are used to invoke skills and to return the result.
    """
    def evaluate(self) -> Evaluation:
        return self.evaluate
    """
    Container element for all evaluate sensor fields.
        The activation can be used to unseal the vault or to grant access to an user.
    """
    def activate(self) -> Activation:
        return self.activate
