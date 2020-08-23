from dataclasses import dataclass


@dataclass
class BinaryChunkWritten:
    dictionary: dict

    @property
    def chunk_id(self) -> str:
        return self.dictionary.get("chunkId")
