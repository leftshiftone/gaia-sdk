

from typing import Callable
from api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class UpdateIntentImpulse():
    """
    The specification to update an intent instance
    """

    identityId: Uuid
    qualifier: String
    appendent: String
    utterance: Struct
    labellist: Struct
    version: String

