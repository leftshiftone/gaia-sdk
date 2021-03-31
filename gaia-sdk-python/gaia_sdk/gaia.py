from typing import Callable, List, Union

import requests
from rx.core.typing import Observable
from rx.scheduler import ThreadPoolScheduler

from gaia_sdk.api import ISensorStream, IdentityOp
from gaia_sdk.api.GaiaCredentials import UsernamePasswordCredentials, GaiaCredentials, JWTCredentials
from gaia_sdk.api.ISensorFunction import ISensorFunction
from gaia_sdk.api.SkillRef import SkillRef
from gaia_sdk.api.data.DataRef import DataRef
from gaia_sdk.graphql import RetrievalReq, ExperienceReq, KnowledgeReq, EdgeReq, \
    IntentReq, IdentityReq, PromptReq, StatementReq, FulfilmentReq, CodeReq, BehaviourReq, IntrospectionReq, \
    PerceptionReq, PreservationReq, CreatedIdentityImpulse, UpdatedIdentityImpulse, DeletedIdentityImpulse, \
    CreatedIntentImpulse, UpdatedIntentImpulse, DeletedIntentImpulse, RetrievalRes, \
    ExperienceRes, EdgeRes, StatementRes, PromptRes, IntentRes, IdentityRes, KnowledgeRes, FulfilmentRes, CodeRes, \
    BehaviourRes, IntrospectionRes, PreservationRes, PerceptionRes, PerceivedImpulse, \
    PerceiveDataImpulse, PerceiveActionImpulse, DeleteIdentityImpulse, UpdateIdentityImpulse, CreateIdentityImpulse, \
    DeleteIntentImpulse, UpdateIntentImpulse, CreateIntentImpulse, \
    CreatePromptImpulse, UpdatePromptImpulse, DeletePromptImpulse, CreatedPromptImpulse, UpdatedPromptImpulse, \
    DeletedPromptImpulse, CreateStatementImpulse, UpdateStatementImpulse, DeleteStatementImpulse, \
    CreatedStatementImpulse, UpdatedStatementImpulse, DeletedStatementImpulse, CreateFulfilmentImpulse, \
    UpdateFulfilmentImpulse, DeleteFulfilmentImpulse, CreatedFulfilmentImpulse, UpdatedFulfilmentImpulse, \
    DeletedFulfilmentImpulse, CreateBehaviourImpulse, UpdateBehaviourImpulse, DeleteBehaviourImpulse, \
    CreatedBehaviourImpulse, UpdatedBehaviourImpulse, DeletedBehaviourImpulse, CreateCodeImpulse, UpdateCodeImpulse, \
    DeleteCodeImpulse, CreatedCodeImpulse, UpdatedCodeImpulse, DeletedCodeImpulse, CreateEdgeImpulse, \
    DeleteEdgeImpulse, CreatedEdgeImpulse, DeletedEdgeImpulse, BehaviourExecutionRes, BehaviourExecutionReq, \
    BehaviourExecutionDetailReq, BehaviourExecutionDetailRes, \
    CreatedSkillBuildJobImpulseRes, CreatedSkillBuildJobImpulseReq, \
    CancelSkillBuildJobImpulse, CreateSkillBuildJobImpulse, CanceledSkillBuildJobImpulseRes, \
    CanceledSkillBuildJobImpulseReq, \
    PracticeReq, PracticeRes, SkillBuildJobRes, SkillBuildJobReq
from gaia_sdk.graphql.GaiaClientFactory import GaiaClientFactory
from gaia_sdk.http.GaiaStreamClientBuilder import GaiaStreamClientFactory
from gaia_sdk.http.HttpSensorFunction import HttpSensorFunction
from gaia_sdk.http.HttpSensorStream import HttpSensorStream
from gaia_sdk.http.response.LoggedIn import LoggedIn

Uuid = str


class Gaia:
    _pool = ThreadPoolScheduler(5)
    _client_factory = GaiaClientFactory()
    _stream_client_factory = GaiaStreamClientFactory()

    @classmethod
    def connect(cls, url: str, credentials: GaiaCredentials) -> 'GaiaRef':
        config = GaiaConfig(url, HttpSensorFunction(url, credentials, cls._pool, cls._client_factory),
                            HttpSensorStream(url, credentials, cls._pool, cls._stream_client_factory))
        return GaiaRef(config, config.functionProcessor, config.streamProcessor)

    @classmethod
    def login(cls, url: str, credentials: UsernamePasswordCredentials) -> 'GaiaRef':
        headers = {'Content-Type': 'application/json'}
        response = requests.post(f"{url}/api/auth/access", json=credentials.__repr__(), headers=headers)
        response.raise_for_status()
        return Gaia.connect(url, JWTCredentials(LoggedIn(response.json()).access_token))


