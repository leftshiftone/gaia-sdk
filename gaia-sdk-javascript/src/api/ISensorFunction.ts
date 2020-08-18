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
    EdgeReq,
    EdgeRes,
    ExperienceReq,
    ExperienceRes,
    FulfilmentReq,
    FulfilmentRes,
    IdentityReq,
    IdentityRes,
    IntentReq,
    IntentRes,
    IntrospectionReq,
    IntrospectionRes,
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
    SkillProvisionReq,
    SkillProvisionRes,
    SkillReq,
    SkillRes,
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
import {CreateEdgeImpulse} from "../graphql/request/input/CreateEdgeImpulse";
import {CreatedEdgeImpulse} from "../graphql/response/type/CreatedEdgeImpulse";
import {DeleteEdgeImpulse} from "../graphql/request/input/DeleteEdgeImpulse";
import {DeletedEdgeImpulse} from "../graphql/response/type/DeletedEdgeImpulse";
import {CreateSkillImpulse} from "../graphql/request/input/CreateSkillImpulse";
import {CreatedSkillImpulse} from "../graphql/response/type/CreatedSkillImpulse";
import {UpdateSkillImpulse} from "../graphql/request/input/UpdateSkillImpulse";
import {UpdatedSkillImpulse} from "../graphql/response/type/UpdatedSkillImpulse";
import {DeleteSkillImpulse} from "../graphql/request/input/DeleteSkillImpulse";
import {DeletedSkillImpulse} from "../graphql/response/type/DeletedSkillImpulse";
import {CreateSkillProvisionImpulse} from "../graphql/request/input/CreateSkillProvisionImpulse";
import {CreatedSkillProvisionImpulse} from "../graphql/response/type/CreatedSkillProvisionImpulse";
import {UpdateSkillProvisionImpulse} from "../graphql/request/input/UpdateSkillProvisionImpulse";
import {UpdatedSkillProvisionImpulse} from "../graphql/response/type/UpdatedSkillProvisionImpulse";
import {DeleteSkillProvisionImpulse} from "../graphql/request/input/DeleteSkillProvisionImpulse";
import {DeletedSkillProvisionImpulse} from "../graphql/response/type/DeletedSkillProvisionImpulse";
import {Uuid} from "../graphql/GaiaClient";
import {CreateIdentityImpulse} from "../graphql/request/input/CreateIdentityImpulse";
import {UpdateIdentityImpulse} from "../graphql/request/input/UpdateIdentityImpulse";
import {DeleteIdentityImpulse} from "../graphql/request/input/DeleteIdentityImpulse";
import {CreatedIdentityImpulse} from "../graphql/response/type/CreatedIdentityImpulse";
import {UpdatedIdentityImpulse} from "../graphql/response/type/UpdatedIdentityImpulse";
import {DeletedIdentityImpulse} from "../graphql/response/type/DeletedIdentityImpulse";

export interface ISensorFunction {
    retrieve(config: (x: RetrievalReq) => void): Observable<RetrievalRes>

    retrieveExperience(config: (x: ExperienceReq) => void): Observable<ExperienceRes>

    retrieveKnowledge(config: (x: KnowledgeReq) => void): Observable<KnowledgeRes>

    retrieveEdges(source: Uuid, config: (x: EdgeReq) => void, limit?: Number, offset?: Number): Observable<EdgeRes>

    retrieveEdge(source: Uuid, target: Uuid, config: (x: EdgeReq) => void): Observable<EdgeRes>

    retrieveIdentities(config: (x: IdentityReq) => void, limit?: Number, offset?: Number): Observable<IdentityRes>

    retrieveIdentity(identityId: Uuid, config: (x: IdentityReq) => void): Observable<IdentityRes>

    retrieveIntents(identityId: Uuid, config: (x: IntentReq) => void, limit?: Number, offset?: Number): Observable<IntentRes>

    retrieveIntent(identityId: Uuid, reference, config: (x: IntentReq) => void): Observable<IntentRes>

