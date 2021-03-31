import time
from abc import ABC, abstractmethod

from gaia_sdk.api.client_options import ClientOptions
from gaia_sdk.graphql.GaiaScalars import UUID
from gaia_sdk.http.HMACTokenBuilder import HMACTokenBuilder


class GaiaCredentials(ABC):
    @abstractmethod
    def create_auth_header(self, options: ClientOptions, payload: str) -> str:
        pass


class UsernamePasswordCredentials(GaiaCredentials):
    username: str
    password: str

    def __init__(self, username: str, password: str):
        self.username = username
        self.password = password

    def __eq__(self, other):
        return self.username == other.username and self.password == other.password

    def __repr__(self):
        return {'username': self.username, 'password': self.password}

    def create_auth_header(self, options, payload) -> str:
        raise NotImplementedError("Creating an authentication string is not implemented for the used credentials.")


class HMACCredentials(GaiaCredentials):
    apiKey: str
    apiSecret: str

    def __init__(self, apiKey: str, apiSecret: str):
        self.apiKey = apiKey
        self.apiSecret = apiSecret

    def __eq__(self, other):
        return self.apiKey == other.apiKey and self.apiSecret == other.apiSecret

    def __repr__(self):
        return {'apiKey': self.apiKey, 'apiSecret': self.apiSecret}

    def create_auth_header(self, options, payload) -> str:
        timestamp = int(round(time.time()))
        nonce = UUID.random_uuid().value
        return HMACTokenBuilder().with_timestamp(timestamp) \
            .with_client_options(options) \
            .with_nonce(nonce) \
            .with_payload(payload).build()


class JWTCredentials(GaiaCredentials):
    token: str

    def __init__(self, token):
        self.token = token

    def __eq__(self, other):
        return self.token == other.token

    def __repr__(self):
        return {'token': self.token}

    def create_auth_header(self, options, payload) -> str:
        return "Bearer " + options.credentials.token
