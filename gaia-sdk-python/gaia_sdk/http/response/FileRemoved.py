class FileRemoved:
    dictionary: dict

    def __init__(self, dictionary: dict):
        self.dictionary = dictionary

    def __eq__(self, other):
        return self.dictionary == other.dictionary

    def __repr__(self):
        return {'dictionary': self.dictionary}

    @property
    def file_existed(self) -> bool:
        return self.dictionary.get("fileExisted")
