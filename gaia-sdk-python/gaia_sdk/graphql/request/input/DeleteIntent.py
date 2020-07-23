

from typing import Callable
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class DeleteIntent():
    """
    The specification to delete an intent instance
    """

    identityId: str
    qualifier: str

