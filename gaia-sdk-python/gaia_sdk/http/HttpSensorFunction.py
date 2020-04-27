from typing import Callable, List

import rx
from rx.core.typing import Observable

from gaia_sdk.api.ISensorFunction import ISensorFunction
from gaia_sdk.api.rx.rx import mapQ, mapM
from gaia_sdk.graphql import QueryReq, QueryRes, RetrievalReq, ExperienceReq, KnowledgeReq, KnowledgeEdgeReq, \
    IntentReq, PromptReq, StatementReq, FulfilmentReq, CodeReq, BehaviourReq, IntrospectionReq, SkillIntrospectionReq, \
    PerceptionReq, PreservationReq, CreatedIntentImpulse, UpdatedIntentImpulse, DeletedIntentImpulse, RetrievalRes, \
    ExperienceRes, KnowledgeEdgeRes, StatementRes, PromptRes, IntentRes, KnowledgeRes, FulfilmentRes, CodeRes, \
    BehaviourRes, IntrospectionRes, SkillIntrospectionRes, PreservationRes, PerceptionRes, PerceivedImpulse, \
    MutationReq, MutationRes, PerceiveDataImpulse, PerceiveActionImpulse, DeleteIntentImpulse, \
    UpdateIntentImpulse, CreateIntentImpulse
from gaia_sdk.graphql.GaiaClient import GaiaClient
from gaia_sdk.graphql.GaiaRequest import GaiaRequest
from gaia_sdk.http.HttpTransporter import HttpTransporter
from gaia_sdk.api.client_options import ClientOptions


