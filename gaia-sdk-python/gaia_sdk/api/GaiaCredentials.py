import json
import time
from abc import ABC, abstractmethod
from dataclasses import dataclass

from gaia_sdk.api.client_options import ClientOptions
from gaia_sdk.graphql.GaiaScalars import UUID
from gaia_sdk.http.HMACTokenBuilder import HMACTokenBuilder


class GaiaCredentials(ABC):
    @abstractmethod
    def create_auth_header(self, options: ClientOptions, payload: str) -> str:
        pass


@dataclass
class UsernamePasswordCredentials(GaiaCredentials):
    username: str
    password: str

    def create_auth_header(self, options, payload: str) -> str:
        raise NotImplementedError("Creating an authentication string is not implemented for the used credentials.")


@dataclass
class HMACCredentials(GaiaCredentials):
    apiKey: str
    apiSecret: str

    def create_auth_header(self, options, payload: str) -> str:
        timestamp = int(round(time.time()))
        nonce = UUID.random_uuid().value
        return HMACTokenBuilder().with_timestamp(timestamp) \
            .with_client_options(options) \
            .with_nonce(nonce) \
            .with_payload(json.dumps(payload)).build()


@dataclass
class JWTCredentials(GaiaCredentials):
    token: str

    def create_auth_header(self, options, payload: str) -> str:
        return "Bearer " + options.credentials.token
