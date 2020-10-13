from rx.core.abc import Scheduler

from gaia_sdk.api.DataRef import DataRef
from gaia_sdk.api.ISensorStream import ISensorStream
from gaia_sdk.api.SkillRef import SkillRef
from gaia_sdk.http.GaiaStreamClientBuilder import GaiaStreamClientBuilder


class HttpSensorStream(ISensorStream):

    def __init__(self, url: str, credentials, scheduler: Scheduler):
        self._client = GaiaStreamClientBuilder.http(url + "/api").with_credentials(credentials).build()
        self._scheduler = scheduler

    def data(self, uri: str):
        return DataRef(uri, self._client)

    def skill(self, uri: str) -> SkillRef:
        return SkillRef(uri, self._client, self._scheduler)
