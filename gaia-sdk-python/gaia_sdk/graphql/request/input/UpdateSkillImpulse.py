

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField


from dataclasses import dataclass


@dataclass
class UpdateSkillImpulse():
    """
    The specification to update a Skill instance
    """

    tenantId: str
    reference: str
    qualifier: str
    appendent: str
    labelList: List[str]
    repositoryUri: str

