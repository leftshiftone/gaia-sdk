

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class DeleteIntentImpulse():
    """
    The specification to delete an intent instance
    """

    identityId: str
    reference: str

