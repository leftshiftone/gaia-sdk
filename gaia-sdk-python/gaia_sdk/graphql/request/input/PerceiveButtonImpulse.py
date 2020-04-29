

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class PerceiveButtonImpulse():
    """
    Input for button perception impulse
    """

    name: str
    value: str

