import calendar
import itertools
import random
import time

from api.transporter.abstract_transporter import ITransporter
from graphql.GaiaRequest import GaiaRequest
from graphql.GaiaResponse import GaiaResponse


class GaiaClient(object):

    def __init__(self, transporter: ITransporter):
        self.transporter = transporter
        self.counter = itertools.count(random.randint(0, 1000000))

    def execute_native(self, statement, variables, preprocessors):
        payload = {
            "statement": statement,
            "variables": variables,
            "timestamp": calendar.timegm(time.gmtime()),
            "nonce": self.counter.__next__(),
            "preprocessors": preprocessors
        }

        return GaiaResponse(self.transporter.transport(payload))

    def execute(self, request:GaiaRequest):
        statement = "query atlas($text: String!, $merge: Boolean!) { ver nlu(text: $text, merge: $merge) { " + (" ".join(request)) + "}}"
        variables = {"text": request.text, "merge": request.merge}

        return self.execute_native(statement, variables, [])
