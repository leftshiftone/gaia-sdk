from typing import List


class CompleteBinaryWriteImpulse:
    uri: str
    uploadId: str
    chunks: List[str]

    def __init__(self, uri: str, uploadId: str, chunks: List[str]):
        self.uri = uri
        self.uploadId = uploadId
        self.chunks = chunks

    def __eq__(self, other):
        return self.uri == other.uri and self.uploadId == other.uploadId and self.chunks == other.chunks

    def __repr__(self):
        return {'uri': self.uri, 'uploadId': self.uploadId, 'chunks': self.chunks}
