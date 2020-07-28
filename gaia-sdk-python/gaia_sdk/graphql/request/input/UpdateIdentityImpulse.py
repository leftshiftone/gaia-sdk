

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class UpdateIdentityImpulse():
    """
    The specification to update an identity instance
    """

    identityId: str
    qualifier: str

