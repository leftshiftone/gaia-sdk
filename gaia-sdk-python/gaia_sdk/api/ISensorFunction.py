from abc import abstractmethod, ABC
from typing import Callable, List

import rx
from rx.core.typing import Observable

from gaia_sdk.graphql import RetrievalReq, ExperienceReq, KnowledgeReq, KnowledgeEdgeReq, \
    IntentReq, PromptReq, StatementReq, FulfilmentReq, CodeReq, BehaviourReq, IntrospectionReq, SkillIntrospectionReq, \
    PerceptionReq, PreservationReq, CreatedIntentImpulse, UpdatedIntentImpulse, DeletedIntentImpulse, RetrievalRes, \
    ExperienceRes, KnowledgeEdgeRes, StatementRes, PromptRes, IntentRes, KnowledgeRes, FulfilmentRes, CodeRes, \
    BehaviourRes, IntrospectionRes, SkillIntrospectionRes, PreservationRes, PerceptionRes, PerceivedImpulse, \
    DeleteIntentImpulse, UpdateIntentImpulse, CreateIntentImpulse, PerceiveActionImpulse, PerceiveDataImpulse,\
    CreatePromptImpulse, UpdatePromptImpulse, DeletePromptImpulse, CreatedPromptImpulse, UpdatedPromptImpulse, \
    DeletedPromptImpulse, CreateStatementImpulse, UpdateStatementImpulse, DeleteStatementImpulse,\
    CreatedStatementImpulse, UpdatedStatementImpulse, DeletedStatementImpulse, CreateFulfilmentImpulse, \
    UpdateFulfilmentImpulse, DeleteFulfilmentImpulse, CreatedFulfilmentImpulse, UpdatedFulfilmentImpulse, \
    DeletedFulfilmentImpulse, CreateBehaviourImpulse, UpdateBehaviourImpulse, DeleteBehaviourImpulse, \
    CreatedBehaviourImpulse, UpdatedBehaviourImpulse, DeletedBehaviourImpulse, CreateCodeImpulse, UpdateCodeImpulse, \
    DeleteCodeImpulse, CreatedCodeImpulse, UpdatedCodeImpulse, DeletedCodeImpulse


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
    def retrieve_knowledge_edge(self, config: Callable[[KnowledgeEdgeReq], None]) -> Observable[KnowledgeEdgeRes]:
        pass

    @abstractmethod
    def retrieve_intents(self, config: Callable[[IntentReq], None]) -> Observable[IntentRes]:
        pass

    @abstractmethod
    def retrieve_prompts(self, config: Callable[[PromptReq], None]) -> Observable[PromptRes]:
        pass

    @abstractmethod
    def retrieve_statements(self, config: Callable[[StatementReq], None]) -> Observable[StatementRes]:
        pass

    @abstractmethod
    def retrieve_fulfilments(self, config: Callable[[FulfilmentReq], None]) -> Observable[FulfilmentRes]:
        pass

    @abstractmethod
    def retrieve_codes(self, config: Callable[[CodeReq], None]) -> Observable[CodeRes]:
        pass

    @abstractmethod
    def retrieve_behaviour(self, config: Callable[[BehaviourReq], None]) -> Observable[BehaviourRes]:
        pass

    @abstractmethod
    def introspect(self, config: Callable[[IntrospectionReq], None]) -> Observable[IntrospectionRes]:
        pass

    @abstractmethod
    def introspect_skills(self, config: Callable[[SkillIntrospectionReq], None]) -> Observable[SkillIntrospectionRes]:
        pass

    @abstractmethod
    def preserve(self, config: Callable[[PreservationReq], None]) -> Observable[PreservationRes]:
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
    def perceive(self, config: Callable[[PerceptionReq], None]) -> Observable[PerceptionRes]:
        pass

    @abstractmethod
    def perceive_action(self, impulse: PerceiveActionImpulse) -> Observable[PerceivedImpulse]:
        pass

    @abstractmethod
    def perceive_data(self, impulse: PerceiveDataImpulse) -> Observable[PerceivedImpulse]:
        pass
