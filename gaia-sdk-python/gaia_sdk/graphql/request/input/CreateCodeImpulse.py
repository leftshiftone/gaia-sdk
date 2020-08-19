

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField


from dataclasses import dataclass


@dataclass
class CreateCodeImpulse():
    """
    The specification to create a code instance
    """

    identityId: str
    qualifier: str
    appendent: str
    code: dict
    type: str
    labelList: List[str]

