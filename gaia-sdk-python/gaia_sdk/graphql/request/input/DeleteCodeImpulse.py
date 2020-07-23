

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class DeleteCodeImpulse():
    """
    The specification to delete a code instance
    """

    identityId: str
    reference: str

