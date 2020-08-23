

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField


from dataclasses import dataclass


@dataclass
class UpdateCodeImpulse():
    """
    The specification to update a code instance
    """

    identityId: str
    reference: str
    qualifier: str
    appendent: str
    code: dict
    type: str
    labelList: List[str]

