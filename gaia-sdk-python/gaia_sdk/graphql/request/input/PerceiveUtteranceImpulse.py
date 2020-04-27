

from typing import Callable
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class PerceiveUtteranceImpulse():
    """
    Input for utterance perception impulse
    """

    utterance: str

