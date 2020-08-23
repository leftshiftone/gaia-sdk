from dataclasses import dataclass
from typing import ClassVar


@dataclass
class Payload:
    JSON: ClassVar[str] = "json"
    FORM_DATA: ClassVar[str] = "form_data"

    data: dict
    payload_type: str

    @staticmethod
    def json(data: dict):
        return Payload(data, Payload.JSON)

    @staticmethod
    def form_data(data: dict):
        return Payload(data, Payload.FORM_DATA)
