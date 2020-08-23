from dataclasses import dataclass


@dataclass
class InitializedBinaryWrite:
    dictionary: dict

    @property
    def upload_id(self):
        return self.dictionary.get("uploadId")
