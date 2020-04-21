

from typing import Callable
from api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class PerceiveDataImpulse():
    """
    Input for data perception impulse.
    """

    name: str
    data: dict
