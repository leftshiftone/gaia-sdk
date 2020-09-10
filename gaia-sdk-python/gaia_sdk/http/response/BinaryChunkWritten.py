class BinaryChunkWritten:
    dictionary: dict

    def __init__(self, dictionary: dict):
        self.dictionary = dictionary

    def __eq__(self, other):
        return self.dictionary == other.dictionary

    def __repr__(self):
        return {'dictionary': self.dictionary}

    @property
    def chunk_id(self) -> str:
        return self.dictionary.get("chunkId")
