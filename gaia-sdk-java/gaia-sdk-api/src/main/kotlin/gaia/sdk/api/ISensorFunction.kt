package gaia.sdk.api

import gaia.sdk.Uuid
import gaia.sdk.request.input.*
import gaia.sdk.request.type.*
import gaia.sdk.response.type.CanceledSkillBuildJobImpulse
import gaia.sdk.response.type.CreatedSkillBuildJobImpulse
import gaia.sdk.response.type.Practice
import org.reactivestreams.Publisher

interface ISensorFunction {
    fun retrieve(config: Retrieval.() -> Unit): Publisher<gaia.sdk.response.type.Retrieval>
    fun retrieveExperience(config: Experience.() -> Unit): Publisher<gaia.sdk.response.type.Experience>
    fun retrieveKnowledge(config: Knowledge.() -> Unit): Publisher<gaia.sdk.response.type.Knowledge>
    fun retrieveEdges(source: Uuid, config: Edge.() -> Unit, limit: Int? = null, offset: Long? = null): Publisher<gaia.sdk.response.type.Edge>
    fun retrieveEdge(source: Uuid, edgeId: Uuid, config: Edge.() -> Unit): Publisher<gaia.sdk.response.type.Edge>
    fun retrieveIdentities(config: Identity.() -> Unit, limit: Int? = null, offset: Long? = null): Publisher<gaia.sdk.response.type.Identity>
    fun retrieveIdentity(identityId: Uuid, config: Identity.() -> Unit): Publisher<gaia.sdk.response.type.Identity>
    fun retrieveTenants(config: Tenant.() -> Unit, limit: Int? = null, offset: Long? = null): Publisher<gaia.sdk.response.type.Tenant>
    fun retrieveTenant(tenantId: Uuid, config: Tenant.() -> Unit): Publisher<gaia.sdk.response.type.Tenant>
    fun retrieveUsers(config: User.() -> Unit, limit: Int? = null, offset: Long? = null): Publisher<gaia.sdk.response.type.User>
    fun retrieveUser(userId: Uuid, config: User.() -> Unit): Publisher<gaia.sdk.response.type.User>
    fun retrieveApiKeys(config: ApiKey.() -> Unit, limit: Int? = null, offset: Long? = null): Publisher<gaia.sdk.response.type.ApiKey>
    fun retrieveApiKey(apiKeyId: Uuid, config: ApiKey.() -> Unit): Publisher<gaia.sdk.response.type.ApiKey>
    fun retrieveRoles(tenantId: Uuid, config: Role.() -> Unit, limit: Int? = null, offset: Long? = null): Publisher<gaia.sdk.response.type.Role>
    fun retrieveRole(tenantId: Uuid, roleId: Uuid, config: Role.() -> Unit): Publisher<gaia.sdk.response.type.Role>
    fun retrieveIntents(identityId: Uuid, config: Intent.() -> Unit, limit: Int? = null, offset: Long? = null): Publisher<gaia.sdk.response.type.Intent>
    fun retrieveIntent(identityId: Uuid, reference: Uuid, config: Intent.() -> Unit): Publisher<gaia.sdk.response.type.Intent>
    fun retrievePrompts(identityId: Uuid, config: Prompt.() -> Unit, limit: Int? = null, offset: Long? = null): Publisher<gaia.sdk.response.type.Prompt>
    fun retrievePrompt(identityId: Uuid, reference: Uuid, config: Prompt.() -> Unit): Publisher<gaia.sdk.response.type.Prompt>
    fun retrieveStatements(identityId: Uuid, config: Statement.() -> Unit, limit: Int? = null, offset: Long? = null): Publisher<gaia.sdk.response.type.Statement>
    fun retrieveStatement(identityId: Uuid, reference: Uuid, config: Statement.() -> Unit): Publisher<gaia.sdk.response.type.Statement>
    fun retrieveFulfilments(identityId: Uuid, config: Fulfilment.() -> Unit, limit: Int? = null, offset: Long? = null): Publisher<gaia.sdk.response.type.Fulfilment>
    fun retrieveFulfilment(identityId: Uuid, reference: Uuid, config: Fulfilment.() -> Unit): Publisher<gaia.sdk.response.type.Fulfilment>
    fun retrieveCodes(identityId: Uuid, config: Code.() -> Unit, limit: Int? = null, offset: Long? = null): Publisher<gaia.sdk.response.type.Code>
    fun retrieveCode(identityId: Uuid, reference: Uuid, config: Code.() -> Unit): Publisher<gaia.sdk.response.type.Code>
    fun retrieveBehaviours(identityId: Uuid, config: Behaviour.() -> Unit, limit: Int? = null, offset: Long? = null): Publisher<gaia.sdk.response.type.Behaviour>
    fun retrieveBehaviour(identityId: Uuid, reference: Uuid, config: Behaviour.() -> Unit): Publisher<gaia.sdk.response.type.Behaviour>
    fun retrieveSkills(tenantId: Uuid, config: Skill.() -> Unit, limit: Int? = null, offset: Long? = null): Publisher<gaia.sdk.response.type.Skill>
    fun retrieveSkill(tenantId: Uuid, reference: Uuid, config: Skill.() -> Unit): Publisher<gaia.sdk.response.type.Skill>
    fun retrieveSkillProvisions(tenantId: Uuid, config: SkillProvision.() -> Unit, limit: Int? = null, offset: Long? = null): Publisher<gaia.sdk.response.type.SkillProvision>
    fun retrieveSkillProvision(tenantId: Uuid, reference: Uuid, config: SkillProvision.() -> Unit): Publisher<gaia.sdk.response.type.SkillProvision>
    fun retrieveBehaviourExecution(identityId: Uuid, processInstanceId: Uuid, config: BehaviourExecutionDetail.() -> Unit): Publisher<gaia.sdk.response.type.BehaviourExecutionDetail>
    fun retrieveBehaviourExecutions(identityId: Uuid, config: BehaviourExecution.() -> Unit, limit: Int? = null, offset: Long? = null, startDate: String? = null, endDate: String? = null): Publisher<gaia.sdk.response.type.BehaviourExecution>
    fun retrieveIdentityMetrics(identityId: Uuid, startDate: String, endDate: String, config: IdentityMetrics.() -> Unit, limit: Int?): Publisher<gaia.sdk.response.type.IdentityMetrics>
    fun introspect(config: Introspection.() -> Unit): Publisher<gaia.sdk.response.type.Introspection>
    fun introspectBuildJobs(tenantId: Uuid, config: (SkillBuildJob.() -> Unit)? = null): Publisher<gaia.sdk.response.type.SkillBuildJob>
    fun practice(config: gaia.sdk.request.type.Practice.() -> Unit): Publisher<Practice>
    fun practiceBuild(impulse: CreateSkillBuildJobImpulse, config: (gaia.sdk.request.type.CreatedSkillBuildJobImpulse.() -> Unit)? = null): Publisher<CreatedSkillBuildJobImpulse>
    fun practiceCancel(impulse: CancelSkillBuildJobImpulse, config: (gaia.sdk.request.type.CanceledSkillBuildJobImpulse.() -> Unit)? = null): Publisher<CanceledSkillBuildJobImpulse>
    fun preserve(config: Preservation.() -> Unit): Publisher<gaia.sdk.response.type.Preservation>
    fun preserveCreateIdentities(vararg impulses: CreateIdentityImpulse): Publisher<gaia.sdk.response.type.CreatedIdentityImpulse>
    fun preserveUpdateIdentities(vararg impulses: UpdateIdentityImpulse): Publisher<gaia.sdk.response.type.UpdatedIdentityImpulse>
    fun preserveDeleteIdentities(vararg impulses: DeleteIdentityImpulse): Publisher<gaia.sdk.response.type.DeletedIdentityImpulse>
    fun preserveCreateTenants(vararg impulses: CreateTenantImpulse): Publisher<gaia.sdk.response.type.CreatedTenantImpulse>
    fun preserveUpdateTenants(vararg impulses: UpdateTenantImpulse): Publisher<gaia.sdk.response.type.UpdatedTenantImpulse>
    fun preserveDeleteTenants(vararg impulses: DeleteTenantImpulse): Publisher<gaia.sdk.response.type.DeletedTenantImpulse>
    fun preserveCreateUsers(vararg impulses: CreateUserImpulse): Publisher<gaia.sdk.response.type.CreatedUserImpulse>
    fun preserveUpdateUsers(vararg impulses: UpdateUserImpulse): Publisher<gaia.sdk.response.type.UpdatedUserImpulse>
    fun preserveDeleteUsers(vararg impulses: DeleteUserImpulse): Publisher<gaia.sdk.response.type.DeletedUserImpulse>
    fun preserveCreateApiKeys(vararg impulses: CreateApiKeyImpulse): Publisher<gaia.sdk.response.type.CreatedApiKeyImpulse>
    fun preserveUpdateApiKeys(vararg impulses: UpdateApiKeyImpulse): Publisher<gaia.sdk.response.type.UpdatedApiKeyImpulse>
    fun preserveDeleteApiKeys(vararg impulses: DeleteApiKeyImpulse): Publisher<gaia.sdk.response.type.DeletedApiKeyImpulse>
    fun preserveCreateRoles(vararg impulses: CreateRoleImpulse): Publisher<gaia.sdk.response.type.CreatedRoleImpulse>
    fun preserveUpdateRoles(vararg impulses: UpdateRoleImpulse): Publisher<gaia.sdk.response.type.UpdatedRoleImpulse>
    fun preserveDeleteRoles(vararg impulses: DeleteRoleImpulse): Publisher<gaia.sdk.response.type.DeletedRoleImpulse>
    fun preserveCreateIntents(vararg impulses: CreateIntentImpulse): Publisher<gaia.sdk.response.type.CreatedIntentImpulse>
    fun preserveUpdateIntents(vararg impulses: UpdateIntentImpulse): Publisher<gaia.sdk.response.type.UpdatedIntentImpulse>
    fun preserveDeleteIntents(vararg impulses: DeleteIntentImpulse): Publisher<gaia.sdk.response.type.DeletedIntentImpulse>
    fun preserveCreatePrompts(vararg impulses: CreatePromptImpulse): Publisher<gaia.sdk.response.type.CreatedPromptImpulse>
    fun preserveUpdatePrompts(vararg impulses: UpdatePromptImpulse): Publisher<gaia.sdk.response.type.UpdatedPromptImpulse>
    fun preserveDeletePrompts(vararg impulses: DeletePromptImpulse): Publisher<gaia.sdk.response.type.DeletedPromptImpulse>
    fun preserveCreateStatements(vararg impulses: CreateStatementImpulse): Publisher<gaia.sdk.response.type.CreatedStatementImpulse>
    fun preserveUpdateStatements(vararg impulses: UpdateStatementImpulse): Publisher<gaia.sdk.response.type.UpdatedStatementImpulse>
    fun preserveDeleteStatements(vararg impulses: DeleteStatementImpulse): Publisher<gaia.sdk.response.type.DeletedStatementImpulse>
    fun preserveCreateFulfilments(vararg impulses: CreateFulfilmentImpulse): Publisher<gaia.sdk.response.type.CreatedFulfilmentImpulse>
    fun preserveUpdateFulfilments(vararg impulses: UpdateFulfilmentImpulse): Publisher<gaia.sdk.response.type.UpdatedFulfilmentImpulse>
    fun preserveDeleteFulfilments(vararg impulses: DeleteFulfilmentImpulse): Publisher<gaia.sdk.response.type.DeletedFulfilmentImpulse>
    fun preserveCreateBehaviours(vararg impulses: CreateBehaviourImpulse): Publisher<gaia.sdk.response.type.CreatedBehaviourImpulse>
    fun preserveUpdateBehaviours(vararg impulses: UpdateBehaviourImpulse): Publisher<gaia.sdk.response.type.UpdatedBehaviourImpulse>
    fun preserveDeleteBehaviours(vararg impulses: DeleteBehaviourImpulse): Publisher<gaia.sdk.response.type.DeletedBehaviourImpulse>
    fun preserveCreateCodes(vararg impulses: CreateCodeImpulse): Publisher<gaia.sdk.response.type.CreatedCodeImpulse>
    fun preserveUpdateCodes(vararg impulses: UpdateCodeImpulse): Publisher<gaia.sdk.response.type.UpdatedCodeImpulse>
    fun preserveDeleteCodes(vararg impulses: DeleteCodeImpulse): Publisher<gaia.sdk.response.type.DeletedCodeImpulse>
    fun preserveCreateEdges(vararg impulses: CreateEdgeImpulse): Publisher<gaia.sdk.response.type.CreatedEdgeImpulse>
    fun preserveDeleteEdges(vararg impulses: DeleteEdgeImpulse): Publisher<gaia.sdk.response.type.DeletedEdgeImpulse>
    fun preserveCreateSkills(vararg impulses: CreateSkillImpulse): Publisher<gaia.sdk.response.type.CreatedSkillImpulse>
    fun preserveUpdateSkills(vararg impulses: UpdateSkillImpulse): Publisher<gaia.sdk.response.type.UpdatedSkillImpulse>
    fun preserveDeleteSkills(vararg impulses: DeleteSkillImpulse): Publisher<gaia.sdk.response.type.DeletedSkillImpulse>
    fun preserveCreateSkillProvisions(vararg impulses: CreateSkillProvisionImpulse): Publisher<gaia.sdk.response.type.CreatedSkillProvisionImpulse>
    fun preserveUpdateSkillProvisions(vararg impulses: UpdateSkillProvisionImpulse): Publisher<gaia.sdk.response.type.UpdatedSkillProvisionImpulse>
    fun preserveDeleteSkillProvisions(vararg impulses: DeleteSkillProvisionImpulse): Publisher<gaia.sdk.response.type.DeletedSkillProvisionImpulse>
    fun preserveConnectNodeSet(nodeId: Uuid, impulse: ConnectSetNodeImpulse): Publisher<gaia.sdk.response.type.ConnectNodeSetImpulse>
    fun preserveConnectNodeUnset(nodeId: Uuid, impulse: ConnectUnsetNodeImpulse): Publisher<gaia.sdk.response.type.ConnectNodeUnsetImpulse>
    fun preserveConnectNodeAppend(nodeId: Uuid, impulse: ConnectAppendNodeImpulse): Publisher<gaia.sdk.response.type.ConnectNodeAppendedImpulse>
    fun preserveConnectNodeRemove(nodeId: Uuid, impulse: ConnectRemoveNodeImpulse): Publisher<gaia.sdk.response.type.ConnectNodeRemovedImpulse>
    fun perceive(config: Perception.() -> Unit): Publisher<gaia.sdk.response.type.Perception>
    fun perceiveAction(impulse: PerceiveActionImpulse): Publisher<gaia.sdk.response.type.PerceivedImpulse>
    fun perceiveData(impulse: PerceiveDataImpulse): Publisher<gaia.sdk.response.type.PerceivedImpulse>
}
