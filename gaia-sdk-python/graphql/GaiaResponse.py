from graphql.response.type.Query import Query
from graphql.response.type.Mutation import Mutation
from graphql.response.type.Subscription import Subscription


class QueryResponse:
    def data(self) -> Query:
        return self.data

    def extensions(self) -> dict:
        return self.extensions

    def errors(self) -> list:
        return self.errors

class MutationResponse:
    def data(self) -> Mutation:
        return self.data

    def extensions(self) -> dict:
        return self.extensions

    def errors(self) -> list:
        return self.errors

class SubscriptionResponse:
    def data(self) -> Subscription:
        return self.data

    def extensions(self) -> dict:
        return self.extensions

    def errors(self) -> list:
        return self.errors

