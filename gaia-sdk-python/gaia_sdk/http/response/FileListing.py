from dataclasses import dataclass


@dataclass
class FileListing:
    dictionary: dict

    @property
    def tenant(self):
        return self.dictionary.get("tenant")

    @property
    def file_path(self):
        return self.dictionary.get("file_path")
