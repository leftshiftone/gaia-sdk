

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField


from dataclasses import dataclass


@dataclass
class UpdateSkillProvisionImpulse():
    """
    The specification to update a SkillProvision instance
    """

    tenantId: str
    reference: str
    qualifier: str
    appendent: str
    labelList: List[str]
    version: str
    skillRef: str
    initialCpu: int
    maximalCpu: int
    initialMemory: int
    maximalMemory: int
    replicas: int
    enabled: bool
    bootstrapTimeout: int
    environment: dict

