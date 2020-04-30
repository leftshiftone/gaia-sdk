

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class DeleteStatementImpulse():
    """
    The specification to delete a statement instance
    """

    identityId: str
    reference: str

