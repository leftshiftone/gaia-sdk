

from typing import Callable
from api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class PerceiveStreamImpulse():
    """
    Input for stream perception impulse
    """

    broadcast: Boolean
    identityId: Uuid
    type: String
    data: Struct

