from typing import Callable
from gaia_sdk.graphql.request.type.Query import Query
from gaia_sdk.graphql.request.type.Mutation import Mutation
from gaia_sdk.graphql.request.type.Subscription import Subscription


class GaiaRequest:

    @staticmethod
    def query(config: Callable[[Query], None]):
        request = Query()
        config(request)
        return request

    @staticmethod
    def mutation(config: Callable[[Mutation], None]):
        request = Mutation()
        config(request)
        return request

    @staticmethod
    def subscription(config: Callable[[Subscription], None]):
        request = Subscription()
        config(request)
        return request
