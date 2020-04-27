

from typing import Callable
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class PerceiveSuggestionImpulse():
    """
    Input for suggestion perception impulse
    """

    data: dict
