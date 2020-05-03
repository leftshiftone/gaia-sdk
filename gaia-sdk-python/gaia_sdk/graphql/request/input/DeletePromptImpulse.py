

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class DeletePromptImpulse():
    """
    The specification to delete a prompt instance
    """

    identityId: str
    reference: str
