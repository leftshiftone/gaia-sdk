

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class DeleteBehaviourImpulse():
    """
    The specification to delete a behaviour instance
    """

    identityId: str
    reference: str

