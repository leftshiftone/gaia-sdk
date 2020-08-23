from dataclasses import dataclass


@dataclass
class InitBinaryWriteImpulse:
    uri: str
    totalNumberOfChunks: int
    totalSizeInBytes: int
    override: bool
