

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class DeleteIdentityImpulse():
    """
    The specification to delete an identity instance
    """

    identityId: str

