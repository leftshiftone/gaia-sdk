import {GaiaClient, GaiaClientBuilder, GaiaRequest} from "..";
import {Rx} from "../api/rx"
import {
    ApiKeyReq, ApiKeyRes,
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
    TenantReq,
    TenantRes,
    UserReq,
    UserRes,
    UpdatedIntentImpulse,
    UpdateIntentImpulse
} from "../graphql";
import {ISensorFunction} from "../api/ISensorFunction";
import {from, Observable} from "rxjs";
import {Retrieval as RetrievalOut} from "../graphql/response/type/Retrieval";
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
import {DeletedCodeImpulse} from "../graphql/response/type/DeletedCodeImpulse";
import {DeleteCodeImpulse} from "../graphql/request/input/DeleteCodeImpulse";
import {CreateEdgeImpulse} from "../graphql/request/input/CreateEdgeImpulse";
import {CreatedEdgeImpulse} from "../graphql/response/type/CreatedEdgeImpulse"
import {DeletedEdgeImpulse} from "../graphql/response/type/DeletedEdgeImpulse";
import {DeleteEdgeImpulse} from "../graphql/request/input/DeleteEdgeImpulse";
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
import {GaiaCredentials} from "../api/GaiaCredentials";
import {CreateIdentityImpulse} from "../graphql/request/input/CreateIdentityImpulse";
import {UpdateIdentityImpulse} from "../graphql/request/input/UpdateIdentityImpulse";
import {DeleteIdentityImpulse} from "../graphql/request/input/DeleteIdentityImpulse";
import {CreatedIdentityImpulse} from "../graphql/response/type/CreatedIdentityImpulse";
import {UpdatedIdentityImpulse} from "../graphql/response/type/UpdatedIdentityImpulse";
import {DeletedIdentityImpulse} from "../graphql/response/type/DeletedIdentityImpulse";
import {CreateTenantImpulse} from "../graphql/request/input/CreateTenantImpulse";
import {CreatedTenantImpulse} from "../graphql/response/type/CreatedTenantImpulse";
import {UpdateTenantImpulse} from "../graphql/request/input/UpdateTenantImpulse";
import {UpdatedTenantImpulse} from "../graphql/response/type/UpdatedTenantImpulse";
import {DeleteTenantImpulse} from "../graphql/request/input/DeleteTenantImpulse";
import {DeletedTenantImpulse} from "../graphql/response/type/DeletedTenantImpulse";
import {CreateUserImpulse} from "../graphql/request/input/CreateUserImpulse";
import {CreatedUserImpulse} from "../graphql/response/type/CreatedUserImpulse";
import {UpdateUserImpulse} from "../graphql/request/input/UpdateUserImpulse";
import {UpdatedUserImpulse} from "../graphql/response/type/UpdatedUserImpulse";
import {DeleteUserImpulse} from "../graphql/request/input/DeleteUserImpulse";
import {DeletedUserImpulse} from "../graphql/response/type/DeletedUserImpulse";
import {CreateApiKeyImpulse} from "../graphql/request/input/CreateApiKeyImpulse";
import {CreatedApiKeyImpulse} from "../graphql/response/type/CreatedApiKeyImpulse";
import {UpdateApiKeyImpulse} from "../graphql/request/input/UpdateApiKeyImpulse";
import {UpdatedApiKeyImpulse} from "../graphql/response/type/UpdatedApiKeyImpulse";
import {DeleteApiKeyImpulse} from "../graphql/request/input/DeleteApiKeyImpulse";
import {DeletedApiKeyImpulse} from "../graphql/response/type/DeletedApiKeyImpulse";
import {GaiaClientFactory} from '../graphql/GaiaClientFactory';
import {ConnectNodeSetImpulse} from "../graphql/response/type/ConnectNodeSetImpulse";
import {EdgeType, getEdgeTypeEnumClass} from "../graphql/request/enumeration/EdgeType";
import {ConnectNodeUnsetImpulse} from "../graphql/response/type/ConnectNodeUnsetImpulse";
import {ConnectNodeAppendedImpulse} from "../graphql/response/type/ConnectNodeAppendedImpulse";
import {ConnectNodeRemovedImpulse} from "../graphql/response/type/ConnectNodeRemovedImpulse";

export class HttpSensorFunction implements ISensorFunction {

    private readonly client: GaiaClient;

    constructor(url: string, credentials: GaiaCredentials, gaiaClientFactory: GaiaClientFactory) {
        this.client = gaiaClientFactory.http(url + "/api/entity")
            .withCredentials(credentials)
            .build()

    }

