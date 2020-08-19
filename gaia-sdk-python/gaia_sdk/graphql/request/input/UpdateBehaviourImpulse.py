

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField


from dataclasses import dataclass


@dataclass
class UpdateBehaviourImpulse():
    """
    The specification to update a behaviour instance
    """

    identityId: str
    reference: str
    qualifier: str
    appendent: str
    behaviour: str
    labelList: List[str]

