

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class DeleteFulfilmentImpulse():
    """
    The specification to delete a fulfilment instance
    """

    identityId: str
    reference: str

