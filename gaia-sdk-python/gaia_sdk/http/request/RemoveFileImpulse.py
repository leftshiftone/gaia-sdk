class RemoveFileImpulse:
    uri: str

    def __init__(self, uri: str):
        self.uri = uri

    def __eq__(self, other):
        return self.uri == other.uri

    def __repr__(self):
        return {'uri': self.uri}
