

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


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
    version: str

