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

    def cancel(self) -> Observable[SkillProvisionCanceledResponse]:
        request = {'uri': self._uri}
        return rx.from_callable(self._client.post_json(request, url_postfix="/skill/cancel"),
                                self._scheduler) \
            .pipe(
            ops.map(lambda response: json.loads(response.content)),
            ops.map(lambda r: SkillProvisionCanceledResponse(r["reference"])))

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
