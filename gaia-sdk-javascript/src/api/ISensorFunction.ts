import {Observable} from "rxjs";
import {
    BehaviourReq,
    BehaviourRes,
    CodeReq,
    CodeRes,
    CreatedIntentImpulse,
    CreateIntentImpulse,
    DeletedIntentImpulse,
    DeleteIntentImpulse,
    ExperienceReq,
    ExperienceRes,
    FulfilmentReq,
    FulfilmentRes,
    IntentReq,
    IntentRes,
    IntrospectionReq,
    IntrospectionRes,
    KnowledgeEdgeReq,
    KnowledgeEdgeRes,
    KnowledgeReq,
    KnowledgeRes,
    PerceiveActionImpulse,
    PerceiveDataImpulse,
    PerceivedImpulse,
    PerceptionReq,
    PerceptionRes,
    PreservationReq,
    PreservationRes,
    PromptReq,
    PromptRes,
    RetrievalReq,
    RetrievalRes,
    SkillIntrospectionReq,
    SkillIntrospectionRes,
    StatementReq,
    StatementRes,
    UpdatedIntentImpulse,
    UpdateIntentImpulse
} from "../graphql";
import {CreatePromptImpulse} from "../graphql/request/input/CreatePromptImpulse";
import {CreatedPromptImpulse} from "../graphql/response/type/CreatedPromptImpulse";
import {UpdatePromptImpulse} from "../graphql/request/input/UpdatePromptImpulse";
import {UpdatedPromptImpulse} from "../graphql/response/type/UpdatedPromptImpulse";
import {DeletePromptImpulse} from "../graphql/request/input/DeletePromptImpulse";
import {DeletedPromptImpulse} from "../graphql/response/type/DeletedPromptImpulse";
import {CreateStatementImpulse} from "../graphql/request/input/CreateStatementImpulse";
import {CreatedStatementImpulse} from "../graphql/response/type/CreatedStatementImpulse";
import {UpdateStatementImpulse} from "../graphql/request/input/UpdateStatementImpulse";
import {UpdatedStatementImpulse} from "../graphql/response/type/UpdatedStatementImpulse";
import {DeleteStatementImpulse} from "../graphql/request/input/DeleteStatementImpulse";
import {DeletedStatementImpulse} from "../graphql/response/type/DeletedStatementImpulse";
import {CreateFulfilmentImpulse} from "../graphql/request/input/CreateFulfilmentImpulse";
import {CreatedFulfilmentImpulse} from "../graphql/response/type/CreatedFulfilmentImpulse";
import {UpdateFulfilmentImpulse} from "../graphql/request/input/UpdateFulfilmentImpulse";
import {UpdatedFulfilmentImpulse} from "../graphql/response/type/UpdatedFulfilmentImpulse";
import {DeleteFulfilmentImpulse} from "../graphql/request/input/DeleteFulfilmentImpulse";
import {DeletedFulfilmentImpulse} from "../graphql/response/type/DeletedFulfilmentImpulse";
import {CreateBehaviourImpulse} from "../graphql/request/input/CreateBehaviourImpulse";
import {CreatedBehaviourImpulse} from "../graphql/response/type/CreatedBehaviourImpulse";
import {UpdateBehaviourImpulse} from "../graphql/request/input/UpdateBehaviourImpulse";
import {UpdatedBehaviourImpulse} from "../graphql/response/type/UpdatedBehaviourImpulse";
import {DeleteBehaviourImpulse} from "../graphql/request/input/DeleteBehaviourImpulse";
import {DeletedBehaviourImpulse} from "../graphql/response/type/DeletedBehaviourImpulse";
import {CreateCodeImpulse} from "../graphql/request/input/CreateCodeImpulse";
import {CreatedCodeImpulse} from "../graphql/response/type/CreatedCodeImpulse";
import {UpdateCodeImpulse} from "../graphql/request/input/UpdateCodeImpulse";
import {UpdatedCodeImpulse} from "../graphql/response/type/UpdatedCodeImpulse";
import {DeleteCodeImpulse} from "../graphql/request/input/DeleteCodeImpulse";
import {DeletedCodeImpulse} from "../graphql/response/type/DeletedCodeImpulse";
import {CreateKnowledgeEdgeImpulse} from "../graphql/request/input/CreateKnowledgeEdgeImpulse";
import {CreatedKnowledgeEdgeImpulse} from "../graphql/response/type/CreatedKnowledgeEdgeImpulse";
import {DeleteKnowledgeEdgeImpulse} from "../graphql/request/input/DeleteKnowledgeEdgeImpulse";
import {DeletedKnowledgeEdgeImpulse} from "../graphql/response/type/DeletedKnowledgeEdgeImpulse";
import {Uuid} from "../graphql/GaiaClient";

export interface ISensorFunction {
    retrieve(config: (x: RetrievalReq) => void): Observable<RetrievalRes>

    retrieveExperience(config: (x: ExperienceReq) => void): Observable<ExperienceRes>

