

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class CreateBehaviourImpulse():
    """
    The specification to create a behaviour instance
    """

    identityId: str
    qualifier: str
    appendent: str
    behaviour: str
    labelList: List[str]
    version: str