    public retrieve(config: (x: RetrievalReq) => void): Observable<RetrievalRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(config))));
        return Rx.mapQ<RetrievalOut>(observable, (e) => e.retrieve!);
    }

    public retrieveKnowledge(config: (x: KnowledgeReq) => void): Observable<KnowledgeRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(r => {
            r.knowledge(config)
        }))));
        return Rx.mapQ<KnowledgeRes>(observable, (e) => e.retrieve!.knowledge!);
    }

    public retrieveExperience(config: (x: ExperienceReq) => void): Observable<ExperienceRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(r => r.experience(config)))));
        return Rx.mapQ<ExperienceRes>(observable, (e) => e.retrieve!.experience!);
    };

    public retrieveEdges(source: Uuid, config: (x: EdgeReq) => void, limit?: Number, offset?: Number): Observable<EdgeRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(r => {
            r.knowledge(k => k.edges(source, limit, offset, undefined, undefined, config));
        }))));
        return Rx.flatMapQ<EdgeRes>(observable, (e) => e.retrieve!.knowledge!.edges!);
    }

    public retrieveEdge(source: Uuid, target: Uuid, config: (x: EdgeReq) => void): Observable<EdgeRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(r => {
            r.knowledge(k => k.edge(source, target, config));
        }))));
        return Rx.mapQ<EdgeRes>(observable, (e) => e.retrieve!.knowledge!.edge!);
    }

    public retrieveIdentities(config: (x: IdentityReq) => void, limit?: Number, offset?: Number): Observable<IdentityRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(g => g.identities(limit, offset, undefined, undefined, config));
        }))));
        return Rx.flatMapQ<IdentityRes>(observable, (e) => e.retrieve!.knowledge!.identities!);
    }

    public retrieveIdentity(identityId: Uuid, config: (x: IdentityReq) => void): Observable<IdentityRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(g => g.identity(identityId, config));
        }))));
        return Rx.mapQ<IdentityRes>(observable, (e) => e.retrieve!.knowledge!.identity!);
    }

    public retrieveTenants(config: (x: TenantReq) => void, limit?: Number, offset?: Number): Observable<TenantRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(g => g.tenants(limit, offset, undefined, undefined, config));
        }))));
        return Rx.flatMapQ<TenantRes>(observable, (e) => e.retrieve!.knowledge!.tenants!);
    }

    public retrieveTenant(tenantId: Uuid, config: (x: TenantReq) => void): Observable<TenantRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(g => g.tenant(tenantId, config));
        }))));
        return Rx.mapQ<TenantRes>(observable, (e) => e.retrieve!.knowledge!.tenant!);
    }

    public retrieveUsers(config: (x: UserReq) => void, limit?: Number, offset?: Number): Observable<UserRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(g => g.users(limit, offset, undefined, undefined, config));
        }))));
        return Rx.flatMapQ<UserRes>(observable, (e) => e.retrieve!.knowledge!.users!);
    }

    public retrieveUser(userId: Uuid, config: (x: UserReq) => void): Observable<UserRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(g => g.user(userId, config));
        }))));
        return Rx.mapQ<UserRes>(observable, (e) => e.retrieve!.knowledge!.user!);
    }

    public retrieveApiKeys(config: (x: ApiKeyReq) => void, limit?: Number, offset?: Number): Observable<ApiKeyRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(g => g.apiKeys(limit, offset, undefined, undefined, config));
        }))));
        return Rx.flatMapQ<ApiKeyRes>(observable, (e) => e.retrieve!.knowledge!.apiKeys!);
    }

    public retrieveApiKey(apiKeyId: Uuid, config: (x: ApiKeyReq) => void): Observable<ApiKeyRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(g => g.apiKey(apiKeyId, config));
        }))));
        return Rx.mapQ<ApiKeyRes>(observable, (e) => e.retrieve!.knowledge!.apiKey!);
    }

    public retrieveIntents(identityId: Uuid, config: (x: IntentReq) => void, limit?: Number, offset?: Number): Observable<IntentRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(g => g.intents(identityId, limit, offset, undefined, undefined, config));
        }))));
        return Rx.flatMapQ<IntentRes>(observable, (e) => e.retrieve!.knowledge!.intents!);
    }

    public retrieveIntent(identityId: Uuid, reference: Uuid, config: (x: IntentReq) => void): Observable<IntentRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(g => g.intent(identityId, reference, config));
        }))));
        return Rx.mapQ<IntentRes>(observable, (e) => e.retrieve!.knowledge!.intent!);
    }

    public retrievePrompts(identityId: Uuid, config: (x: PromptReq) => void, limit?: Number, offset?: Number): Observable<PromptRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.prompts(identityId, limit, offset, undefined, undefined, config));
        }))));
        return Rx.flatMapQ<PromptRes>(observable, (e) => e.retrieve!.knowledge!.prompts!);
    }

    public retrievePrompt(identityId: Uuid, reference: Uuid, config: (x: PromptReq) => void): Observable<PromptRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.prompt(identityId, reference, config));
        }))));
        return Rx.mapQ<PromptRes>(observable, (e) => e.retrieve!.knowledge!.prompt!);
    }

    public retrieveStatements(identityId: Uuid, config: (x: StatementReq) => void, limit?: Number, offset?: Number): Observable<StatementRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.statements(identityId, limit, offset, undefined, undefined, config));
        }))));
        return Rx.flatMapQ<StatementRes>(observable, (e) => e.retrieve!.knowledge!.statements!);
    }

    public retrieveStatement(identityId: Uuid, reference: Uuid, config: (x: StatementReq) => void): Observable<StatementRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.statement(identityId, reference, config));
        }))));
        return Rx.mapQ<StatementRes>(observable, (e) => e.retrieve!.knowledge!.statement!);
    }

    public retrieveFulfilments(identityId: Uuid, config: (x: FulfilmentReq) => void, limit?: Number, offset?: Number): Observable<FulfilmentRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.fulfilments(identityId, limit, offset, undefined, undefined, config));
        }))));
        return Rx.flatMapQ<StatementRes>(observable, (e) => e.retrieve!.knowledge!.fulfilments!);
    }

    public retrieveFulfilment(identityId: Uuid, reference: Uuid, config: (x: FulfilmentReq) => void): Observable<FulfilmentRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.fulfilment(identityId, reference, config));
        }))));
        return Rx.mapQ<StatementRes>(observable, (e) => e.retrieve!.knowledge!.fulfilment!);
    }

    public retrieveCodes(identityId: Uuid, config: (x: CodeReq) => void, limit?: Number, offset?: Number): Observable<CodeRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.codes(identityId, limit, offset, undefined, undefined, config));
        }))));
        return Rx.flatMapQ<CodeRes>(observable, (e) => e.retrieve!.knowledge!.codes!);
    }

    public retrieveCode(identityId: Uuid, reference: Uuid, config: (x: CodeReq) => void): Observable<CodeRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.code(identityId, reference, config));
        }))));
        return Rx.mapQ<CodeRes>(observable, (e) => e.retrieve!.knowledge!.code!);
    }

    public retrieveBehaviours(identityId: Uuid, config: (x: BehaviourReq) => void, limit?: Number, offset?: Number): Observable<BehaviourRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.behaviours(identityId, limit, offset, undefined, undefined, config));
        }))));
        return Rx.flatMapQ<BehaviourRes>(observable, (e) => e.retrieve!.knowledge!.behaviours!);
    }

    public retrieveBehaviour(identityId: Uuid, reference: Uuid, config: (x: BehaviourReq) => void): Observable<BehaviourRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.behaviour(identityId, reference, config));
        }))));
        return Rx.mapQ<BehaviourRes>(observable, (e) => e.retrieve!.knowledge!.behaviour!);
    }

    public retrieveSkills(tenantId: Uuid, config: (x: SkillReq) => void, limit?: Number, offset?: Number): Observable<SkillRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.skills(tenantId, limit, offset, undefined, undefined, config));
        }))));
        return Rx.flatMapQ<SkillRes>(observable, (e) => e.retrieve!.knowledge!.skills!);
    }

    public retrieveSkill(tenantId: Uuid, reference: Uuid, config: (x: SkillReq) => void): Observable<SkillRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.skill(tenantId, reference, config));
        }))));
        return Rx.mapQ<SkillRes>(observable, (e) => e.retrieve!.knowledge!.skill!);
    }

    public retrieveSkillProvisions(tenantId: Uuid, config: (x: SkillProvisionReq) => void, limit?: Number, offset?: Number): Observable<SkillProvisionRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.skillProvisions(tenantId, limit, offset, undefined, undefined, config));
        }))));
        return Rx.flatMapQ<SkillProvisionRes>(observable, (e) => e.retrieve!.knowledge!.skillProvisions!);
    }

    public retrieveSkillProvision(tenantId: Uuid, reference: Uuid, config: (x: SkillProvisionReq) => void): Observable<SkillProvisionRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.skillProvision(tenantId, reference, config));
        }))));
        return Rx.mapQ<SkillProvisionRes>(observable, (e) => e.retrieve!.knowledge!.skillProvision!);
    }

    public introspect(config: (x: IntrospectionReq) => void): Observable<IntrospectionRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.introspect(config))));
        return Rx.mapQ<IntrospectionRes>(observable, (e) => e.introspect!);
    };

    public introspectSkills(config: (x: SkillIntrospectionReq) => void): Observable<SkillIntrospectionRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.introspect(g => g.skills(config)))));
        return Rx.flatMapQ<SkillIntrospectionRes>(observable, (e) => e.introspect!.skills!);
    }

    public preserve(config: (x: PreservationReq) => void): Observable<PreservationRes> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(config))));
        return Rx.mapM<PreservationRes>(observable, (e) => e.preserve!);
    }

    public preserveCreateIdentities(...impulses: [CreateIdentityImpulse]): Observable<CreatedIdentityImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.create(_ => _.identities(impulses, i => {
                i.id()
                i.data(d => {
                    d.identityId()
                    d.qualifier()
                })
            }))
        }))));
        return Rx.flatMapM<CreatedIdentityImpulse>(observable, (e) => e.preserve!.create!.identities!);
    }

    public preserveUpdateIdentities(...impulses: [UpdateIdentityImpulse]): Observable<UpdatedIdentityImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.update(_ => _.identities(impulses, i => {
                i.id()
                i.data(d => {
                    d.identityId()
                    d.qualifier()
                })
            }))
        }))));
        return Rx.flatMapM<UpdatedIdentityImpulse>(observable, (e) => e.preserve!.update!.identities!);
    }

    public preserveDeleteIdentities(...impulses: [DeleteIdentityImpulse]): Observable<DeletedIdentityImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.delete(_ => _.identities(impulses, i => {
                i.id()
                i.data(d => {
                    d.identityId()
                })
            }))
        }))));
        return Rx.flatMapM<DeletedIdentityImpulse>(observable, (e) => e.preserve!.delete!.identities!);
    }

    public preserveCreateTenants(...impulses: [CreateTenantImpulse]): Observable<CreatedTenantImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.create(_ => _.tenants(impulses, i => {
                i.id()
                i.data(d => {
                    d.tenantId()
                    d.qualifier()
                    d.implicitIdentities()
                    d.explicitIdentities()
                })
            }));
        }))));
        return Rx.flatMapM<CreatedTenantImpulse>(observable, (e) => e.preserve!.create!.tenants!);
    }

    public preserveUpdateTenants(...impulses: [UpdateTenantImpulse]): Observable<UpdatedTenantImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.update(_ => _.tenants(impulses, i => {
                i.id()
                i.data(d => {
                    d.tenantId()
                    d.qualifier()
                    d.implicitIdentities()
                    d.explicitIdentities()
                })
            }))
        }))));
        return Rx.flatMapM<UpdatedTenantImpulse>(observable, (e) => e.preserve!.update!.tenants!);
    }

    public preserveDeleteTenants(...impulses: [DeleteTenantImpulse]): Observable<DeletedTenantImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.delete(_ => _.tenants(impulses, i => {
                i.id()
                i.data(d => {
                    d.tenantId()
                })
            }))
        }))));
        return Rx.flatMapM<DeletedTenantImpulse>(observable, (e) => e.preserve!.delete!.tenants!);
    }

    public preserveCreateUsers(...impulses: [CreateUserImpulse]): Observable<CreatedUserImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.create(_ => _.users(impulses, i => {
                i.id()
                i.data(d => {
                    d.userId()
                    d.username()
                    d.groups()
                    d.permissions()
                    d.roles()
                    d.using2FA()
                    d.tenants()
                })
            }));
        }))));
        return Rx.flatMapM<CreatedUserImpulse>(observable, (e) => e.preserve!.create!.users!);
    }

    public preserveUpdateUsers(...impulses: [UpdateUserImpulse]): Observable<UpdatedUserImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.update(_ => _.users(impulses, i => {
                i.id()
                i.data(d => {
                    d.userId()
                    d.username()
                    d.groups()
                    d.permissions()
                    d.roles()
                    d.using2FA()
                    d.tenants()
                })
            }))
        }))));
        return Rx.flatMapM<UpdatedUserImpulse>(observable, (e) => e.preserve!.update!.users!);
    }

    public preserveDeleteUsers(...impulses: [DeleteUserImpulse]): Observable<DeletedUserImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.delete(_ => _.users(impulses, i => {
                i.id()
                i.data(d => {
                    d.userId()
                })
            }))
        }))));
        return Rx.flatMapM<DeletedUserImpulse>(observable, (e) => e.preserve!.delete!.users!);
    }

    public preserveCreateApiKeys(...impulses: [CreateApiKeyImpulse]): Observable<CreatedApiKeyImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.create(_ => _.apiKeys(impulses, i => {
                i.id()
                i.data(d => {
                    d.apiKeyId()
                    d.name()
                    d.secret()
                    d.enabled()
                })
            }));
        }))));
        return Rx.flatMapM<CreatedApiKeyImpulse>(observable, (e) => e.preserve!.create!.apiKeys!);
    }

    public preserveUpdateApiKeys(...impulses: [UpdateApiKeyImpulse]): Observable<UpdatedApiKeyImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.update(_ => _.apiKeys(impulses, i => {
                i.id()
                i.data(d => {
                    d.apiKeyId()
                    d.name()
                    d.secret()
                    d.enabled()
                })
            }))
        }))));
        return Rx.flatMapM<UpdatedApiKeyImpulse>(observable, (e) => e.preserve!.update!.apiKeys!);
    }

    public preserveDeleteApiKeys(...impulses: [DeleteApiKeyImpulse]): Observable<DeletedApiKeyImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.delete(_ => _.apiKeys(impulses, i => {
                i.id()
                i.data(d => {
                    d.apiKeyId()
                })
            }))
        }))));
        return Rx.flatMapM<DeletedApiKeyImpulse>(observable, (e) => e.preserve!.delete!.apiKeys!);
    }

    public preserveCreateIntents(...impulses: [CreateIntentImpulse]): Observable<CreatedIntentImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.create(_ => _.intents(impulses, i => {
                i.id()
                i.data(d => {
                    d.identityId()
                    d.reference()
                    d.qualifier()
                    d.appendent()
                    d.utterance()
                    d.labelList()
                    d.version()
                })
            }))
        }))));
        return Rx.flatMapM<CreatedIntentImpulse>(observable, (e) => e.preserve!.create!.intents!);
    }

    public preserveUpdateIntents(...impulses: [UpdateIntentImpulse]): Observable<UpdatedIntentImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.update(_ => _.intents(impulses, i => {
                i.id()
                i.data(d => {
                    d.identityId()
                    d.reference()
                    d.qualifier()
                    d.appendent()
                    d.utterance()
                    d.labelList()
                    d.version()
                })
            }))
        }))));
        return Rx.flatMapM<UpdatedIntentImpulse>(observable, (e) => e.preserve!.update!.intents!);
    }

    public preserveDeleteIntents(...impulses: [DeleteIntentImpulse]): Observable<DeletedIntentImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.delete(_ => _.intents(impulses, i => {
                i.id()
                i.data(d => {
                    d.identityId()
                    d.reference()
                })
            }))
        }))));
        return Rx.flatMapM<DeletedIntentImpulse>(observable, (e) => e.preserve!.delete!.intents!);
    }

    public preserveCreatePrompts(...impulses: [CreatePromptImpulse]): Observable<CreatedPromptImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.create(_ => _.prompts(impulses, i => {
                i.id()
                i.data(d => {
                    d.identityId()
                    d.reference()
                    d.qualifier()
                    d.appendent()
                    d.utterance()
                    d.labelList()
                    d.version()
                })
            }))
        }))));
        return Rx.flatMapM<CreatedPromptImpulse>(observable, (e) => e.preserve!.create!.prompts!);
    }

    public preserveUpdatePrompts(...impulses: [UpdatePromptImpulse]): Observable<UpdatedPromptImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.update(_ => _.prompts(impulses, i => {
                i.id()
                i.data(d => {
                    d.identityId()
                    d.reference()
                    d.qualifier()
                    d.appendent()
                    d.utterance()
                    d.labelList()
                    d.version()
                })
            }))
        }))));
        return Rx.flatMapM<UpdatedPromptImpulse>(observable, (e) => e.preserve!.update!.prompts!);
    }

    public preserveDeletePrompts(...impulses: [DeletePromptImpulse]): Observable<DeletedPromptImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.delete(_ => _.prompts(impulses, i => {
                i.id()
                i.data(d => {
                    d.identityId()
                    d.reference()
                })
            }))
        }))));
        return Rx.flatMapM<DeletedPromptImpulse>(observable, (e) => e.preserve!.delete!.prompts!);
    }

    public preserveCreateStatements(...impulses: [CreateStatementImpulse]): Observable<CreatedStatementImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.create(_ => _.statements(impulses, i => {
                i.id()
                i.data(d => {
                    d.identityId()
                    d.reference()
                    d.qualifier()
                    d.appendent()
                    d.utterance()
                    d.labelList()
                    d.version()
                })
            }))
        }))));
        return Rx.flatMapM<CreatedStatementImpulse>(observable, (e) => e.preserve!.create!.statements!);
    }

    public preserveUpdateStatements(...impulses: [UpdateStatementImpulse]): Observable<UpdatedStatementImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.update(_ => _.statements(impulses, i => {
                i.id()
                i.data(d => {
                    d.identityId()
                    d.reference()
                    d.qualifier()
                    d.appendent()
                    d.utterance()
                    d.labelList()
                    d.version()
                })
            }))
        }))));
        return Rx.flatMapM<UpdatedStatementImpulse>(observable, (e) => e.preserve!.update!.statements!);
    }

    public preserveDeleteStatements(...impulses: [DeleteStatementImpulse]): Observable<DeletedStatementImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.delete(_ => _.statements(impulses, i => {
                i.id()
                i.data(d => {
                    d.identityId()
                    d.reference()
                })
            }))
        }))));
        return Rx.flatMapM<DeletedStatementImpulse>(observable, (e) => e.preserve!.delete!.statements!);
    }

    public preserveCreateSkills(...impulses: [CreateSkillImpulse]): Observable<CreatedSkillImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.create(_ => _.skills(impulses, i => {
                    i.id()
                    i.data(d => {
                        d.tenantId()
                        d.reference()
                        d.qualifier()
                        d.appendent()
                        d.labelList()
                        d.repositoryUri()
                    })
            }))
        }))));
        return Rx.flatMapM<CreatedSkillImpulse>(observable, (e) => e.preserve!.create!.skills!);
    }

    public preserveUpdateSkills(...impulses: [UpdateSkillImpulse]): Observable<UpdatedSkillImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.update(_ => _.skills(impulses, i => {
                    i.id()
                    i.data(d => {
                        d.tenantId()
                        d.reference()
                        d.qualifier()
                        d.appendent()
                        d.labelList()
                        d.repositoryUri()
                    })
            }))
        }))));
        return Rx.flatMapM<UpdatedSkillImpulse>(observable, (e) => e.preserve!.update!.skills!);
    }

    public preserveDeleteSkills(...impulses: [DeleteSkillImpulse]): Observable<DeletedSkillImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.delete(_ => _.skills(impulses, i => {
                    i.id()
                    i.data(d => {
                        d.tenantId()
                        d.reference()
                    })
            }))
        }))));
        return Rx.flatMapM<DeletedSkillImpulse>(observable, (e) => e.preserve!.delete!.skills!);
    }

    public preserveCreateSkillProvisions(...impulses: [CreateSkillProvisionImpulse]): Observable<CreatedSkillProvisionImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.create(_ => _.skillProvisions(impulses, i => {
                    i.id()
                    i.data(d => {
                        d.tenantId()
                        d.reference()
                        d.qualifier()
                        d.appendent()
                        d.labelList()
                        d.version()
                        d.skillRef()
                        d.cpu()
                        d.memory()
                        d.replicas()
                        d.enabled()
                        d.environment()
                        d.bootstrapTimeout()
                    })
            }))
        }))));
        return Rx.flatMapM<CreatedSkillProvisionImpulse>(observable, (e) => e.preserve!.create!.skillProvisions!);
    }

    public preserveUpdateSkillProvisions(...impulses: [UpdateSkillProvisionImpulse]): Observable<UpdatedSkillProvisionImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.update(_ => _.skillProvisions(impulses, i => {
                    i.id()
                    i.data(d => {
                        d.tenantId()
                        d.reference()
                        d.qualifier()
                        d.appendent()
                        d.labelList()
                        d.version()
                        d.skillRef()
                        d.cpu()
                        d.memory()
                        d.replicas()
                        d.enabled()
                        d.environment()
                        d.bootstrapTimeout()
                    })
            }))
        }))));
        return Rx.flatMapM<UpdatedSkillProvisionImpulse>(observable, (e) => e.preserve!.update!.skillProvisions!);
    }

    public preserveDeleteSkillProvisions(...impulses: [DeleteSkillProvisionImpulse]): Observable<DeletedSkillProvisionImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.delete(_ => _.skillProvisions(impulses, i => {
                    i.id()
                    i.data(d => {
                        d.tenantId()
                        d.reference()
                    })
            }))
        }))));
        return Rx.flatMapM<DeletedSkillProvisionImpulse>(observable, (e) => e.preserve!.delete!.skillProvisions!);
    }

    public preserveCreateFulfilments(...impulses: [CreateFulfilmentImpulse]): Observable<CreatedFulfilmentImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.create(_ => _.fulfilments(impulses, i => {
                i.id()
                i.data(d => {
                    d.identityId()
                    d.reference()
                    d.qualifier()
                    d.appendent()
                    d.utterance()
                    d.labelList()
                    d.version()
                })
            }))
        }))));
        return Rx.flatMapM<CreatedFulfilmentImpulse>(observable, (e) => e.preserve!.create!.fulfilments!);
    }

    public preserveUpdateFulfilments(...impulses: [UpdateFulfilmentImpulse]): Observable<UpdatedFulfilmentImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.update(_ => _.fulfilments(impulses, i => {
                i.id()
                i.data(d => {
                    d.identityId()
                    d.reference()
                    d.qualifier()
                    d.appendent()
                    d.utterance()
                    d.labelList()
                    d.version()
                })
            }))
        }))));
        return Rx.flatMapM<UpdatedFulfilmentImpulse>(observable, (e) => e.preserve!.update!.fulfilments!);
    }

    public preserveDeleteFulfilments(...impulses: [DeleteFulfilmentImpulse]): Observable<DeletedFulfilmentImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.delete(_ => _.fulfilments(impulses, i => {
                i.id()
                i.data(d => {
                    d.identityId()
                    d.reference()
                })
            }))
        }))));
        return Rx.flatMapM<DeletedFulfilmentImpulse>(observable, (e) => e.preserve!.delete!.fulfilments!);
    }

    public preserveCreateBehaviours(...impulses: [CreateBehaviourImpulse]): Observable<CreatedBehaviourImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.create(_ => _.behaviours(impulses, i => {
                i.id()
                i.data(d => {
                    d.identityId()
                    d.reference()
                    d.qualifier()
                    d.appendent()
                    d.behaviour()
                    d.labelList()
                })
            }))
        }))));
        return Rx.flatMapM<CreatedBehaviourImpulse>(observable, (e) => e.preserve!.create!.behaviours!);
    }

    public preserveUpdateBehaviours(...impulses: [UpdateBehaviourImpulse]): Observable<UpdatedBehaviourImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.update(_ => _.behaviours(impulses, i => {
                i.id()
                i.data(d => {
                    d.identityId()
                    d.reference()
                    d.qualifier()
                    d.appendent()
                    d.behaviour()
                    d.labelList()
                })
            }))
        }))));
        return Rx.flatMapM<UpdatedBehaviourImpulse>(observable, (e) => e.preserve!.update!.behaviours!);
    }

    public preserveDeleteBehaviours(...impulses: [DeleteBehaviourImpulse]): Observable<DeletedBehaviourImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.delete(_ => _.behaviours(impulses, i => {
                i.id()
                i.data(d => {
                    d.identityId()
                    d.reference()
                })
            }))
        }))));
        return Rx.flatMapM<DeletedBehaviourImpulse>(observable, (e) => e.preserve!.delete!.behaviours!);
    }

    public preserveCreateCodes(...impulses: [CreateCodeImpulse]): Observable<CreatedCodeImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.create(_ => _.codes(impulses, i => {
                i.id()
                i.data(d => {
                    d.identityId()
                    d.reference()
                    d.qualifier()
                    d.appendent()
                    d.code()
                    d.type()
                    d.labelList()
                })
            }))
        }))));
        return Rx.flatMapM<CreatedCodeImpulse>(observable, (e) => e.preserve!.create!.codes!);
    }

    public preserveUpdateCodes(...impulses: [UpdateCodeImpulse]): Observable<UpdatedCodeImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.update(_ => _.codes(impulses, i => {
                i.id()
                i.data(d => {
                    d.identityId()
                    d.reference()
                    d.qualifier()
                    d.appendent()
                    d.code()
                    d.type()
                    d.labelList()
                })
            }))
        }))));
        return Rx.flatMapM<UpdatedCodeImpulse>(observable, (e) => e.preserve!.update!.codes!);
    }

    public preserveDeleteCodes(...impulses: [DeleteCodeImpulse]): Observable<DeletedCodeImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.delete(_ => _.codes(impulses, i => {
                i.id()
                i.data(d => {
                    d.identityId()
                    d.reference()
                })
            }))
        }))));
        return Rx.flatMapM<DeletedCodeImpulse>(observable, (e) => e.preserve!.delete!.codes!);
    }

    public preserveCreateEdges(...impulses: [CreateEdgeImpulse]): Observable<CreatedEdgeImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.create(_ => _.edges(impulses, i => {
                i.id()
                i.data(d => {
                    d.source()
                    d.target()
                    d.type()
                    d.weight()
                    d.edgeId()
                    d.properties()
                })
            }))
        }))));
        return Rx.flatMapM<CreatedEdgeImpulse>(observable, (e) => e.preserve!.create!.edges!);
    }

    public preserveDeleteEdges(...impulses: [DeleteEdgeImpulse]): Observable<DeletedEdgeImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.delete(_ => _.edges(impulses, i => {
                i.id()
                i.data(d => {
                    d.source()
                    d.edgeId()
                })
            }))
        }))));
        return Rx.flatMapM<DeletedEdgeImpulse>(observable, (e) => e.preserve!.delete!.edges!);
    }

    public preserveConnectNodeSet(nodeId: Uuid, target: Uuid, edgeType: EdgeType, properties: Struct, weight: Number): Observable<ConnectNodeSetImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.connect( c => {
                c.node(nodeId, n => {
                    n.set(getEdgeTypeEnumClass(edgeType), target, properties, weight, s => {
                        s.id()
                        s.removedEdges(e => {
                            e.source()
                            e.edgeId()
                        })
                        s.newEdge(e => {
                            e.source()
                            e.target()
                            e.edgeId()
                            e.type()
                            e.weight()
                            e.properties()
                        })
                    })
                })
            })
        }))));
        return Rx.mapM<ConnectNodeSetImpulse>(observable, (e) => e.preserve!.connect!.node!.set!);
    }

    public preserveConnectNodeUnset(nodeId: Uuid, edgeType: EdgeType): Observable<ConnectNodeUnsetImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.connect( c => {
                c.node(nodeId, n => {
                    n.unset(getEdgeTypeEnumClass(edgeType), s => {
                        s.id()
                        s.removedEdges(e => {
                            e.source()
                            e.edgeId()
                        })
                    })
                })
            })
        }))));
        return Rx.mapM<ConnectNodeUnsetImpulse>(observable, (e) => e.preserve!.connect!.node!.unset!);
    }

    public preserveConnectNodeAppend(nodeId: Uuid, target: Uuid, edgeType: EdgeType, properties: Struct, weight: Number): Observable<ConnectNodeAppendedImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.connect( c => {
                c.node(nodeId, n => {
                    n.append(getEdgeTypeEnumClass(edgeType), target, properties, weight, s => {
                        s.id()
                        s.newEdge(e => {
                            e.source()
                            e.target()
                            e.edgeId()
                            e.type()
                            e.weight()
                            e.properties()
                        })
                    })
                })
            })
        }))));
        return Rx.mapM<ConnectNodeAppendedImpulse>(observable, (e) => e.preserve!.connect!.node!.append!);
    }

    public preserveConnectNodeRemove(nodeId: Uuid, target: Uuid, edgeType: EdgeType): Observable<ConnectNodeRemovedImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.connect( c => {
                c.node(nodeId, n => {
                    n.remove(getEdgeTypeEnumClass(edgeType), target, s => {
                        s.id()
                        s.removedEdges(e => {
                            e.source()
                            e.edgeId()
                        })
                    })
                })
            })
        }))));
        return Rx.mapM<ConnectNodeRemovedImpulse>(observable, (e) => e.preserve!.connect!.node!.remove!);
    }

    public perceive(config: (x: PerceptionReq) => void): Observable<PerceptionRes> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.perceive(config))));
        return Rx.mapM<PerceptionRes>(observable, (e) => e.perceive!);
    }

    public perceiveAction(impulse: PerceiveActionImpulse): Observable<PerceivedImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => {
            q.perceive(p => p.perceiveAction(impulse, a => a.id()))
        })));
        return Rx.mapM<PerceivedImpulse>(observable, (e) => e.perceive!.perceiveAction!);
    }

    public perceiveData(impulse: PerceiveDataImpulse): Observable<PerceivedImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => {
            q.perceive(p => p.perceiveData(impulse, a => a.id()))
        })));
        return Rx.mapM<PerceivedImpulse>(observable, (e) => e.perceive!.perceiveData!);
    }
}
