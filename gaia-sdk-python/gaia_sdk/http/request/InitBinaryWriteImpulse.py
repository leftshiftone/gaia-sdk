class InitBinaryWriteImpulse:
    uri: str
    totalNumberOfChunks: int
    totalSizeInBytes: int
    override: bool

    def __init__(self, uri: str, totalNumberOfChunks: int, totalSizeInBytes: int, override: bool):
        self.uri = uri
        self.totalNumberOfChunks = totalNumberOfChunks
        self.totalSizeInBytes = totalSizeInBytes
        self.override = override

    def __eq__(self, other):
        return self.uri == other.uri \
               and self.totalNumberOfChunks == other.totalNumberOfChunks \
               and self.totalSizeInBytes == other.totalSizeInBytes \
               and self.override == other.override

    def __repr__(self):
        return {'uri': self.uri,
                'totalNumberOfChunks': self.totalNumberOfChunks,
                'totalSizeInBytes': self.totalSizeInBytes,
                'override': self.override}
