

from dataclasses import dataclass
from typing import List
Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
from gaia_sdk.graphql.request.enumeration.RuntimeState import RuntimeState
from gaia_sdk.graphql.request.enumeration.SkillState import SkillState
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField

@dataclass
class SkillProvision:
    """
    Represents SkillProvision information
    """
    dictionary: dict
    """
    Id of the tenant
    """
    @property
    def tenant_id(self) -> Uuid:
        return Uuid(self.dictionary.get("tenantId"))
    """
    Skill reference
    """
    @property
    def reference(self) -> Uuid:
        return Uuid(self.dictionary.get("reference"))
    """
    The name of the skill provision
    """
    @property
    def qualifier(self) -> String:
        return String(self.dictionary.get("qualifier"))
    """
    Detailed description about the skill provision
    """
    @property
    def appendent(self) -> String:
        return String(self.dictionary.get("appendent"))
    """
    The list of labels of the skill provision
    """
    @property
    def label_list(self) -> List[String]:
        return list(map(lambda x: String(x), self.dictionary.get("labelList")))
    """
    The version of the skill
    """
    @property
    def version(self) -> String:
        return String(self.dictionary.get("version"))
    """
    The reference to skill
    """
    @property
    def skill_ref(self) -> String:
        return String(self.dictionary.get("skillRef"))
    """
    Initial CPU
    """
    @property
    def initial_cpu(self) -> Int:
        return Int(self.dictionary.get("initialCpu"))
    """
    Maximal allowed CPU
    """
    @property
    def maximal_cpu(self) -> Int:
        return Int(self.dictionary.get("maximalCpu"))
    """
    Initial Memory
    """
    @property
    def initial_memory(self) -> Int:
        return Int(self.dictionary.get("initialMemory"))
    """
    Maximal allowed Memory
    """
    @property
    def maximal_memory(self) -> Int:
        return Int(self.dictionary.get("maximalMemory"))
    """
    Amount of replicas
    """
    @property
    def replicas(self) -> Int:
        return Int(self.dictionary.get("replicas"))
    """
    Whether the skill provision should be enabled or not
    """
    @property
    def enabled(self) -> Boolean:
        return Boolean(self.dictionary.get("enabled"))
    """
    Amount of seconds that the skill requires to be ready
    """
    @property
    def bootstrap_timeout(self) -> Int:
        return Int(self.dictionary.get("bootstrapTimeout"))
    """
    Value-Key pairs with information needed for the skill provision
    """
    @property
    def environment(self) -> Struct:
        return Struct(self.dictionary.get("environment"))