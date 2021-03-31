from abc import ABC, abstractmethod
from pathlib import Path


class DataUploadContent(ABC):
    @property
    @abstractmethod
    def total_size_in_bytes(self) -> int:
        pass

    @abstractmethod
    def get_next_chunk(self, size: int) -> bytes:
        pass

    @abstractmethod
    def close(self) -> None:
        pass


class DataUploadContentBytes(DataUploadContent):
    def __init__(self, content: bytes) -> None:
        self._content = content
        self._offset = -1

    @property
    def total_size_in_bytes(self) -> int:
        return len(self._content)

    def get_next_chunk(self, size: int) -> bytes:
        self._offset += 1
        return self._content[self._offset * size:min((self._offset + 1) * size, len(self._content))]

    def close(self) -> None:
        # Not needed in bytes class, only in DataUploadContentPath implementation
        pass


class DataUploadContentPath(DataUploadContent):
    def __init__(self, content: Path) -> None:
        self._content = content
        self._binary_io = open(self._content, "rb")

    @property
    def total_size_in_bytes(self) -> int:
        return self._content.stat().st_size

    def get_next_chunk(self, size: int) -> bytes:
        return self._binary_io.read(size)

    def close(self) -> None:
        self._binary_io.close()
