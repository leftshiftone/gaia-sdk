

from typing import Callable
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class DeleteIntentsImpulse():
    """
    The specification to delete intent instances
    """

    id: str
    intents: DeleteIntent

