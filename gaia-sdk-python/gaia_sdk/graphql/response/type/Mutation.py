
from gaia_sdk.graphql.response.type.Evaluation import Evaluation
from gaia_sdk.graphql.response.type.Preservation import Preservation
from gaia_sdk.graphql.response.type.Practice import Practice
from gaia_sdk.graphql.response.type.Perception import Perception
from gaia_sdk.graphql.response.type.Activation import Activation

from dataclasses import dataclass
from typing import List
Uuid = str
String = str
Long = str
Timestamp = str
Struct = dict
Float = float
from gaia_sdk.graphql.request.enumeration.RuntimeState import RuntimeState
from gaia_sdk.graphql.request.enumeration.SkillState import SkillState

@dataclass
class Mutation:
    """
    The top level mutation type
    """
    dictionary: dict
    """
    Sensor impulses for all perception based functions.
        Perceptions are used to invoke events within gaia.
    """
    @property
    def perceive(self) -> Perception:
        return Perception(self.dictionary.get("perceive"))
    """
    Sensor impulses for all practice based functions.
        Practices are used to transfer skills to gaia and to train them.
    """
    @property
    def practice(self) -> Practice:
        return Practice(self.dictionary.get("practice"))
    """
    Sensor impulses for all preservation based functions.
        Preservations are used to invoke create/update/delete functions.
    """
    @property
    def preserve(self) -> Preservation:
        return Preservation(self.dictionary.get("preserve"))
    """
    Container element for all evaluate sensor fields.
        Evaluations are used to invoke skills and to return the result.
    """
    @property
    def evaluate(self) -> Evaluation:
        return Evaluation(self.dictionary.get("evaluate"))
    """
    Container element for all evaluate sensor fields.
        The activation can be used to unseal the vault or to grant access to an user.
    """
    @property
    def activate(self) -> Activation:
        return Activation(self.dictionary.get("activate"))
