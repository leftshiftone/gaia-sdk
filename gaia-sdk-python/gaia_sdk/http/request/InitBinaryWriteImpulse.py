class InitBinaryWriteImpulse:
    uri: str
    override: bool

    def __init__(self, uri: str, override: bool):
        self.uri = uri
        self.override = override

    def __eq__(self, other):
        return self.uri == other.uri \
               and self.override == other.override

    def __repr__(self):
        return {'uri': self.uri,
                'override': self.override}
