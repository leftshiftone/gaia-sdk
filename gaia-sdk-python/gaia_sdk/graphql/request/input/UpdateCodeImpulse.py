

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class UpdateCodeImpulse():
    """
    The specification to update a code instance
    """

    identityId: str
    reference: str
    qualifier: str
    appendent: str
    utterance: dict
    labellist: List[str]
    version: str
