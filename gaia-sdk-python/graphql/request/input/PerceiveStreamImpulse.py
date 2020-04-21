

from typing import Callable
from api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class PerceiveStreamImpulse():
    """
    Input for stream perception impulse
    """

    broadcast: bool
    identityId: str
    type: str
    data: dict

