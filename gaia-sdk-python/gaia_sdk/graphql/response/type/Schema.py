
from gaia_sdk.graphql.response.type.Mutation import Mutation
from gaia_sdk.graphql.response.type.Query import Query
from gaia_sdk.graphql.response.type.Subscription import Subscription

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class Schema:
    dictionary: dict

    def __init__(self, dictionary: dict):
        self.dictionary = dictionary

    def __eq__(self, other):
        if type(other) is type(self):
            return self.dictionary == other.dictionary
        return False

    def __repr__(self):
        return {'dictionary': self.dictionary}

    @property
    def query(self) -> Query:
        return Query(self.dictionary.get("query"))
    @property
    def mutation(self) -> Mutation:
        return Mutation(self.dictionary.get("mutation"))
    @property
    def subscription(self) -> Subscription:
        return Subscription(self.dictionary.get("subscription"))
