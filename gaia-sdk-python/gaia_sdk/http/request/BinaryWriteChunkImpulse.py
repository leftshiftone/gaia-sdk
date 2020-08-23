from dataclasses import dataclass
from typing import Dict


@dataclass
class BinaryWriteChunkImpulse:
    uri: str
    upload_id: str
    ordinal: int
    size_in_bytes: int
    file: bytes

    def as_form_data(self) -> Dict[str, tuple]:
        return {
            "uri": (None, self.uri),
            "uploadId": (None, self.upload_id),
            "ordinal": (None, self.ordinal),
            "sizeInBytes": (None, self.size_in_bytes),
            "file": ("someFileName", self.file, "application/octet-stream")
        }