    retrieveKnowledge(config: (x: KnowledgeReq) => void): Observable<KnowledgeRes>

    retrieveKnowledgeEdges(source: Uuid, config: (x: KnowledgeEdgeReq) => void): Observable<KnowledgeEdgeRes>

    retrieveKnowledgeEdge(source: Uuid, target: Uuid, config: (x: KnowledgeEdgeReq) => void): Observable<KnowledgeEdgeRes>

    retrieveIntents(identityId: Uuid, config: (x: IntentReq) => void): Observable<IntentRes>

    retrieveIntent(identityId: Uuid, reference, config: (x: IntentReq) => void): Observable<IntentRes>

    retrievePrompts(identityId: Uuid, config: (x: PromptReq) => void): Observable<PromptRes>

    retrievePrompt(identityId: Uuid, reference: Uuid, config: (x: PromptReq) => void): Observable<PromptRes>

    retrieveStatements(identityId: Uuid, config: (x: StatementReq) => void): Observable<StatementRes>

    retrieveStatement(identityId: Uuid, reference: Uuid, config: (x: StatementReq) => void): Observable<StatementRes>

    retrieveFulfilments(identityId: Uuid, config: (x: FulfilmentReq) => void): Observable<FulfilmentRes>

    retrieveFulfilment(identityId: Uuid, reference: Uuid, config: (x: FulfilmentReq) => void): Observable<FulfilmentRes>

    retrieveCodes(identityId: Uuid, config: (x: CodeReq) => void): Observable<CodeRes>

    retrieveCode(identityId: Uuid, reference: Uuid, config: (x: CodeReq) => void): Observable<CodeRes>

    retrieveBehaviours(identityId: Uuid, config: (x: BehaviourReq) => void): Observable<BehaviourRes>

    retrieveBehaviour(identityId: Uuid, reference: Uuid, config: (x: BehaviourReq) => void): Observable<BehaviourRes>

    introspect(config: (x: IntrospectionReq) => void): Observable<IntrospectionRes>

    introspectSkills(config: (x: SkillIntrospectionReq) => void): Observable<SkillIntrospectionRes>

    preserve(config: (x: PreservationReq) => void): Observable<PreservationRes>

    preserveCreateIntents(...impulses: [CreateIntentImpulse]): Observable<CreatedIntentImpulse>

    preserveUpdateIntents(...impulses: [UpdateIntentImpulse]): Observable<UpdatedIntentImpulse>

    preserveDeleteIntents(...impulses: [DeleteIntentImpulse]): Observable<DeletedIntentImpulse>

    preserveCreatePrompts(...impulses: [CreatePromptImpulse]): Observable<CreatedPromptImpulse>

    preserveUpdatePrompts(...impulses: [UpdatePromptImpulse]): Observable<UpdatedPromptImpulse>

    preserveDeletePrompts(...impulses: [DeletePromptImpulse]): Observable<DeletedPromptImpulse>

    preserveCreateStatements(...impulses: [CreateStatementImpulse]): Observable<CreatedStatementImpulse>

    preserveUpdateStatements(...impulses: [UpdateStatementImpulse]): Observable<UpdatedStatementImpulse>

    preserveDeleteStatements(...impulses: [DeleteStatementImpulse]): Observable<DeletedStatementImpulse>

    preserveCreateFulfilments(...impulses: [CreateFulfilmentImpulse]): Observable<CreatedFulfilmentImpulse>

    preserveUpdateFulfilments(...impulses: [UpdateFulfilmentImpulse]): Observable<UpdatedFulfilmentImpulse>

    preserveDeleteFulfilments(...impulses: [DeleteFulfilmentImpulse]): Observable<DeletedFulfilmentImpulse>

    preserveCreateBehaviours(...impulses: [CreateBehaviourImpulse]): Observable<CreatedBehaviourImpulse>

    preserveUpdateBehaviours(...impulses: [UpdateBehaviourImpulse]): Observable<UpdatedBehaviourImpulse>

    preserveDeleteBehaviours(...impulses: [DeleteBehaviourImpulse]): Observable<DeletedBehaviourImpulse>

    preserveCreateCodes(...impulses: [CreateCodeImpulse]): Observable<CreatedCodeImpulse>

    preserveUpdateCodes(...impulses: [UpdateCodeImpulse]): Observable<UpdatedCodeImpulse>

    preserveDeleteCodes(...impulses: [DeleteCodeImpulse]): Observable<DeletedCodeImpulse>

    preserveCreateKnowledgeEdges(...impulses: [CreateKnowledgeEdgeImpulse]): Observable<CreatedKnowledgeEdgeImpulse>

    preserveDeleteKnowledgeEdges(...impulses: [DeleteKnowledgeEdgeImpulse]): Observable<DeletedKnowledgeEdgeImpulse>

    perceive(config: (x: PerceptionReq) => void): Observable<PerceptionRes>

    perceiveAction(impulse: PerceiveActionImpulse): Observable<PerceivedImpulse>

    perceiveData(impulse: PerceiveDataImpulse): Observable<PerceivedImpulse>
}
