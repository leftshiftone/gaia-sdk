

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class CreatePromptImpulse():
    """
    The specification to create a prompt instance
    """

    identityId: str
    qualifier: str
    appendent: str
    utterance: dict
    labelList: List[str]
    version: str

