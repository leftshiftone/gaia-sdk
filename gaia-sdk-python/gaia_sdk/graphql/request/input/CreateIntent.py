

from typing import Callable
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class CreateIntent():
    """
    The specification to create an intent instance
    """

    identityId: str
    qualifier: str
    appendent: str
    utterance: dict
    labellist: str
    version: str

