class FileListing:
    dictionary: dict

    def __init__(self, dictionary: dict):
        self.dictionary = dictionary

    def __eq__(self, other):
        return self.dictionary == other.dictionary

    def __repr__(self):
        return {'dictionary': self.dictionary}

    @property
    def tenant(self):
        return self.dictionary.get("tenant")

    @property
    def file_path(self):
        return self.dictionary.get("file_path")
