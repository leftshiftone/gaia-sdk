

from typing import Callable
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class PerceiveReceptionImpulse():
    """
    Input for reception perception impulse
    """

    data: dict
