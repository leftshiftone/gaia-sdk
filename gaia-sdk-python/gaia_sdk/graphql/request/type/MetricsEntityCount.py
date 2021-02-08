

#  Copyright (c) 2016-2021, Leftshift One
#  __________________
#  [2021] Leftshift One
#  All Rights Reserved.
#  NOTICE:  All information contained herein is, and remains
#  the property of Leftshift One and its suppliers,
#  if any.  The intellectual and technical concepts contained
#  herein are proprietary to Leftshift One
#  and its suppliers and may be covered by Patents,
#  patents in process, and are protected by trade secret or copyright law.
#  Dissemination of this information or reproduction of this material
#  is strictly forbidden unless prior written permission is obtained
#  from Leftshift One.

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class MetricsEntityCount(list):

    def intents(self):
        self.append(lambda x: "intents")

    def prompts(self):
        self.append(lambda x: "prompts")

    def statements(self):
        self.append(lambda x: "statements")

    def fulfilments(self):
        self.append(lambda x: "fulfilments")

    def behaviours(self):
        self.append(lambda x: "behaviours")

    def codes(self):
        self.append(lambda x: "codes")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
