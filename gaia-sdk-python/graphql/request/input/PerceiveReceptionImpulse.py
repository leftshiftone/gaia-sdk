

from typing import Callable
from api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class PerceiveReceptionImpulse():
    """
    Input for reception perception impulse
    """

    data: Struct

