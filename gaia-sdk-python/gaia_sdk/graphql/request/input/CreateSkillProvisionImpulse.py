

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField


class CreateSkillProvisionImpulse():
    """
    The specification to create a SkillProvision instance
    """
    tenantId: str
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

    def __init__(self, tenantId: str, qualifier: str, appendent: str, labelList: List[str], version: str, skillRef: str, initialCpu: int, maximalCpu: int, initialMemory: int, maximalMemory: int, replicas: int, enabled: bool, bootstrapTimeout: int, environment: dict):
        self.tenantId = tenantId
        self.qualifier = qualifier
        self.appendent = appendent
        self.labelList = labelList
        self.version = version
        self.skillRef = skillRef
        self.initialCpu = initialCpu
        self.maximalCpu = maximalCpu
        self.initialMemory = initialMemory
        self.maximalMemory = maximalMemory
        self.replicas = replicas
        self.enabled = enabled
        self.bootstrapTimeout = bootstrapTimeout
        self.environment = environment

    def __eq__(self, other):
        if type(other) is type(self):
            return self.tenantId == other.tenantId and self.qualifier == other.qualifier and self.appendent == other.appendent and self.labelList == other.labelList and self.version == other.version and self.skillRef == other.skillRef and self.initialCpu == other.initialCpu and self.maximalCpu == other.maximalCpu and self.initialMemory == other.initialMemory and self.maximalMemory == other.maximalMemory and self.replicas == other.replicas and self.enabled == other.enabled and self.bootstrapTimeout == other.bootstrapTimeout and self.environment == other.environment
        return False

    def __repr__(self):
        return {'tenantId': self.tenantId, 'qualifier': self.qualifier, 'appendent': self.appendent, 'labelList': self.labelList, 'version': self.version, 'skillRef': self.skillRef, 'initialCpu': self.initialCpu, 'maximalCpu': self.maximalCpu, 'initialMemory': self.initialMemory, 'maximalMemory': self.maximalMemory, 'replicas': self.replicas, 'enabled': self.enabled, 'bootstrapTimeout': self.bootstrapTimeout, 'environment': self.environment}
