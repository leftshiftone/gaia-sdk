from abc import abstractmethod, ABC
from typing import Callable, List, Union

from rx.core.typing import Observable

from gaia_sdk.graphql import RetrievalReq, ExperienceReq, KnowledgeReq, EdgeReq, \
    IdentityReq, IntentReq, PromptReq, StatementReq, FulfilmentReq, CodeReq, BehaviourReq, IntrospectionReq, \
    PerceptionReq, PreservationReq, CreatedIdentityImpulse, UpdatedIdentityImpulse, DeletedIdentityImpulse, \
    CreatedIntentImpulse, UpdatedIntentImpulse, DeletedIntentImpulse, RetrievalRes, \
    ExperienceRes, EdgeRes, StatementRes, PromptRes, IntentRes, IdentityRes, KnowledgeRes, FulfilmentRes, CodeRes, \
    BehaviourRes, IntrospectionRes, PreservationRes, PerceptionRes, PerceivedImpulse, \
    DeleteIdentityImpulse, UpdateIdentityImpulse, CreateIdentityImpulse, DeleteIntentImpulse, UpdateIntentImpulse, \
    CreateIntentImpulse, \
    PerceiveActionImpulse, PerceiveDataImpulse, \
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

Uuid = str

class ISensorFunction(ABC):

    @abstractmethod
    def retrieve(self, config: Callable[[RetrievalReq], None]) -> Observable[RetrievalRes]:
        pass

    @abstractmethod
    def retrieve_experience(self, config: Callable[[ExperienceReq], None]) -> Observable[ExperienceRes]:
        pass

    @abstractmethod
    def retrieve_knowledge(self, config: Callable[[KnowledgeReq], None]) -> Observable[KnowledgeRes]:
        pass

    @abstractmethod
    def retrieve_edges(self, source: Uuid, config: Callable[[EdgeReq], None], limit: int, offset: int) -> Observable[EdgeRes]:
        pass

    @abstractmethod
    def retrieve_edge(self, source: Uuid, edgeId: Uuid, config: Callable[[EdgeReq], None]) -> Observable[EdgeRes]:
        pass

    @abstractmethod
    def retrieve_identities(self, config: Callable[[IdentityReq], None], limit: int, offset: int) -> Observable[IdentityRes]:
        pass

    @abstractmethod
    def retrieve_identity(self, identity_id: Uuid, config: Callable[[IdentityReq], None]) -> Observable[IdentityRes]:
        pass

    @abstractmethod
    def retrieve_intents(self, identityId: Uuid, config: Callable[[IntentReq], None], limit: int, offset: int) -> Observable[IntentRes]:
        pass

    @abstractmethod
    def retrieve_intent(self, identity_id: Uuid, reference: Uuid, config: Callable[[IntentReq], None]) -> Observable[IntentRes]:
        pass

    @abstractmethod
    def retrieve_prompts(self, identity_id: Uuid, config: Callable[[PromptReq], None], limit: int, offset: int) -> Observable[PromptRes]:
        pass

    @abstractmethod
    def retrieve_prompt(self, identity_id: Uuid, reference: Uuid,  config: Callable[[PromptReq], None]) -> Observable[PromptRes]:
        pass

    @abstractmethod
    def retrieve_statements(self, identity_id: Uuid, config: Callable[[StatementReq], None], limit: int, offset: int) -> Observable[StatementRes]:
        pass

    @abstractmethod
    def retrieve_statement(self, identity_id: Uuid, reference: Uuid, config: Callable[[StatementReq], None]) -> Observable[StatementRes]:
        pass

    @abstractmethod
    def retrieve_fulfilments(self, identity_id: Uuid, config: Callable[[FulfilmentReq], None], limit: int, offset: int) -> Observable[FulfilmentRes]:
        pass

    @abstractmethod
    def retrieve_fulfilment(self, identity_id: Uuid, reference: Uuid, config: Callable[[FulfilmentReq], None]) -> Observable[FulfilmentRes]:
        pass

    @abstractmethod
    def retrieve_codes(self, identity_id: Uuid, config: Callable[[CodeReq], None], limit: int, offset: int) -> Observable[CodeRes]:
        pass

    @abstractmethod
    def retrieve_code(self, identity_id: Uuid, reference: Uuid, config: Callable[[CodeReq], None]) -> Observable[CodeRes]:
        pass

    @abstractmethod
    def retrieve_behaviours(self, identity_id: Uuid, config: Callable[[BehaviourReq], None], limit: int, offset: int) -> Observable[BehaviourRes]:
        pass

    @abstractmethod
    def retrieve_behaviour(self, identity_id: Uuid, reference: Uuid, config: Callable[[BehaviourReq], None]) -> Observable[BehaviourRes]:
        pass

    @abstractmethod
    def retrieve_behaviour_execution(self, identity_id: Uuid, process_instance_id: Uuid, config: Callable[[BehaviourExecutionDetailReq], None]) \
            -> Observable[BehaviourExecutionDetailRes]:
        pass

    @abstractmethod
    def retrieve_behaviour_executions(self, identity_id: Uuid, config: Callable[[BehaviourExecutionReq], None], limit: int = None, offset: int = None, startDate: str = None, endDate: str = None) \
            -> Observable[BehaviourExecutionRes]:
        pass

    @abstractmethod
    def introspect(self, config: Callable[[IntrospectionReq], None]) -> Observable[IntrospectionRes]:
        pass

    @abstractmethod
    def preserve(self, config: Callable[[PreservationReq], None]) -> Observable[PreservationRes]:
        pass

    @abstractmethod
    def preserve_create_identities(self, impulses: List[CreateIdentityImpulse]) -> Observable[CreatedIdentityImpulse]:
        pass

    @abstractmethod
    def preserve_update_identities(self, impulses: List[UpdateIdentityImpulse]) -> Observable[UpdatedIdentityImpulse]:
        pass

    @abstractmethod
    def preserve_delete_identities(self, impulses: List[DeleteIdentityImpulse]) -> Observable[DeletedIdentityImpulse]:
        pass

    @abstractmethod
    def preserve_create_intents(self, impulses: List[CreateIntentImpulse]) -> Observable[CreatedIntentImpulse]:
        pass

    @abstractmethod
    def preserve_update_intents(self, impulses: List[UpdateIntentImpulse]) -> Observable[UpdatedIntentImpulse]:
        pass

    @abstractmethod
    def preserve_delete_intents(self, impulses: List[DeleteIntentImpulse]) -> Observable[DeletedIntentImpulse]:
        pass

    @abstractmethod
    def preserve_create_prompts(self, impulses: List[CreatePromptImpulse]) -> Observable[CreatedPromptImpulse]:
        pass

    @abstractmethod
    def preserve_update_prompts(self, impulses: List[UpdatePromptImpulse]) -> Observable[UpdatedPromptImpulse]:
        pass

    @abstractmethod
    def preserve_delete_prompts(self, impulses: List[DeletePromptImpulse]) -> Observable[DeletedPromptImpulse]:
        pass

    @abstractmethod
    def preserve_create_statements(self, impulses: List[CreateStatementImpulse]) -> Observable[CreatedStatementImpulse]:
        pass

    @abstractmethod
    def preserve_update_statements(self, impulses: List[UpdateStatementImpulse]) -> Observable[UpdatedStatementImpulse]:
        pass

    @abstractmethod
    def preserve_delete_statements(self, impulses: List[DeleteStatementImpulse]) -> Observable[DeletedStatementImpulse]:
        pass

    @abstractmethod
    def preserve_create_fulfilments(self, impulses: List[CreateFulfilmentImpulse]) -> Observable[CreatedFulfilmentImpulse]:
        pass

    @abstractmethod
    def preserve_update_fulfilments(self, impulses: List[UpdateFulfilmentImpulse]) -> Observable[UpdatedFulfilmentImpulse]:
        pass

    @abstractmethod
    def preserve_delete_fulfilments(self, impulses: List[DeleteFulfilmentImpulse]) -> Observable[DeletedFulfilmentImpulse]:
        pass

    @abstractmethod
    def preserve_create_behaviours(self, impulses: List[CreateBehaviourImpulse]) -> Observable[CreatedBehaviourImpulse]:
        pass

    @abstractmethod
    def preserve_update_behaviours(self, impulses: List[UpdateBehaviourImpulse]) -> Observable[UpdatedBehaviourImpulse]:
        pass

    @abstractmethod
    def preserve_delete_behaviours(self, impulses: List[DeleteBehaviourImpulse]) -> Observable[DeletedBehaviourImpulse]:
        pass

    @abstractmethod
    def preserve_create_codes(self, impulses: List[CreateCodeImpulse]) -> Observable[CreatedCodeImpulse]:
        pass

    @abstractmethod
    def preserve_update_codes(self, impulses: List[UpdateCodeImpulse]) -> Observable[UpdatedCodeImpulse]:
        pass

    @abstractmethod
    def preserve_delete_codes(self, impulses: List[DeleteCodeImpulse]) -> Observable[DeletedCodeImpulse]:
        pass

    @abstractmethod
    def preserve_create_edges(self, impulses: List[CreateEdgeImpulse]) -> Observable[CreatedEdgeImpulse]:
        pass

    @abstractmethod
    def preserve_delete_edges(self, impulses: List[DeleteEdgeImpulse]) -> Observable[DeletedEdgeImpulse]:
        pass

    @abstractmethod
    def perceive(self, config: Callable[[PerceptionReq], None]) -> Observable[PerceptionRes]:
        pass

    @abstractmethod
    def perceive_action(self, impulse: PerceiveActionImpulse) -> Observable[PerceivedImpulse]:
        pass

    @abstractmethod
    def perceive_data(self, impulse: PerceiveDataImpulse) -> Observable[PerceivedImpulse]:
        pass

    @abstractmethod
    def practice(self, config: Callable[[PracticeReq], None]) -> Observable[PracticeRes]:
        pass

    @abstractmethod
    def practice_build(self, impulse: CreateSkillBuildJobImpulse, config: Union[Callable[[CreatedSkillBuildJobImpulseReq], None], None] = None) -> Observable[CreatedSkillBuildJobImpulseRes]:
        pass

    @abstractmethod
    def practice_cancel(self, impulse: CancelSkillBuildJobImpulse, config: Union[Callable[[CanceledSkillBuildJobImpulseReq], None], None] = None) -> Observable[CanceledSkillBuildJobImpulseRes]:
        pass

    @abstractmethod
    def introspect_build_jobs(self, tenant_id: Uuid, config: Union[Callable[[SkillBuildJobReq], None], None] = None) -> Observable[SkillBuildJobRes]:
        pass