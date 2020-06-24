from dataclasses import dataclass

@dataclass
class HMacCredentials:
    apiKey: str
    apiSecret: str

@dataclass
class JWTTokenCredentials:
    token : str