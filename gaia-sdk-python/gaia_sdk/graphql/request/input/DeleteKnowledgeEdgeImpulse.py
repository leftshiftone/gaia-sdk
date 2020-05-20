

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


from dataclasses import dataclass


@dataclass
class DeleteKnowledgeEdgeImpulse():
    """
    The specification to delete an edge instance
    """

    source: str
    target: str

