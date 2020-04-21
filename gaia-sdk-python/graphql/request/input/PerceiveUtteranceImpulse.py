

from typing import Callable
from api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class PerceiveUtteranceImpulse():
    """
    Input for utterance perception impulse
    """

    utterance: String

