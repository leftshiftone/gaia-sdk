import json

import rx
import rx.operators as ops
from rx.core.typing import Observable, Scheduler

from gaia_sdk.http import GaiaStreamClient


class SkillProvisionCanceledResponse:
    def __init__(self, reference: str):
        self._reference = reference

    @property
    def reference(self) -> str:
        return self._reference


class SkillBuildResponse:
    def __init__(self, reference):
        self._reference = reference

    @property
    def reference(self) -> str:
        return self._reference


class SkillEvaluation:
    def __init__(self, response: dict):
        self._response = response

    @property
    def response(self):
        return self._response


class SkillRef:
    def __init__(self, uri: str, client: GaiaStreamClient, scheduler: Scheduler):
        self._uri = uri
        self._client = client
        self._scheduler = scheduler

    def start(self) -> Observable[any]:
        return rx.from_callable(lambda: self._client.post_json({'uri': self._uri}, url_postfix="/skill/start"),
                                self._scheduler) \
            .pipe(
            ops.map(lambda r: {})
        )

    def stop(self) -> Observable[any]:
        return rx.from_callable(lambda: self._client.post_json({'uri': self._uri}, url_postfix="/skill/stop"),
                                self._scheduler) \
            .pipe(
            ops.map(lambda r: {})
        )

    def logs(self, number_of_lines: int) -> Observable[str]:
        return rx.from_callable(lambda: self._client.post_json({'uri': self._uri, 'numberOfLines': number_of_lines},
                                                               url_postfix="/skill/logs"), self._scheduler) \
            .pipe(
            ops.map(lambda r: json.loads(r.content)),
            ops.flat_map(lambda r: rx.from_iterable(r['logLines']))
        )

    def cancel(self) -> Observable[SkillProvisionCanceledResponse]:
        return rx.from_callable(lambda: self._client.post_json({'uri': self._uri}, url_postfix="/skill/cancel"),
                                self._scheduler) \
            .pipe(
            ops.map(lambda r: json.loads(r.content)),
            ops.map(lambda r: SkillProvisionCanceledResponse(r["reference"]))
        )

    def build(self) -> Observable[SkillBuildResponse]:
        return rx.from_callable(lambda: self._client.post_json({'uri': self._uri}, url_postfix="/skill/build"),
                                self._scheduler) \
            .pipe(
            ops.map(lambda r: json.loads(r.content)),
            ops.map(lambda r: SkillBuildResponse(r["reference"]))
        )

    def evaluate(self, payload: dict, contract: str = None) -> Observable[SkillEvaluation]:
        request = {'uri': self._uri, 'payload': payload}
        if contract is not None:
            request['contract'] = contract
        return rx.from_callable(
            lambda: self._client.post_json(request, url_postfix="/skill/evaluate"),
            self._scheduler) \
            .pipe(
            ops.map(lambda response: json.loads(response.content)),
            ops.map(lambda d: SkillEvaluation(d)))