    retrievePrompts(identityId: Uuid, config: (x: PromptReq) => void, limit?: Number, offset?: Number): Observable<PromptRes>

    retrievePrompt(identityId: Uuid, reference: Uuid, config: (x: PromptReq) => void): Observable<PromptRes>

    retrieveStatements(identityId: Uuid, config: (x: StatementReq) => void, limit?: Number, offset?: Number): Observable<StatementRes>

    retrieveStatement(identityId: Uuid, reference: Uuid, config: (x: StatementReq) => void): Observable<StatementRes>

    retrieveFulfilments(identityId: Uuid, config: (x: FulfilmentReq) => void, limit?: Number, offset?: Number): Observable<FulfilmentRes>

    retrieveFulfilment(identityId: Uuid, reference: Uuid, config: (x: FulfilmentReq) => void): Observable<FulfilmentRes>

    retrieveCodes(identityId: Uuid, config: (x: CodeReq) => void, limit?: Number, offset?: Number): Observable<CodeRes>

    retrieveCode(identityId: Uuid, reference: Uuid, config: (x: CodeReq) => void): Observable<CodeRes>

    retrieveBehaviours(identityId: Uuid, config: (x: BehaviourReq) => void, limit?: Number, offset?: Number): Observable<BehaviourRes>

    retrieveBehaviour(identityId: Uuid, reference: Uuid, config: (x: BehaviourReq) => void): Observable<BehaviourRes>


    retrieveSkills(tenantId: Uuid, config: (x: SkillReq) => void, limit?: Number, offset?: Number): Observable<SkillRes>

    retrieveSkill(tenantId: Uuid, reference: Uuid, config: (x: SkillReq) => void): Observable<SkillRes>

    retrieveSkillProvisions(tenantId: Uuid, config: (x: SkillProvisionReq) => void, limit?: Number, offset?: Number): Observable<SkillProvisionRes>

    retrieveSkillProvision(tenantId: Uuid, reference: Uuid, config: (x: SkillProvisionReq) => void): Observable<SkillProvisionRes>

    introspect(config: (x: IntrospectionReq) => void): Observable<IntrospectionRes>

    introspectSkills(config: (x: SkillIntrospectionReq) => void): Observable<SkillIntrospectionRes>

    preserve(config: (x: PreservationReq) => void): Observable<PreservationRes>

    preserveCreateIdentities(...impulses: [CreateIdentityImpulse]): Observable<CreatedIdentityImpulse>

    preserveUpdateIdentities(...impulses: [UpdateIdentityImpulse]): Observable<UpdatedIdentityImpulse>

    preserveDeleteIdentities(...impulses: [DeleteIdentityImpulse]): Observable<DeletedIdentityImpulse>

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

    preserveCreateEdges(...impulses: [CreateEdgeImpulse]): Observable<CreatedEdgeImpulse>

    preserveDeleteEdges(...impulses: [DeleteEdgeImpulse]): Observable<DeletedEdgeImpulse>

    preserveCreateSkills(...impulses: [CreateSkillImpulse]): Observable<CreatedSkillImpulse>

    preserveUpdateSkills(...impulses: [UpdateSkillImpulse]): Observable<UpdatedSkillImpulse>

    preserveDeleteSkills(...impulses: [DeleteSkillImpulse]): Observable<DeletedSkillImpulse>

    preserveCreateSkillProvisions(...impulses: [CreateSkillProvisionImpulse]): Observable<CreatedSkillProvisionImpulse>

    preserveUpdateSkillProvisions(...impulses: [UpdateSkillProvisionImpulse]): Observable<UpdatedSkillProvisionImpulse>

    preserveDeleteSkillProvisions(...impulses: [DeleteSkillProvisionImpulse]): Observable<DeletedSkillProvisionImpulse>

    perceive(config: (x: PerceptionReq) => void): Observable<PerceptionRes>

    perceiveAction(impulse: PerceiveActionImpulse): Observable<PerceivedImpulse>

    perceiveData(impulse: PerceiveDataImpulse): Observable<PerceivedImpulse>
}
