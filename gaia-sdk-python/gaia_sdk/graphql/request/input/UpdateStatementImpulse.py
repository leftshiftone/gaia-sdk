

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class UpdateStatementImpulse():
    """
    The specification to update a statement instance
    """

    identityId: str
    reference: str
    qualifier: str
    appendent: str
    utterance: dict
    labelList: List[str]
    version: str

