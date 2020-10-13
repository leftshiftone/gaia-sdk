from typing import Dict
from typing import Any


class BinaryWriteChunkImpulse:
    uri: str
    upload_id: str
    ordinal: int
    size_in_bytes: int
    file: bytes

    def __init__(self, uri: str, upload_id: str, ordinal: int, size_in_bytes: int, file: bytes):
        self.uri = uri
        self.upload_id = upload_id
        self.ordinal = ordinal
        self.size_in_bytes = size_in_bytes
        self.file = file

    def __eq__(self, other):
        return self.uri == other.uri \
               and self.upload_id == other.upload_id \
               and self.ordinal == other.ordinal \
               and self.size_in_bytes == other.size_in_bytes \
               and self.file == other.file

    def __repr__(self):
        return {'uri': self.uri,
                'upload_id': self.upload_id,
                'ordinal': self.ordinal,
                'size_in_bytes': self.size_in_bytes,
                'file': self.file}

    def request_parameters(self) -> Dict[str, Any]:
        return {
            "uri": self.uri,
            "uploadId": self.upload_id,
            "ordinal": self.ordinal,
            "sizeInBytes": self.size_in_bytes
        }

    def data(self) -> bytes:
        return self.file
