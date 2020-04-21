

from typing import Callable
from api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class PerceiveActionImpulse():
    """
    Input for action perception impulse
    """

    broadcast: Boolean
    identityId: Uuid
    type: String
    data: Struct

