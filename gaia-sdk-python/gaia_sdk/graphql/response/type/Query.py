
from graphql.response.type.Retrieval import Retrieval
from graphql.response.type.Introspection import Introspection


class Query:
    """
    The top level query type
    """
    """
    Container element for all introspect sensor fields
    """
    def introspect(self) -> Introspection:
        return self.introspect
    """
    Container element for all retrieve sensor fields
    """
    def retrieve(self) -> Retrieval:
        return self.retrieve
