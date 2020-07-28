

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class CreateIdentityImpulse():
    """
    The specification to create an identity instance
    """

    qualifier: str