class GaiaConfig:
    url: str
    functionProcessor: ISensorFunction
    streamProcessor: ISensorStream

    def __init__(self, url: str, functionProcessor: ISensorFunction, streamProcessor: ISensorStream):
        self.url = url
        self.functionProcessor = functionProcessor
        self.streamProcessor = streamProcessor

    def __eq__(self, other):
        return self.url == other.url

    def __repr__(self):
        return {'url': self.url}


class GaiaRef(ISensorFunction):  # TODO: implement ISensorStream
    config: GaiaConfig
    f_proc: ISensorFunction
    s_proc: ISensorStream

    def __init__(self, config: GaiaConfig, f_proc: ISensorFunction, s_proc: ISensorStream):
        self.config = config
        self.f_proc = f_proc
        self.s_proc = s_proc

    def __eq__(self, other):
        return self.config == other.config

    def __repr__(self):
        return {'config': self.config}

    def data(self, uri: str) -> DataRef:
        return self.s_proc.data(uri)

    def identity(self) -> IdentityOp:
        return self.s_proc.identity()

    def skill(self, url: str) -> SkillRef:
        return self.s_proc.skill(url)

    def retrieve(self, config: Callable[[RetrievalReq], None]) -> Observable[RetrievalRes]:
        return self.f_proc.retrieve(config)

    def retrieve_experience(self, config: Callable[[ExperienceReq], None]) -> Observable[ExperienceRes]:
        return self.f_proc.retrieve_experience(config)

    def retrieve_knowledge(self, config: Callable[[KnowledgeReq], None]) -> Observable[KnowledgeRes]:
        return self.f_proc.retrieve_knowledge(config)

    def retrieve_edges(self, source: Uuid, config: Callable[[EdgeReq], None], limit: int = None, offset: int = None) -> \
            Observable[EdgeRes]:
        return self.f_proc.retrieve_edges(source, config, limit, offset)

    def retrieve_edge(self, source: Uuid, edgeId: Uuid, config: Callable[[EdgeReq], None]) -> Observable[EdgeRes]:
        return self.f_proc.retrieve_edge(source, edgeId, config)

    def retrieve_identities(self, config: Callable[[IdentityReq], None], limit: int = None, offset: int = None) -> \
            Observable[IdentityRes]:
        return self.f_proc.retrieve_identities(config, limit, offset)

    def retrieve_identity(self, identityId: Uuid, config: Callable[[IdentityReq], None]) -> Observable[IdentityRes]:
        return self.f_proc.retrieve_identity(identityId, config)

    def retrieve_intents(self, identityId: Uuid, config: Callable[[IntentReq], None], limit: int = None,
                         offset: int = None) -> Observable[IntentRes]:
        return self.f_proc.retrieve_intents(identityId, config, limit, offset)

    def retrieve_intent(self, identityId: Uuid, reference: Uuid, config: Callable[[IntentReq], None]) -> Observable[
        IntentRes]:
        return self.f_proc.retrieve_intent(identityId, reference, config)

    def retrieve_prompts(self, identityId: Uuid, config: Callable[[PromptReq], None], limit: int = None,
                         offset: int = None) -> Observable[PromptRes]:
        return self.f_proc.retrieve_prompts(identityId, config, limit, offset)

    def retrieve_prompt(self, identityId: Uuid, reference: Uuid, config: Callable[[PromptReq], None]) -> Observable[
        PromptRes]:
        return self.f_proc.retrieve_prompt(identityId, reference, config)

    def retrieve_statements(self, identityId: Uuid, config: Callable[[StatementReq], None], limit: int = None,
                            offset: int = None) -> Observable[StatementRes]:
        return self.f_proc.retrieve_statements(identityId, config, limit, offset)

    def retrieve_statement(self, identityId: Uuid, reference: Uuid, config: Callable[[StatementReq], None]) -> \
            Observable[StatementRes]:
        return self.f_proc.retrieve_statement(identityId, reference, config)

    def retrieve_fulfilments(self, identityId: Uuid, config: Callable[[FulfilmentReq], None], limit: int = None,
                             offset: int = None) -> Observable[FulfilmentRes]:
        return self.f_proc.retrieve_fulfilments(identityId, config, limit, offset)

    def retrieve_fulfilment(self, identityId: Uuid, reference: Uuid, config: Callable[[FulfilmentReq], None]) -> \
            Observable[FulfilmentRes]:
        return self.f_proc.retrieve_fulfilment(identityId, reference, config)

    def retrieve_codes(self, identityId: Uuid, config: Callable[[CodeReq], None], limit: int = None,
                       offset: int = None) -> Observable[CodeRes]:
        return self.f_proc.retrieve_codes(identityId, config, limit, offset)

    def retrieve_code(self, identityId: Uuid, reference: Uuid, config: Callable[[CodeReq], None]) -> Observable[
        CodeRes]:
        return self.f_proc.retrieve_code(identityId, reference, config)

    def retrieve_behaviours(self, identityId: Uuid, config: Callable[[BehaviourReq], None], limit: int = None,
                            offset: int = None) -> Observable[BehaviourRes]:
        return self.f_proc.retrieve_behaviours(identityId, config, limit, offset)

    def retrieve_behaviour(self, identityId: Uuid, reference: Uuid, config: Callable[[BehaviourReq], None]) -> \
            Observable[BehaviourRes]:
        return self.f_proc.retrieve_behaviour(identityId, reference, config)

    def retrieve_behaviour_executions(self, identity_id: Uuid, config: Callable[[BehaviourExecutionReq], None],
                                      limit: int = None, offset: int = None, startDate: str = None, endDate: str = None) \
            -> Observable[BehaviourExecutionRes]:
        return self.f_proc.retrieve_behaviour_executions(identity_id, config, limit, offset, startDate, endDate)

    def retrieve_behaviour_execution(self, identity_id: Uuid, process_instance_id: Uuid,
                                     config: Callable[[BehaviourExecutionDetailReq], None]) -> Observable[
        BehaviourExecutionDetailRes]:
        return self.f_proc.retrieve_behaviour_execution(identity_id, process_instance_id, config)

    def introspect(self, config: Callable[[IntrospectionReq], None]) -> Observable[IntrospectionRes]:
        return self.f_proc.introspect(config)

    def preserve(self, config: Callable[[PreservationReq], None]) -> Observable[PreservationRes]:
        return self.f_proc.preserve(config)

    def preserve_create_identities(self, impulses: List[CreateIdentityImpulse]) -> Observable[CreatedIdentityImpulse]:
        return self.f_proc.preserve_create_identities(impulses)

    def preserve_update_identities(self, impulses: List[UpdateIdentityImpulse]) -> Observable[UpdatedIdentityImpulse]:
        return self.f_proc.preserve_update_identities(impulses)

    def preserve_delete_identities(self, impulses: List[DeleteIdentityImpulse]) -> Observable[DeletedIdentityImpulse]:
        return self.f_proc.preserve_delete_identities(impulses)

    def preserve_create_intents(self, impulses: List[CreateIntentImpulse]) -> Observable[CreatedIntentImpulse]:
        return self.f_proc.preserve_create_intents(impulses)

    def preserve_update_intents(self, impulses: List[UpdateIntentImpulse]) -> Observable[UpdatedIntentImpulse]:
        return self.f_proc.preserve_update_intents(impulses)

    def preserve_delete_intents(self, impulses: List[DeleteIntentImpulse]) -> Observable[DeletedIntentImpulse]:
        return self.f_proc.preserve_delete_intents(impulses)

    def preserve_create_prompts(self, impulses: List[CreatePromptImpulse]) -> Observable[CreatedPromptImpulse]:
        return self.f_proc.preserve_create_prompts(impulses)

    def preserve_update_prompts(self, impulses: List[UpdatePromptImpulse]) -> Observable[UpdatedPromptImpulse]:
        return self.f_proc.preserve_update_prompts(impulses)

    def preserve_delete_prompts(self, impulses: List[DeletePromptImpulse]) -> Observable[DeletedPromptImpulse]:
        return self.f_proc.preserve_delete_prompts(impulses)

    def preserve_create_statements(self, impulses: List[CreateStatementImpulse]) -> Observable[CreatedStatementImpulse]:
        return self.f_proc.preserve_create_statements(impulses)

    def preserve_update_statements(self, impulses: List[UpdateStatementImpulse]) -> Observable[UpdatedStatementImpulse]:
        return self.f_proc.preserve_update_statements(impulses)

    def preserve_delete_statements(self, impulses: List[DeleteStatementImpulse]) -> Observable[DeletedStatementImpulse]:
        return self.f_proc.preserve_delete_statements(impulses)

    def preserve_create_fulfilments(self, impulses: List[CreateFulfilmentImpulse]) -> Observable[
        CreatedFulfilmentImpulse]:
        return self.f_proc.preserve_create_fulfilments(impulses)

    def preserve_update_fulfilments(self, impulses: List[UpdateFulfilmentImpulse]) -> Observable[
        UpdatedFulfilmentImpulse]:
        return self.f_proc.preserve_update_fulfilments(impulses)

    def preserve_delete_fulfilments(self, impulses: List[DeleteFulfilmentImpulse]) -> Observable[
        DeletedFulfilmentImpulse]:
        return self.f_proc.preserve_delete_fulfilments(impulses)

    def preserve_create_behaviours(self, impulses: List[CreateBehaviourImpulse]) -> Observable[CreatedBehaviourImpulse]:
        return self.f_proc.preserve_create_behaviours(impulses)

    def preserve_update_behaviours(self, impulses: List[UpdateBehaviourImpulse]) -> Observable[UpdatedBehaviourImpulse]:
        return self.f_proc.preserve_update_behaviours(impulses)

    def preserve_delete_behaviours(self, impulses: List[DeleteBehaviourImpulse]) -> Observable[DeletedBehaviourImpulse]:
        return self.f_proc.preserve_delete_behaviours(impulses)

    def preserve_create_codes(self, impulses: List[CreateCodeImpulse]) -> Observable[CreatedCodeImpulse]:
        return self.f_proc.preserve_create_codes(impulses)

    def preserve_update_codes(self, impulses: List[UpdateCodeImpulse]) -> Observable[UpdatedCodeImpulse]:
        return self.f_proc.preserve_update_codes(impulses)

    def preserve_delete_codes(self, impulses: List[DeleteCodeImpulse]) -> Observable[DeletedCodeImpulse]:
        return self.f_proc.preserve_delete_codes(impulses)

    def preserve_create_edges(self, impulses: List[CreateEdgeImpulse]) -> Observable[CreatedEdgeImpulse]:
        return self.f_proc.preserve_create_edges(impulses)

    def preserve_delete_edges(self, impulses: List[DeleteEdgeImpulse]) -> Observable[DeletedEdgeImpulse]:
        return self.f_proc.preserve_delete_edges(impulses)

    def perceive(self, config: Callable[[PerceptionReq], None]) -> Observable[PerceptionRes]:
        return self.f_proc.perceive(config)

    def perceive_action(self, impulse: PerceiveActionImpulse) -> Observable[PerceivedImpulse]:
        return self.f_proc.perceive_action(impulse)

    def perceive_data(self, impulse: PerceiveDataImpulse) -> Observable[PerceivedImpulse]:
        return self.f_proc.perceive_data(impulse)

    def practice(self, config: Callable[[PracticeReq], None]) -> Observable[PracticeRes]:
        return self.f_proc.practice(config)

    def practice_build(self, impulse: CreateSkillBuildJobImpulse,
                       config: Union[Callable[[CreatedSkillBuildJobImpulseReq], None], None] = None) -> Observable[
        CreatedSkillBuildJobImpulseRes]:
        return self.f_proc.practice_build(impulse, config)

    def practice_cancel(self, impulse: CancelSkillBuildJobImpulse,
                        config: Union[Callable[[CanceledSkillBuildJobImpulseReq], None], None] = None) -> Observable[
        CanceledSkillBuildJobImpulseRes]:
        return self.f_proc.practice_cancel(impulse, config)

    def introspect_build_jobs(self, tenant_id: Uuid, config: Union[Callable[[SkillBuildJobReq], None], None] = None) -> \
            Observable[SkillBuildJobRes]:
        return self.f_proc.introspect_build_jobs(tenant_id, config)
