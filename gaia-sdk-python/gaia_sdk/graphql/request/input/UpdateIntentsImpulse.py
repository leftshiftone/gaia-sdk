

from typing import Callable
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class UpdateIntentsImpulse():
    """
    The specification to update intent instances
    """

    id: str
    intents: UpdateIntent

