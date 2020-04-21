
from graphql.response.type.Query import Query
from graphql.response.type.Mutation import Mutation
from graphql.response.type.Subscription import Subscription


class Schema:
    def query(self) -> Query:
        return self.query
    def mutation(self) -> Mutation:
        return self.mutation
    def subscription(self) -> Subscription:
        return self.subscription
