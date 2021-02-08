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
    TenantReq,
    TenantRes,
    UserReq,
    UserRes,
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
    BehaviourExecutionReq,
    BehaviourExecutionRes,
    BehaviourExecutionDetailReq,
    BehaviourExecutionDetailRes,
    MetricsReq,
    MetricsRes,
    StatementReq,
    StatementRes,
    UpdatedIntentImpulse,
    UpdateIntentImpulse, ApiKeyReq, ApiKeyRes, RoleReq, RoleRes, SkillProvisionBuildJobReq
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
import {Struct, Uuid} from "../graphql/GaiaClient";
import {CreateIdentityImpulse} from "../graphql/request/input/CreateIdentityImpulse";
import {UpdateIdentityImpulse} from "../graphql/request/input/UpdateIdentityImpulse";
import {DeleteIdentityImpulse} from "../graphql/request/input/DeleteIdentityImpulse";
import {CreatedIdentityImpulse} from "../graphql/response/type/CreatedIdentityImpulse";
import {UpdatedIdentityImpulse} from "../graphql/response/type/UpdatedIdentityImpulse";
import {DeletedIdentityImpulse} from "../graphql/response/type/DeletedIdentityImpulse";
import {CreateTenantImpulse} from "../graphql/request/input/CreateTenantImpulse";
import {UpdateTenantImpulse} from "../graphql/request/input/UpdateTenantImpulse";
import {DeleteTenantImpulse} from "../graphql/request/input/DeleteTenantImpulse";
import {CreatedTenantImpulse} from "../graphql/response/type/CreatedTenantImpulse";
import {UpdatedTenantImpulse} from "../graphql/response/type/UpdatedTenantImpulse";
import {DeletedTenantImpulse} from "../graphql/response/type/DeletedTenantImpulse";
import {CreateUserImpulse} from "../graphql/request/input/CreateUserImpulse";
import {UpdateUserImpulse} from "../graphql/request/input/UpdateUserImpulse";
import {DeleteUserImpulse} from "../graphql/request/input/DeleteUserImpulse";
import {UpdatedUserImpulse} from "../graphql/response/type/UpdatedUserImpulse";
import {CreatedUserImpulse} from "../graphql/response/type/CreatedUserImpulse";
import {DeletedUserImpulse} from "../graphql/response/type/DeletedUserImpulse";
import {CreateApiKeyImpulse} from "../graphql/request/input/CreateApiKeyImpulse";
import {CreatedApiKeyImpulse} from "../graphql/response/type/CreatedApiKeyImpulse";
import {UpdateApiKeyImpulse} from "../graphql/request/input/UpdateApiKeyImpulse";
import {UpdatedApiKeyImpulse} from "../graphql/response/type/UpdatedApiKeyImpulse";
import {DeleteApiKeyImpulse} from "../graphql/request/input/DeleteApiKeyImpulse";
import {DeletedApiKeyImpulse} from "../graphql/response/type/DeletedApiKeyImpulse";
import {CreateRoleImpulse} from "../graphql/request/input/CreateRoleImpulse";
import {CreatedRoleImpulse} from "../graphql/response/type/CreatedRoleImpulse";
import {UpdateRoleImpulse} from "../graphql/request/input/UpdateRoleImpulse";
import {UpdatedRoleImpulse} from "../graphql/response/type/UpdatedRoleImpulse";
import {DeleteRoleImpulse} from "../graphql/request/input/DeleteRoleImpulse";
import {DeletedRoleImpulse} from "../graphql/response/type/DeletedRoleImpulse";
import {EdgeType} from "../graphql/request/enumeration/EdgeType";
import {ConnectNodeSetImpulse} from "../graphql/response/type/ConnectNodeSetImpulse";
import {ConnectNodeUnsetImpulse} from "../graphql/response/type/ConnectNodeUnsetImpulse";
import {ConnectNodeAppendedImpulse} from "../graphql/response/type/ConnectNodeAppendedImpulse";
import {ConnectNodeRemovedImpulse} from "../graphql/response/type/ConnectNodeRemovedImpulse";
import {ConnectSetNodeImpulse} from "../graphql/request/input/ConnectSetNodeImpulse";
import {ConnectAppendNodeImpulse} from "../graphql/request/input/ConnectAppendNodeImpulse";
import {ConnectRemoveNodeImpulse} from "../graphql/request/input/ConnectRemoveNodeImpulse";
import {ConnectUnsetNodeImpulse} from "../graphql/request/input/ConnectUnsetNodeImpulse";
import {BehaviourExecution} from "../graphql/request/type/BehaviourExecution";

export interface ISensorFunction {
    retrieve(config: (x: RetrievalReq) => void): Observable<RetrievalRes>

    retrieveExperience(config: (x: ExperienceReq) => void): Observable<ExperienceRes>

    retrieveKnowledge(config: (x: KnowledgeReq) => void): Observable<KnowledgeRes>

