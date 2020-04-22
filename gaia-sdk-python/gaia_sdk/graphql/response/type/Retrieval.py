
from graphql.response.type.Experience import Experience
from graphql.response.type.Knowledge import Knowledge


class Retrieval:
    """
    Container element which collects all information static data
    """
    def knowledge(self) -> Knowledge:
        return self.knowledge
    """
    Container element which collects all information about runtime data
    """
    def experience(self) -> Experience:
        return self.experience
