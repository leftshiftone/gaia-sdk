from abc import abstractmethod, ABC
from typing import Callable, List

import rx
from rx.core.typing import Observable

from gaia_sdk.graphql import RetrievalReq, ExperienceReq, KnowledgeReq, KnowledgeEdgeReq, \
    IntentReq, PromptReq, StatementReq, FulfilmentReq, CodeReq, BehaviourReq, IntrospectionReq, SkillIntrospectionReq, \
    PerceptionReq, PreservationReq, CreatedIntentImpulse, UpdatedIntentImpulse, DeletedIntentImpulse, RetrievalRes, \
    ExperienceRes, KnowledgeEdgeRes, StatementRes, PromptRes, IntentRes, KnowledgeRes, FulfilmentRes, CodeRes, \
    BehaviourRes, IntrospectionRes, SkillIntrospectionRes, PreservationRes, PerceptionRes, PerceivedImpulse, \
    DeleteIntentImpulse, UpdateIntentImpulse, CreateIntentImpulse, PerceiveActionImpulse, PerceiveDataImpulse


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
    def perceive(self, config: Callable[[PerceptionReq], None]) -> Observable[PerceptionRes]:
        pass

    @abstractmethod
    def perceive_action(self, impulse: PerceiveActionImpulse) -> Observable[PerceivedImpulse]:
        pass

    @abstractmethod
    def perceive_data(self, impulse: PerceiveDataImpulse) -> Observable[PerceivedImpulse]:
        pass
