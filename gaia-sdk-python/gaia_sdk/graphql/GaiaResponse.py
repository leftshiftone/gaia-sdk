from gaia_sdk.graphql.response.type.Query import Query
from gaia_sdk.graphql.response.type.Mutation import Mutation
from gaia_sdk.graphql.response.type.Subscription import Subscription


class QueryResponse:
    dictionary: dict

    def __init__(self, dictionary: dict):
        self.dictionary = dictionary

    def __eq__(self, other):
        return self.dictionary == other.dictionary

    def __repr__(self):
        return {'dictionary': self.dictionary}

    @property
    def data(self) -> Query:
        return Query(self.dictionary.get("data"))

    @property
    def extensions(self) -> dict:
        return self.dictionary.get("extensions")

    @property
    def errors(self) -> list:
        return self.dictionary.get("errors")


class MutationResponse:
    dictionary: dict

    def __init__(self, dictionary: dict):
        self.dictionary = dictionary

    def __eq__(self, other):
        return self.dictionary == other.dictionary

    def __repr__(self):
        return {'dictionary': self.dictionary}

    @property
    def data(self) -> Mutation:
        return Mutation(self.dictionary.get("data"))

    @property
    def extensions(self) -> dict:
        return self.dictionary.get("extensions")

    @property
    def errors(self) -> list:
        return self.dictionary.get("errors")


class SubscriptionResponse:
    @property
    def data(self) -> Subscription:
        return self.data

    @property
    def extensions(self) -> dict:
        return self.extensions

    @property
    def errors(self) -> list:
        return self.errors

