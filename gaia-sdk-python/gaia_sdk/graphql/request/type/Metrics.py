
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

from gaia_sdk.graphql.request.type.MetricsEntityCount import MetricsEntityCount

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField
from gaia_sdk.graphql.request.enumeration.EdgeType import EdgeType


class Metrics(list):
    """
    Represents metrics information
    """

    def identity_id(self):
        self.append(lambda x: "identityId")

    def entity_count(self, config: Callable[['MetricsEntityCount'], None]):
        def callback(registry: VariableRegistry):
            entity = MetricsEntityCount()
            config(entity)
            return "entity_count {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
