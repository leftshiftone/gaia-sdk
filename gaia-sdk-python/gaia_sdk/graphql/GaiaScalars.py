class UUID(object):
    value: str

    def __init__(self, value: str):
        self.value = value

    def __eq__(self, other):
        return self.value == other.value

    def __repr__(self):
        return {'value': self.value}

    @staticmethod
    def random_uuid() -> 'UUID':
        import uuid
        return UUID(str(uuid.uuid4()))

    def to_string(self) -> str:
        return self.value

    def to_json(self):
        return self.value
