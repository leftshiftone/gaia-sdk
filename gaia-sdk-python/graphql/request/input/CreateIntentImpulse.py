

from typing import Callable
from api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class CreateIntentImpulse():
    """
    The specification to create an intent instance
    """

    identityId: str
    qualifier: str
    appendent: str
    utterance: dict
    labellist: dict
    version: str
