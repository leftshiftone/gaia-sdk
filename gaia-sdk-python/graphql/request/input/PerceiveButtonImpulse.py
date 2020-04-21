

from typing import Callable
from api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class PerceiveButtonImpulse():
    """
    Input for button perception impulse
    """

    name: String
    value: String

