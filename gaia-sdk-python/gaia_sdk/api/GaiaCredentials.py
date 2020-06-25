from dataclasses import dataclass

@dataclass
class HMACCredentials:
    apiKey: str
    apiSecret: str

@dataclass
class JWTCredentials:
    token : str