class HttpSensorFunction(ISensorFunction):

    def __init__(self, url: str, apiKey: str, apiSecret: str):
        self.client = GaiaClient(HttpTransporter(url + "/api/sync"), ClientOptions(apiKey, apiSecret))

    def retrieve(self, config: Callable[[RetrievalReq], None]) -> Observable[RetrievalRes]:
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(config)
        query_res: Callable[[QueryRes], RetrievalRes] = lambda x: x.retrieve()

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return mapQ(observable, query_res)

    def retrieve_experience(self, config: Callable[[ExperienceReq], None]) -> Observable[ExperienceRes]:
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.experience(config)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], ExperienceRes] = lambda x: x.retrieve().experience()

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return mapQ(observable, query_res)

    def retrieve_knowledge(self, config: Callable[[KnowledgeReq], None]) -> Observable[KnowledgeRes]:
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.knowledge(config)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], KnowledgeRes] = lambda x: x.retrieve().knowledge()

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return mapQ(observable, query_res)

    def retrieve_knowledge_edge(self, config: Callable[[KnowledgeEdgeReq], None]) -> Observable[KnowledgeEdgeRes]:
        knowledge_req: Callable[[KnowledgeReq], None] = lambda x: x.edges(config)
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.knowledge(knowledge_req)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], KnowledgeEdgeRes] = lambda x: x.retrieve().knowledge().edges()

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return mapQ(observable, query_res)

    def retrieve_intents(self, config: Callable[[IntentReq], None]) -> Observable[IntentRes]:
        intents_req: Callable[[IntentReq], None] = lambda x: x.intents(config)
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.knowledge(intents_req)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], IntentRes] = lambda x: x.retrieve().knowledge().intents()

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return mapQ(observable, query_res)

    def retrieve_prompts(self, config: Callable[[PromptReq], None]) -> Observable[PromptRes]:
        prompts_req: Callable[[PromptReq], None] = lambda x: x.prompts(config)
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.knowledge(prompts_req)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], PromptRes] = lambda x: x.retrieve().knowledge().prompts()

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return mapQ(observable, query_res)

    def retrieve_statements(self, config: Callable[[StatementReq], None]) -> Observable[StatementRes]:
        statement_req: Callable[[StatementReq], None] = lambda x: x.statements(config)
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.knowledge(statement_req)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], StatementRes] = lambda x: x.retrieve().knowledge().statements()

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return mapQ(observable, query_res)

    def retrieve_fulfilments(self, config: Callable[[FulfilmentReq], None]) -> Observable[FulfilmentRes]:
        fulfilment_req: Callable[[FulfilmentReq], None] = lambda x: x.fulfilments(config)
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.knowledge(fulfilment_req)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], FulfilmentRes] = lambda x: x.retrieve().knowledge().fulfilments()

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return mapQ(observable, query_res)

    def retrieve_codes(self, config: Callable[[CodeReq], None]) -> Observable[CodeRes]:
        code_req: Callable[[CodeReq], None] = lambda x: x.codes(config)
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.knowledge(code_req)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], CodeRes] = lambda x: x.retrieve().knowledge().codes()

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return mapQ(observable, query_res)

    def retrieve_behaviour(self, config: Callable[[BehaviourReq], None]) -> Observable[BehaviourRes]:
        behaviour_req: Callable[[BehaviourReq], None] = lambda x: x.behaviours(config)
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.knowledge(behaviour_req)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], BehaviourRes] = lambda x: x.retrieve().knowledge().behaviours()

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return mapQ(observable, query_res)

    def introspect(self, config: Callable[[IntrospectionReq], None]) -> Observable[IntrospectionRes]:
        query_req: Callable[[QueryReq], None] = lambda x: x.introspect(config)
        query_res: Callable[[QueryRes], IntrospectionRes] = lambda x: x.introspect()

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return mapQ(observable, query_res)

    def introspect_skills(self, config: Callable[[SkillIntrospectionReq], None]) -> Observable[SkillIntrospectionRes]:
        introspect_skills: Callable[[IntrospectionReq], None] = lambda x: x.skills(config)
        query_req: Callable[[QueryReq], None] = lambda x: x.introspect(introspect_skills)
        query_res: Callable[[QueryRes], SkillIntrospectionRes] = lambda x: x.introspect().skills()

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return mapQ(observable, query_res)

    def preserve(self, config: Callable[[PreservationReq], None]) -> Observable[PreservationRes]:
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(config)
        mutation_res: Callable[[MutationRes], PreservationRes] = lambda x: x.preserve()

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return mapM(observable, mutation_res)

    def preserve_create_intents(self, impulses: List[CreateIntentImpulse]) -> Observable[CreatedIntentImpulse]:
        create_intents: Callable[[PreservationReq], None] = lambda x: x.create_intents(impulses)
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(create_intents)
        mutation_res: Callable[[MutationRes], CreatedIntentImpulse] = lambda x: x.preserve().create_intents()

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return mapM(observable, mutation_res)

    def preserve_update_intents(self, impulses: List[UpdateIntentImpulse]) -> Observable[UpdatedIntentImpulse]:
        update_intents: Callable[[PreservationReq], None] = lambda x: x.update_intents(impulses)
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(update_intents)
        mutation_res: Callable[[MutationRes], UpdatedIntentImpulse] = lambda x: x.preserve().update_intents()

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return mapM(observable, mutation_res)

    def preserve_delete_intents(self, impulses: List[DeleteIntentImpulse]) -> Observable[DeletedIntentImpulse]:
        delete_intents: Callable[[PreservationReq], None] = lambda x: x.delete_intents(impulses)
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(delete_intents)
        mutation_res: Callable[[MutationRes], DeletedIntentImpulse] = lambda x: x.preserve().delete_intents()

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return mapM(observable, mutation_res)

    def perceive(self, config: Callable[[PerceptionReq], None]) -> Observable[PerceptionRes]:
        mutation_req: Callable[[MutationReq], None] = lambda x: x.perceive(config)
        mutation_res: Callable[[MutationRes], PerceptionRes] = lambda x: x.perceive()()

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return mapM(observable, mutation_res)

    def perceive_action(self, impulse: PerceiveActionImpulse) -> Observable[PerceivedImpulse]:
        perceive_action_req: Callable[[PerceptionReq], None] = lambda x: x.perceive_action(impulse, lambda e: e.id())
        mutation_req: Callable[[MutationReq], None] = lambda x: x.perceive(perceive_action_req)
        mutation_res: Callable[[MutationRes], PerceivedImpulse] = lambda x: x.perceive.perceive_action

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return mapM(observable, mutation_res)

    def perceive_data(self, impulse: PerceiveDataImpulse) -> Observable[PerceivedImpulse]:
        perceive_data_req: Callable[[PerceptionReq], None] = lambda x: x.perceive_data(impulse, lambda e: e.id())
        mutation_req: Callable[[MutationReq], None] = lambda x: x.perceive(perceive_data_req)
        mutation_res: Callable[[MutationRes], PerceivedImpulse] = lambda x: x.perceive.perceive_data

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return mapM(observable, mutation_res)