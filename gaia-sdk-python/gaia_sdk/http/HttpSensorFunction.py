import rx
from rx.core.typing import Observable
from typing import Callable, List

from gaia_sdk.api.ISensorFunction import ISensorFunction
from gaia_sdk.api.client_options import ClientOptions
from gaia_sdk.api.rx.rx import mapQ, mapM, flat_mapM, flat_mapQ
from gaia_sdk.graphql import QueryReq, QueryRes, RetrievalReq, ExperienceReq, KnowledgeReq, EdgeReq, \
    IntentReq, PromptReq, StatementReq, FulfilmentReq, CodeReq, BehaviourReq, IntrospectionReq, SkillIntrospectionReq, \
    PerceptionReq, PreservationReq, CreatedIntentImpulse, UpdatedIntentImpulse, DeletedIntentImpulse, RetrievalRes, \
    ExperienceRes, EdgeRes, StatementRes, PromptRes, IntentRes, KnowledgeRes, FulfilmentRes, CodeRes, \
    BehaviourRes, IntrospectionRes, SkillIntrospectionRes, PreservationRes, PerceptionRes, PerceivedImpulse, \
    MutationReq, MutationRes, PerceiveDataImpulse, PerceiveActionImpulse, DeleteIntentImpulse, \
    UpdateIntentImpulse, CreateIntentImpulse, CreatePromptImpulse, UpdatePromptImpulse, DeletePromptImpulse, \
    CreatedPromptImpulse, UpdatedPromptImpulse, \
    DeletedPromptImpulse, CreateStatementImpulse, UpdateStatementImpulse, DeleteStatementImpulse, \
    CreatedStatementImpulse, UpdatedStatementImpulse, DeletedStatementImpulse, CreateFulfilmentImpulse, \
    UpdateFulfilmentImpulse, DeleteFulfilmentImpulse, CreatedFulfilmentImpulse, UpdatedFulfilmentImpulse, \
    DeletedFulfilmentImpulse, CreateBehaviourImpulse, UpdateBehaviourImpulse, DeleteBehaviourImpulse, \
    CreatedBehaviourImpulse, UpdatedBehaviourImpulse, DeletedBehaviourImpulse, CreateCodeImpulse, UpdateCodeImpulse, \
    DeleteCodeImpulse, CreatedCodeImpulse, UpdatedCodeImpulse, DeletedCodeImpulse, CreateEdgeImpulse, \
    DeleteEdgeImpulse, CreatedEdgeImpulse, DeletedEdgeImpulse
from gaia_sdk.graphql.GaiaClient import GaiaClient
from gaia_sdk.graphql.GaiaRequest import GaiaRequest
from gaia_sdk.http.HttpTransporter import HttpTransporter

Uuid = str

