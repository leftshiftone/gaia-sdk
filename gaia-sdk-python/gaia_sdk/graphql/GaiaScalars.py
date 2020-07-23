from dataclasses import dataclass


@dataclass
class UUID(object):
    value:str

    @staticmethod
    def random_uuid() -> 'UUID':
        import uuid
        return UUID(str(uuid.uuid4()))

    def to_string(self) -> str:
        return self.value

    def to_json(self):
        return self.value
