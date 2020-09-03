from typing import ClassVar


class Payload:
    JSON: ClassVar[str] = "json"
    FORM_DATA: ClassVar[str] = "form_data"

    data: dict
    payload_type: str

    def __init__(self, data: dict, payload_type: str):
        self.data = data
        self.payload_type = payload_type

    def __eq__(self, other):
        return self.data == other.data and self.payload_type == other.payload_type

    def __repr__(self):
        return {'data': self.data, 'payload_type': self.payload_type}

    @staticmethod
    def json(data: dict):
        return Payload(data, Payload.JSON)

    @staticmethod
    def form_data(data: dict):
        return Payload(data, Payload.FORM_DATA)
