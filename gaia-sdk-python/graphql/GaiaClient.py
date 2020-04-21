from api.VariableRegistry import VariableRegistry
import itertools
import random
from typing import List, Callable

from api.transporter.abstract_transporter import ITransporter
from graphql.GaiaResponse import QueryResponse
from graphql.request.type import Query


class GaiaClient(object):

    def __init__(self, transporter: ITransporter):
        self.transporter = transporter
        self.counter = itertools.count(random.randint(0, 1000000))

    def execute_native(self, statement: str, variables: dict):
        payload = {"statement": statement, "variables": variables}
        return self.transporter.transport(payload)

    def execute_query(self, request: Query) -> QueryResponse:
        statement, variables = self.get_statement("query", request)
        return self.execute_native(statement, variables)

    def get_statement(self, name: str, values: List[Callable[[VariableRegistry], str]]):
        registry = VariableRegistry()
        fields = " ".join(map(lambda x: x(registry), values))
        if len(registry.getDatatypes()) == 0:
            statement = f'${name} gaia ' + '{ ' + fields + ' }'
            return statement, registry.getVariables()

        statement = name + ' gaia(' + ", ".join(registry.getDatatypes()) + '}  {' + fields + ' }'
        return statement, registry.getVariables()
