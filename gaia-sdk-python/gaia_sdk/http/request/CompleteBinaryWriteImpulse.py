from dataclasses import dataclass
from typing import List


@dataclass
class CompleteBinaryWriteImpulse:
    uri: str
    uploadId: str
    chunks: List[str]
