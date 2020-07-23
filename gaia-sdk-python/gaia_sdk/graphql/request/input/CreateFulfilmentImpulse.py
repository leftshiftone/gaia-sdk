

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class CreateFulfilmentImpulse():
    """
    The specification to create a fulfilment instance
    """

    identityId: str
    qualifier: str
    appendent: str
    utterance: dict
    labelList: List[str]
    version: str

