

from typing import Callable
from api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class UpdateIntentImpulse():
    """
    The specification to update an intent instance
    """

    identityId: str
    qualifier: str
    appendent: str
    utterance: dict
    labellist: dict
    version: str

