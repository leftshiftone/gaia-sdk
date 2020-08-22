from dataclasses import dataclass


@dataclass
class LoggedIn:
    dictionary: dict

    @property
    def access_token(self) -> str:
        return self.dictionary.get("accessToken")
