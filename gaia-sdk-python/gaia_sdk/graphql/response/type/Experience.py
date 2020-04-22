
from graphql.response.type.BehaviourExecution import BehaviourExecution
from graphql.response.type.BehaviourNodeExecution import BehaviourNodeExecution


class Experience:
    """
    Container type for runtime information
    """
    def behaviourExecutions(self) -> BehaviourExecution:
        return self.behaviourExecutions
    def behaviourNodeExecutions(self) -> BehaviourNodeExecution:
        return self.behaviourNodeExecutions
