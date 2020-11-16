from abc import abstractmethod, ABC

from gaia_sdk.api.SkillRef import SkillRef


class ISensorStream(ABC):
    @abstractmethod
    def data(self, uri: str):
        pass

    @abstractmethod
    def identity(self):
        pass

    @abstractmethod
    def skill(self, uri: str) -> SkillRef:
        pass
