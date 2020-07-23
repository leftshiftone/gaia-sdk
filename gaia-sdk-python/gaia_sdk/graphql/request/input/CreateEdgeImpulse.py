

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class CreateEdgeImpulse():
    """
    The specification to create an edge instance
    """

    source: str
    target: str
    type: str
    weight: float

