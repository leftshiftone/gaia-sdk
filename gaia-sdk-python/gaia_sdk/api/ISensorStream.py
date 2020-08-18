from abc import abstractmethod, ABC


class ISensorStream(ABC):
    @abstractmethod
    def data(self, uri: str):
        pass
