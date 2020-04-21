

from typing import Callable
from api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class DeleteIntentImpulse():
    """
    The specification to delete an intent instance
    """

    identityId: Uuid
    qualifier: String
    appendent: String
    utterance: Struct
    labellist: Struct
    version: String