    retrieveEdges(source: Uuid, config: (x: EdgeReq) => void, limit?: Number, offset?: Number): Observable<EdgeRes>

    retrieveEdge(source: Uuid, edgeId: Uuid, config: (x: EdgeReq) => void): Observable<EdgeRes>

    retrieveIdentities(config: (x: IdentityReq) => void, limit?: Number, offset?: Number): Observable<IdentityRes>

    retrieveIdentity(identityId: Uuid, config: (x: IdentityReq) => void): Observable<IdentityRes>

    retrieveTenants(config: (x: TenantReq) => void, limit?: Number, offset?: Number): Observable<TenantRes>

    retrieveTenant(tenantId: Uuid, config: (x: TenantReq) => void) : Observable<TenantRes>

    retrieveUsers(config: (x: UserReq) => void, limit?: Number, offset?: Number): Observable<UserRes>

    retrieveUser(userId: Uuid, config: (x: UserReq) => void) : Observable<UserRes>

    retrieveApiKeys(config: (x: ApiKeyReq) => void, limit?: Number, offset?: Number): Observable<ApiKeyRes>

    retrieveApiKey(apiKeyId: Uuid, config: (x: ApiKeyReq) => void) : Observable<ApiKeyRes>

    retrieveRoles(tenantId: Uuid, config: (x: RoleReq) => void, limit?: Number, offset?: Number): Observable<RoleRes>

    retrieveRole(tenantId: Uuid, roleId: Uuid, config: (x: RoleReq) => void) : Observable<RoleRes>

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

    retrieveSkillProvisionBuildJobs(tenantId: Uuid, config: (x: SkillProvisionBuildJobReq) => void): Observable<SkillIntrospectionRes>

    retrieveBehaviourExecution(identityId: Uuid, processInstanceId: Uuid, config: (x: BehaviourExecutionDetailReq) => void): Observable<BehaviourExecutionDetailRes>

    retrieveBehaviourExecutions(identityId: Uuid, config: (x: BehaviourExecutionReq) => void, limit?: Number, offset?: Number, startDate?: string, endDate?: string): Observable<BehaviourExecutionRes>

    retrieveMetrics(identityId: Uuid, config: (x: MetricsReq) => void): Observable<MetricsRes>

    introspect(config: (x: IntrospectionReq) => void): Observable<IntrospectionRes>

    introspectSkills(config: (x: SkillIntrospectionReq) => void): Observable<SkillIntrospectionRes>

    preserve(config: (x: PreservationReq) => void): Observable<PreservationRes>

    preserveCreateIdentities(...impulses: [CreateIdentityImpulse]): Observable<CreatedIdentityImpulse>

    preserveUpdateIdentities(...impulses: [UpdateIdentityImpulse]): Observable<UpdatedIdentityImpulse>

    preserveDeleteIdentities(...impulses: [DeleteIdentityImpulse]): Observable<DeletedIdentityImpulse>

    preserveCreateTenants(...impulses: [CreateTenantImpulse]): Observable<CreatedTenantImpulse>

    preserveUpdateTenants(...impulses: [UpdateTenantImpulse]): Observable<UpdatedTenantImpulse>

    preserveDeleteTenants(...impulses: [DeleteTenantImpulse]): Observable<DeletedTenantImpulse>

    preserveCreateUsers(...impulses: [CreateUserImpulse]): Observable<CreatedUserImpulse>

    preserveUpdateUsers(...impulses: [UpdateUserImpulse]): Observable<UpdatedUserImpulse>

    preserveDeleteUsers(...impulses: [DeleteUserImpulse]): Observable<DeletedUserImpulse>

    preserveCreateApiKeys(...impulses: [CreateApiKeyImpulse]): Observable<CreatedApiKeyImpulse>

    preserveUpdateApiKeys(...impulses: [UpdateApiKeyImpulse]): Observable<UpdatedApiKeyImpulse>

    preserveDeleteApiKeys(...impulses: [DeleteApiKeyImpulse]): Observable<DeletedApiKeyImpulse>

    preserveCreateRoles(...impulses: [CreateRoleImpulse]): Observable<CreatedRoleImpulse>

    preserveUpdateRoles(...impulses: [UpdateRoleImpulse]): Observable<UpdatedRoleImpulse>

    preserveDeleteRoles(...impulses: [DeleteRoleImpulse]): Observable<DeletedRoleImpulse>

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

    preserveConnectNodeSet(nodeId: Uuid, impulse: ConnectSetNodeImpulse): Observable<ConnectNodeSetImpulse>

    preserveConnectNodeUnset(nodeId: Uuid, impulse: ConnectUnsetNodeImpulse): Observable<ConnectNodeUnsetImpulse>

    preserveConnectNodeAppend(nodeId: Uuid, impulse: ConnectAppendNodeImpulse): Observable<ConnectNodeAppendedImpulse>

    preserveConnectNodeRemove(nodeId: Uuid, impulse: ConnectRemoveNodeImpulse): Observable<ConnectNodeRemovedImpulse>

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
