

from typing import Callable
from api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class DeleteIntentImpulse():
    """
    The specification to delete an intent instance
    """

    identityId: str
    qualifier: str
    appendent: str
    utterance: dict
    labellist: dict
    version: str

