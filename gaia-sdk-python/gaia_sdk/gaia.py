from dataclasses import dataclass
from typing import Callable, List

import rx
from rx.core.typing import Observable

from gaia_sdk.api.ISensorFunction import ISensorFunction
from gaia_sdk.graphql import RetrievalReq, ExperienceReq, KnowledgeReq, KnowledgeEdgeReq, \
    IntentReq, PromptReq, StatementReq, FulfilmentReq, CodeReq, BehaviourReq, IntrospectionReq, SkillIntrospectionReq, \
    PerceptionReq, PreservationReq, CreatedIntentImpulse, UpdatedIntentImpulse, DeletedIntentImpulse, RetrievalRes, \
    ExperienceRes, KnowledgeEdgeRes, StatementRes, PromptRes, IntentRes, KnowledgeRes, FulfilmentRes, CodeRes, \
    BehaviourRes, IntrospectionRes, SkillIntrospectionRes, PreservationRes, PerceptionRes, PerceivedImpulse, \
    PerceiveDataImpulse, PerceiveActionImpulse, DeleteIntentImpulse, \
    UpdateIntentImpulse, CreateIntentImpulse
from gaia_sdk.http.HttpSensorFunction import HttpSensorFunction


class Gaia:
    @staticmethod
    def connect(url: str, apiKey: str, apiSecret: str) -> 'GaiaRef':
        config = GaiaConfig(url, apiSecret, apiSecret, HttpSensorFunction(url, apiKey, apiSecret))
        return GaiaRef(config, config.functionProcessor)


@dataclass
class GaiaConfig:
    url: str
    apiKey: str
    apiSecret: str
    functionProcessor: ISensorFunction


@dataclass
class GaiaRef(ISensorFunction):
    config: GaiaConfig
    f_proc: ISensorFunction

    def retrieve(self, config: Callable[[RetrievalReq], None]) -> Observable[RetrievalRes]:
        return self.f_proc.retrieve(config)

    def retrieve_experience(self, config: Callable[[ExperienceReq], None]) -> Observable[ExperienceRes]:
        return self.f_proc.retrieve_experience(config)

    def retrieve_knowledge(self, config: Callable[[KnowledgeReq], None]) -> Observable[KnowledgeRes]:
        return self.f_proc.retrieve_knowledge(config)

    def retrieve_knowledge_edge(self, config: Callable[[KnowledgeEdgeReq], None]) -> Observable[KnowledgeEdgeRes]:
        return self.f_proc.retrieve_knowledge_edge(config)

    def retrieve_intents(self, config: Callable[[IntentReq], None]) -> Observable[IntentRes]:
        return self.f_proc.retrieve_intents(config)

    def retrieve_prompts(self, config: Callable[[PromptReq], None]) -> Observable[PromptRes]:
        return self.f_proc.retrieve_prompts(config)

    def retrieve_statements(self, config: Callable[[StatementReq], None]) -> Observable[StatementRes]:
        return self.f_proc.retrieve_statements(config)

    def retrieve_fulfilments(self, config: Callable[[FulfilmentReq], None]) -> Observable[FulfilmentRes]:
        return self.f_proc.retrieve_fulfilments(config)

    def retrieve_codes(self, config: Callable[[CodeReq], None]) -> Observable[CodeRes]:
        return self.f_proc.retrieve_codes(config)

    def retrieve_behaviour(self, config: Callable[[BehaviourReq], None]) -> Observable[BehaviourRes]:
        return self.f_proc.retrieve_behaviour(config)

    def introspect(self, config: Callable[[IntrospectionReq], None]) -> Observable[IntrospectionRes]:
        return self.f_proc.introspect(config)

    def introspect_skills(self, config: Callable[[SkillIntrospectionReq], None]) -> Observable[SkillIntrospectionRes]:
        return self.f_proc.introspect_skills(config)

    def preserve(self, config: Callable[[PreservationReq], None]) -> Observable[PreservationRes]:
        return self.f_proc.preserve(config)

    def preserve_create_intents(self, impulses: List[CreateIntentImpulse]) -> Observable[CreatedIntentImpulse]:
        return self.f_proc.preserve_create_intents(impulses)

    def preserve_update_intents(self, impulses: List[UpdateIntentImpulse]) -> Observable[UpdatedIntentImpulse]:
        return self.f_proc.preserve_update_intents(impulses)

    def preserve_delete_intents(self, impulses: List[DeleteIntentImpulse]) -> Observable[DeletedIntentImpulse]:
        return self.f_proc.preserve_delete_intents(impulses)

    def perceive(self, config: Callable[[PerceptionReq], None]) -> Observable[PerceptionRes]:
        return self.f_proc.perceive(config)

    def perceive_action(self, impulse: PerceiveActionImpulse) -> Observable[PerceivedImpulse]:
        return self.f_proc.perceive_action(impulse)

    def perceive_data(self, impulse: PerceiveDataImpulse) -> Observable[PerceivedImpulse]:
        return self.f_proc.perceive_data(impulse)
