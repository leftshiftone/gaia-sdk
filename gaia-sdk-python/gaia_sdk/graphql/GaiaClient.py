from gaia_sdk.api.VariableRegistry import VariableRegistry
import itertools
import random
from typing import List, Callable
from dataclasses import dataclass

from gaia_sdk.api.transporter.abstract_transporter import ITransporter
from gaia_sdk.graphql.GaiaResponse import QueryResponse
from gaia_sdk.graphql.request.type import Query
from gaia_sdk.graphql.GaiaResponse import MutationResponse
from gaia_sdk.graphql.request.type import Mutation
from gaia_sdk.api.client_options import ClientOptions


@dataclass
class GaiaClient(object):

    transporter: ITransporter
    options: ClientOptions

    def execute_native(self, statement: str, variables: dict):
        payload = {"statement": statement, "variables": variables}
        return self.transporter.transport(self.options, payload)

    def query(self, request: Query) -> QueryResponse:
        statement, variables = self.get_statement("query", request)
        return self.execute_native(statement, variables)

    def mutation(self, request: Mutation) -> MutationResponse:
        statement, variables = self.get_statement("mutation", request)
        return self.execute_native(statement, variables)

    def get_statement(self, name: str, values: List[Callable[[VariableRegistry], str]]):
        registry = VariableRegistry()
        fields = " ".join(map(lambda x: x(registry), values))
        if len(registry.getDatatypes()) == 0:
            statement = f'{name} gaia ' + '{ ' + fields + ' }'
            return statement, registry.getVariables()

        statement = name + ' gaia(' + ", ".join(registry.getDatatypes()) + ')  {' + fields + ' }'
        return statement, registry.getVariables()
