
from graphql.request.type.Retrieval import Retrieval
from graphql.request.type.Introspection import Introspection

from typing import Callable
from api.VariableRegistry import VariableRegistry


class Query(list):
    """
    The top level query type
    """

    """
    Container element for all introspect sensor fields
    """
    def introspect(self, config: Callable[['Introspection'], None]):
        def callback(_: VariableRegistry):
            entity = Introspection()
            config(entity)
        self.append(callback)

    """
    Container element for all retrieve sensor fields
    """
    def retrieve(self, config: Callable[['Retrieval'], None]):
        def callback(_: VariableRegistry):
            entity = Retrieval()
            config(entity)
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
