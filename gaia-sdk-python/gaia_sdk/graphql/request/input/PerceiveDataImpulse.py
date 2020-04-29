

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class PerceiveDataImpulse():
    """
    Input for data perception impulse.
    """

    identityId: str
    eventName: str
    eventData: dict

