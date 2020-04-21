

from typing import Callable
from api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class PerceiveSubmitImpulse():
    """
    Input for submit perception impulse
    """

    name: str
    value: str
