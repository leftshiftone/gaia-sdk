

from typing import Callable
from api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class PerceiveActionImpulse():
    """
    Input for action perception impulse
    """

    broadcast: bool
    identityId: str
    type: str
    data: dict