class HttpSensorFunction(ISensorFunction):

    def __init__(self, url: str, apiKey: str, apiSecret: str):
        self.client = GaiaClient(HttpTransporter(url + "/api/sync"), ClientOptions(apiKey, apiSecret))

    def retrieve(self, config: Callable[[RetrievalReq], None]) -> Observable[RetrievalRes]:
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(config)
        query_res: Callable[[QueryRes], RetrievalRes] = lambda x: x.retrieve

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return mapQ(observable, query_res)

    def retrieve_experience(self, config: Callable[[ExperienceReq], None]) -> Observable[ExperienceRes]:
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.experience(config)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], ExperienceRes] = lambda x: x.retrieve.experience

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return mapQ(observable, query_res)

    def retrieve_knowledge(self, config: Callable[[KnowledgeReq], None]) -> Observable[KnowledgeRes]:
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.knowledge(config)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], KnowledgeRes] = lambda x: x.retrieve.knowledge

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return mapQ(observable, query_res)

    def retrieve_edges(self, source: Uuid, config: Callable[[EdgeReq], None]) -> Observable[EdgeRes]:
        knowledge_req: Callable[[KnowledgeReq], None] = lambda x: x.edges(source, config)
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.knowledge(knowledge_req)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], EdgeRes] = lambda x: x.retrieve.knowledge.edges

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return flat_mapQ(observable, query_res)

    def retrieve_edge(self, source: Uuid, target: Uuid, config: Callable[[EdgeReq], None]) -> Observable[EdgeRes]:
        knowledge_req: Callable[[KnowledgeReq], None] = lambda x: x.edge(source, target, config)
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.knowledge(knowledge_req)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], EdgeRes] = lambda x: x.retrieve.knowledge.edge

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return mapQ(observable, query_res)

    def retrieve_intents(self, identityId: Uuid, config: Callable[[IntentReq], None]) -> Observable[IntentRes]:
        intents_req: Callable[[IntentReq], None] = lambda x: x.intents(identityId, config)
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.knowledge(intents_req)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], IntentRes] = lambda x: x.retrieve.knowledge.intents

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return flat_mapQ(observable, query_res)

    def retrieve_intent(self, identityId: Uuid, reference: Uuid, config: Callable[[IntentReq], None]) -> Observable[IntentRes]:
        intents_req: Callable[[IntentReq], None] = lambda x: x.intent(identityId, reference, config)
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.knowledge(intents_req)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], IntentRes] = lambda x: x.retrieve.knowledge.intent

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return mapQ(observable, query_res)

    def retrieve_prompts(self, identityId: Uuid, config: Callable[[PromptReq], None]) -> Observable[PromptRes]:
        prompts_req: Callable[[PromptReq], None] = lambda x: x.prompts(identityId, config)
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.knowledge(prompts_req)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], PromptRes] = lambda x: x.retrieve.knowledge.prompts

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return flat_mapQ(observable, query_res)

    def retrieve_prompt(self, identityId: Uuid, reference: Uuid, config: Callable[[PromptReq], None]) -> Observable[PromptRes]:
        prompts_req: Callable[[PromptReq], None] = lambda x: x.prompt(identityId, reference, config)
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.knowledge(prompts_req)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], PromptRes] = lambda x: x.retrieve.knowledge.prompt

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return mapQ(observable, query_res)

    def retrieve_statements(self,identityId: Uuid, config: Callable[[StatementReq], None]) -> Observable[StatementRes]:
        statement_req: Callable[[StatementReq], None] = lambda x: x.statements(identityId, config)
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.knowledge(statement_req)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], StatementRes] = lambda x: x.retrieve.knowledge.statements

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return flat_mapQ(observable, query_res)

    def retrieve_statement(self, identityId: Uuid, reference: Uuid, config: Callable[[StatementReq], None]) -> Observable[StatementRes]:
        statement_req: Callable[[StatementReq], None] = lambda x: x.statement(identityId, reference, config)
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.knowledge(statement_req)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], StatementRes] = lambda x: x.retrieve.knowledge.statement

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return mapQ(observable, query_res)

    def retrieve_fulfilments(self, identityId: Uuid, config: Callable[[FulfilmentReq], None]) -> Observable[FulfilmentRes]:
        fulfilment_req: Callable[[FulfilmentReq], None] = lambda x: x.fulfilments(identityId, config)
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.knowledge(fulfilment_req)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], FulfilmentRes] = lambda x: x.retrieve.knowledge.fulfilments

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return flat_mapQ(observable, query_res)

    def retrieve_fulfilment(self, identityId: Uuid, reference: Uuid, config: Callable[[FulfilmentReq], None]) -> Observable[FulfilmentRes]:
        fulfilment_req: Callable[[FulfilmentReq], None] = lambda x: x.fulfilment(identityId, reference, config)
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.knowledge(fulfilment_req)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], FulfilmentRes] = lambda x: x.retrieve.knowledge.fulfilment

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return mapQ(observable, query_res)

    def retrieve_codes(self, identityId: Uuid, config: Callable[[CodeReq], None]) -> Observable[CodeRes]:
        code_req: Callable[[CodeReq], None] = lambda x: x.codes(identityId, config)
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.knowledge(code_req)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], CodeRes] = lambda x: x.retrieve.knowledge.codes

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return flat_mapQ(observable, query_res)

    def retrieve_code(self, identityId: Uuid, reference: Uuid, config: Callable[[CodeReq], None]) -> Observable[CodeRes]:
        code_req: Callable[[CodeReq], None] = lambda x: x.code(identityId, reference, config)
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.knowledge(code_req)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], CodeRes] = lambda x: x.retrieve.knowledge.code

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return mapQ(observable, query_res)

    def retrieve_behaviours(self, identityId: Uuid, config: Callable[[BehaviourReq], None]) -> Observable[BehaviourRes]:
        behaviour_req: Callable[[BehaviourReq], None] = lambda x: x.behaviours(identityId, config)
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.knowledge(behaviour_req)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], BehaviourRes] = lambda x: x.retrieve.knowledge.behaviours

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return flat_mapQ(observable, query_res)

    def retrieve_behaviour(self, identityId: Uuid, reference: Uuid, config: Callable[[BehaviourReq], None]) -> Observable[BehaviourRes]:
        behaviour_req: Callable[[BehaviourReq], None] = lambda x: x.behaviour(identityId, reference, config)
        retrieval_req: Callable[[RetrievalReq], None] = lambda x: x.knowledge(behaviour_req)
        query_req: Callable[[QueryReq], None] = lambda x: x.retrieve(retrieval_req)
        query_res: Callable[[QueryRes], BehaviourRes] = lambda x: x.retrieve.knowledge.behaviour

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return mapQ(observable, query_res)

    def introspect(self, config: Callable[[IntrospectionReq], None]) -> Observable[IntrospectionRes]:
        query_req: Callable[[QueryReq], None] = lambda x: x.introspect(config)
        query_res: Callable[[QueryRes], IntrospectionRes] = lambda x: x.introspect

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return mapQ(observable, query_res)

    def introspect_skills(self, config: Callable[[SkillIntrospectionReq], None]) -> Observable[SkillIntrospectionRes]:
        introspect_skills: Callable[[IntrospectionReq], None] = lambda x: x.skills(config)
        query_req: Callable[[QueryReq], None] = lambda x: x.introspect(introspect_skills)
        query_res: Callable[[QueryRes], SkillIntrospectionRes] = lambda x: x.introspect.skills

        observable = rx.of(self.client.query(GaiaRequest.query(query_req)))
        return mapQ(observable, query_res)

    def preserve(self, config: Callable[[PreservationReq], None]) -> Observable[PreservationRes]:
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(config)
        mutation_res: Callable[[MutationRes], PreservationRes] = lambda x: x.preserve

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return mapM(observable, mutation_res)

    def preserve_create_intents(self, impulses: List[CreateIntentImpulse]) -> Observable[CreatedIntentImpulse]:
        intent_req = lambda x: x.id()
        create_req: Callable[[PreservationReq], None] = lambda x: x.create(lambda e: e.intents(impulses, intent_req))
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(create_req)
        mutation_res: Callable[[MutationRes], CreatedIntentImpulse] = lambda x: x.preserve.create.intents

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return flat_mapM(observable, mutation_res)

    def preserve_update_intents(self, impulses: List[UpdateIntentImpulse]) -> Observable[UpdatedIntentImpulse]:
        intent_req = lambda x: x.id()
        update_intents: Callable[[PreservationReq], None] = lambda x: x.update(lambda e: e.intents(impulses, intent_req))
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(update_intents)
        mutation_res: Callable[[MutationRes], UpdatedIntentImpulse] = lambda x: x.preserve.update.intents

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return flat_mapM(observable, mutation_res)

    def preserve_delete_intents(self, impulses: List[DeleteIntentImpulse]) -> Observable[DeletedIntentImpulse]:
        intent_req = lambda x: x.id()
        delete_intents: Callable[[PreservationReq], None] = lambda x: x.delete(lambda e: e.intents(impulses, intent_req))
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(delete_intents)
        mutation_res: Callable[[MutationRes], DeletedIntentImpulse] = lambda x: x.preserve.delete.intents

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return flat_mapM(observable, mutation_res)

    def preserve_create_prompts(self, impulses: List[CreatePromptImpulse]) -> Observable[CreatedPromptImpulse]:
        prompt_req = lambda x: x.id()
        create_req: Callable[[PreservationReq], None] = lambda x: x.create(lambda e: e.prompts(impulses, prompt_req))
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(create_req)
        mutation_res: Callable[[MutationRes], CreatedPromptImpulse] = lambda x: x.preserve.create.prompts

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return flat_mapM(observable, mutation_res)

    def preserve_update_prompts(self, impulses: List[UpdatePromptImpulse]) -> Observable[UpdatedPromptImpulse]:
        prompt_req = lambda x: x.id()
        update_prompts: Callable[[PreservationReq], None] = lambda x: x.update(lambda e: e.prompts(impulses, prompt_req))
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(update_prompts)
        mutation_res: Callable[[MutationRes], UpdatedPromptImpulse] = lambda x: x.preserve.update.prompts

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return flat_mapM(observable, mutation_res)

    def preserve_delete_prompts(self, impulses: List[DeletePromptImpulse]) -> Observable[DeletedPromptImpulse]:
        prompt_req = lambda x: x.id()
        delete_prompts: Callable[[PreservationReq], None] = lambda x: x.delete(lambda e: e.prompts(impulses, prompt_req))
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(delete_prompts)
        mutation_res: Callable[[MutationRes], DeletedPromptImpulse] = lambda x: x.preserve.delete.prompts

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return flat_mapM(observable, mutation_res)

    def preserve_create_statements(self, impulses: List[CreateStatementImpulse]) -> Observable[CreatedStatementImpulse]:
        statement_req = lambda x: x.id()
        create_req: Callable[[PreservationReq], None] = lambda x: x.create(lambda e: e.statements(impulses, statement_req))
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(create_req)
        mutation_res: Callable[[MutationRes], CreatedStatementImpulse] = lambda x: x.preserve.create.statements

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return flat_mapM(observable, mutation_res)

    def preserve_update_statements(self, impulses: List[UpdateStatementImpulse]) -> Observable[UpdatedStatementImpulse]:
        statement_req = lambda x: x.id()
        update_statements: Callable[[PreservationReq], None] = lambda x: x.update(lambda e: e.statements(impulses, statement_req))
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(update_statements)
        mutation_res: Callable[[MutationRes], UpdatedStatementImpulse] = lambda x: x.preserve.update.statements

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return flat_mapM(observable, mutation_res)

    def preserve_delete_statements(self, impulses: List[DeleteStatementImpulse]) -> Observable[DeletedStatementImpulse]:
        statement_req = lambda x: x.id()
        delete_statements: Callable[[PreservationReq], None] = lambda x: x.delete(lambda e: e.statements(impulses, statement_req))
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(delete_statements)
        mutation_res: Callable[[MutationRes], DeletedStatementImpulse] = lambda x: x.preserve.delete.statements

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return flat_mapM(observable, mutation_res)

    def preserve_create_fulfilments(self, impulses: List[CreateFulfilmentImpulse]) -> Observable[CreatedFulfilmentImpulse]:
        fulfilment_req = lambda x: x.id()
        create_req: Callable[[PreservationReq], None] = lambda x: x.create(lambda e: e.fulfilments(impulses, fulfilment_req))
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(create_req)
        mutation_res: Callable[[MutationRes], CreatedFulfilmentImpulse] = lambda x: x.preserve.create.fulfilments

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return flat_mapM(observable, mutation_res)

    def preserve_update_fulfilments(self, impulses: List[UpdateFulfilmentImpulse]) -> Observable[UpdatedFulfilmentImpulse]:
        fulfilment_req = lambda x: x.id()
        update_fulfilments: Callable[[PreservationReq], None] = lambda x: x.update(lambda e: e.fulfilments(impulses, fulfilment_req))
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(update_fulfilments)
        mutation_res: Callable[[MutationRes], UpdatedFulfilmentImpulse] = lambda x: x.preserve.update.fulfilments

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return flat_mapM(observable, mutation_res)

    def preserve_delete_fulfilments(self, impulses: List[DeleteFulfilmentImpulse]) -> Observable[DeletedFulfilmentImpulse]:
        fulfilment_req = lambda x: x.id()
        delete_fulfilments: Callable[[PreservationReq], None] = lambda x: x.delete(lambda e: e.fulfilments(impulses, fulfilment_req))
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(delete_fulfilments)
        mutation_res: Callable[[MutationRes], DeletedFulfilmentImpulse] = lambda x: x.preserve.delete.fulfilments

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return flat_mapM(observable, mutation_res)

    def preserve_create_behaviours(self, impulses: List[CreateBehaviourImpulse]) -> Observable[CreatedBehaviourImpulse]:
        behaviour_req = lambda x: x.id()
        create_req: Callable[[PreservationReq], None] = lambda x: x.create(lambda e: e.behaviours(impulses, behaviour_req))
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(create_req)
        mutation_res: Callable[[MutationRes], CreatedBehaviourImpulse] = lambda x: x.preserve.create.behaviours

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return flat_mapM(observable, mutation_res)

    def preserve_update_behaviours(self, impulses: List[UpdateBehaviourImpulse]) -> Observable[UpdatedBehaviourImpulse]:
        behaviour_req = lambda x: x.id()
        update_behaviours: Callable[[PreservationReq], None] = lambda x: x.update(lambda e: e.behaviours(impulses, behaviour_req))
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(update_behaviours)
        mutation_res: Callable[[MutationRes], UpdatedBehaviourImpulse] = lambda x: x.preserve.update.behaviours

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return flat_mapM(observable, mutation_res)

    def preserve_delete_behaviours(self, impulses: List[DeleteBehaviourImpulse]) -> Observable[DeletedBehaviourImpulse]:
        behaviour_req = lambda x: x.id()
        delete_behaviours: Callable[[PreservationReq], None] = lambda x: x.delete(lambda e: e.behaviours(impulses, behaviour_req))
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(delete_behaviours)
        mutation_res: Callable[[MutationRes], DeletedBehaviourImpulse] = lambda x: x.preserve.delete.behaviours

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return flat_mapM(observable, mutation_res)

    def preserve_create_codes(self, impulses: List[CreateCodeImpulse]) -> Observable[CreatedCodeImpulse]:
        code_req = lambda x: x.id()
        create_req: Callable[[PreservationReq], None] = lambda x: x.create(lambda e: e.codes(impulses, code_req))
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(create_req)
        mutation_res: Callable[[MutationRes], CreatedCodeImpulse] = lambda x: x.preserve.create.codes

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return flat_mapM(observable, mutation_res)

    def preserve_update_codes(self, impulses: List[UpdateCodeImpulse]) -> Observable[UpdatedCodeImpulse]:
        code_req = lambda x: x.id()
        update_codes: Callable[[PreservationReq], None] = lambda x: x.update(lambda e: e.codes(impulses, code_req))
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(update_codes)
        mutation_res: Callable[[MutationRes], UpdatedCodeImpulse] = lambda x: x.preserve.update.codes

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return flat_mapM(observable, mutation_res)

    def preserve_delete_codes(self, impulses: List[DeleteCodeImpulse]) -> Observable[DeletedCodeImpulse]:
        code_req = lambda x: x.id()
        delete_codes: Callable[[PreservationReq], None] = lambda x: x.delete(lambda e: e.codes(impulses, code_req))
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(delete_codes)
        mutation_res: Callable[[MutationRes], DeletedCodeImpulse] = lambda x: x.preserve.delete.codes

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return flat_mapM(observable, mutation_res)

    def preserve_create_edges(self, impulses: List[CreateEdgeImpulse]) -> Observable[CreatedEdgeImpulse]:
        edge_req = lambda x: x.id()
        create_req: Callable[[PreservationReq], None] = lambda x: x.create(lambda e: e.edges(impulses, edge_req))
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(create_req)
        mutation_res: Callable[[MutationRes], CreatedEdgeImpulse] = lambda x: x.preserve.create.edges

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return flat_mapM(observable, mutation_res)

    def preserve_delete_edges(self, impulses: List[DeleteEdgeImpulse]) -> Observable[DeletedEdgeImpulse]:
        edge_req = lambda x: x.id()
        delete_edges: Callable[[PreservationReq], None] = lambda x: x.delete(lambda e: e.edges(impulses, edge_req))
        mutation_req: Callable[[MutationReq], None] = lambda x: x.preserve(delete_edges)
        mutation_res: Callable[[MutationRes], DeletedEdgeImpulse] = lambda x: x.preserve.delete.edges

        observable = rx.of(self.client.mutation(GaiaRequest.mutation(mutation_req)))
        return flat_mapM(observable, mutation_res)

    def perceive(self, config: Callable[[PerceptionReq], None]) -> Observable[PerceptionRes]:
        mutation_req: Callable[[MutationReq], None] = lambda x: x.perceive(config)
        mutation_res: Callable[[MutationRes], PerceptionRes] = lambda x: x.perceive

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
