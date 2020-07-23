

from typing import Callable
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class CreateIntentsImpulse():
    """
    The specification to create intent instances
    """

    id: str
    intents: CreateIntent

