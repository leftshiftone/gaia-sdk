from dataclasses import dataclass


@dataclass
class FileRemoved:
    dictionary: dict

    @property
    def file_existed(self) -> bool:
        return self.dictionary.get("fileExisted")
