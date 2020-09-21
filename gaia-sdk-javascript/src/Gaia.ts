import {ISensorFunction} from "./api/ISensorFunction";
import {HttpSensorFunction} from "./http/HttpSensorFunction";
import {Introspection} from "./graphql/request/type/Introspection";
import {SkillIntrospection} from "./graphql/request/type/SkillIntrospection";
import {Perception} from "./graphql/request/type/Perception";
import {
    CreateIntentImpulse,
    DeleteIntentImpulse,
    PerceiveActionImpulse,
    PerceiveDataImpulse,
    UpdateIntentImpulse
} from "./graphql";
import {Preservation} from "./graphql/request/type/Preservation";
import {Retrieval} from "./graphql/request/type/Retrieval";
import {Behaviour} from "./graphql/request/type/Behaviour";
import {Code} from "./graphql/request/type/Code";
import {Experience} from "./graphql/request/type/Experience";
import {Fulfilment} from "./graphql/request/type/Fulfilment";
import {Intent} from "./graphql/request/type/Intent";
import {Knowledge} from "./graphql/request/type/Knowledge";
import {Edge} from "./graphql/request/type/Edge";
import {Prompt} from "./graphql/request/type/Prompt";
import {Statement} from "./graphql/request/type/Statement";
import {Skill} from "./graphql/request/type/Skill";
import {SkillProvision} from "./graphql/request/type/SkillProvision";
import {CreateBehaviourImpulse} from "./graphql/request/input/CreateBehaviourImpulse";
import {CreatePromptImpulse} from "./graphql/request/input/CreatePromptImpulse";
import {DeletePromptImpulse} from "./graphql/request/input/DeletePromptImpulse";
import {UpdatePromptImpulse} from "./graphql/request/input/UpdatePromptImpulse";
import {UpdateStatementImpulse} from "./graphql/request/input/UpdateStatementImpulse";
import {DeleteStatementImpulse} from "./graphql/request/input/DeleteStatementImpulse";
import {CreateStatementImpulse} from "./graphql/request/input/CreateStatementImpulse";
import {CreateFulfilmentImpulse} from "./graphql/request/input/CreateFulfilmentImpulse";
import {DeleteFulfilmentImpulse} from "./graphql/request/input/DeleteFulfilmentImpulse";
import {UpdateFulfilmentImpulse} from "./graphql/request/input/UpdateFulfilmentImpulse";
import {UpdateBehaviourImpulse} from "./graphql/request/input/UpdateBehaviourImpulse";
import {DeleteBehaviourImpulse} from "./graphql/request/input/DeleteBehaviourImpulse";
import {UpdateSkillImpulse} from './graphql/request/input/UpdateSkillImpulse';
import {DeleteSkillImpulse} from "./graphql/request/input/DeleteSkillImpulse";
import {CreateSkillImpulse} from "./graphql/request/input/CreateSkillImpulse";
import {UpdateSkillProvisionImpulse} from "./graphql/request/input/UpdateSkillProvisionImpulse";
import {DeleteSkillProvisionImpulse} from "./graphql/request/input/DeleteSkillProvisionImpulse";
import {CreateSkillProvisionImpulse} from "./graphql/request/input/CreateSkillProvisionImpulse";
import {CreateCodeImpulse} from "./graphql/request/input/CreateCodeImpulse";
import {DeleteCodeImpulse} from "./graphql/request/input/DeleteCodeImpulse";
import {UpdateCodeImpulse} from "./graphql/request/input/UpdateCodeImpulse";
import {Uuid} from "./graphql/GaiaClient";
import {CreateEdgeImpulse} from "./graphql/request/input/CreateEdgeImpulse";
import {DeleteEdgeImpulse} from "./graphql/request/input/DeleteEdgeImpulse";
import {CreateIdentityImpulse} from "./graphql/request/input/CreateIdentityImpulse";
import {DeleteIdentityImpulse} from "./graphql/request/input/DeleteIdentityImpulse";
import {UpdateIdentityImpulse} from "./graphql/request/input/UpdateIdentityImpulse";
import {Identity} from "./graphql/request/type/Identity";
import {GaiaCredentials, JWTCredentials, UsernamePasswordCredentials} from "./api/GaiaCredentials";
import {HttpSensorStream} from "./http/HttpSensorStream";
import {ISensorStream} from "./api/ISensorStream";
import {HttpClient} from "./http/HttpClient";
import {CreateTenantImpulse} from "./graphql/request/input/CreateTenantImpulse";
import {DeleteTenantImpulse} from "./graphql/request/input/DeleteTenantImpulse";
import {UpdateTenantImpulse} from "./graphql/request/input/UpdateTenantImpulse";
import {Tenant} from "./graphql/request/type/Tenant";
import {CreateUserImpulse} from "./graphql/request/input/CreateUserImpulse";
import {DeleteUserImpulse} from "./graphql/request/input/DeleteUserImpulse";
import {UpdateUserImpulse} from "./graphql/request/input/UpdateUserImpulse";
import {User} from "./graphql/request/type/User";

export class Gaia {
    public static connect(url: string, credentials: GaiaCredentials): GaiaRef {
        return new GaiaRef(new GaiaConfig(url, credentials));
    }

    public static login(url: string, credentials: UsernamePasswordCredentials): Promise<GaiaRef> {
        return new HttpClient()
            .post(JSON.stringify(credentials), {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': 'true',
                    'Access-Control-Allow-Methods': 'POST',
                    'Access-Control-Allow-Headers': 'Content-Type'
                }
            }, url + '/api/auth/access')
            .then((response) => {
                const cr = new JWTCredentials(response.accessToken);
                return new GaiaRef(new GaiaConfig(url, cr));
            });
    }
}

export class GaiaConfig {
    readonly url: string;
    readonly credentials: GaiaCredentials;
    readonly functionProcessor: ISensorFunction;
    readonly streamProcessor: ISensorStream;

    constructor(url: string, credentials: GaiaCredentials,
                functionProcessor: ISensorFunction = new HttpSensorFunction(url, credentials),
                streamProcessor: ISensorStream = new HttpSensorStream(url, credentials)) {
        this.url = url;
        this.credentials = credentials;
        this.functionProcessor = functionProcessor;
        this.streamProcessor = streamProcessor;
    }
}

export class GaiaRef implements ISensorFunction, ISensorStream {
    private readonly config: GaiaConfig;
    private readonly fProc: ISensorFunction;
    private readonly sProc: ISensorStream;

    constructor(config: GaiaConfig) {
        this.config = config;
        this.fProc = config.functionProcessor;
        this.sProc = config.streamProcessor;
    }

    public data = (uri: string) => this.sProc.data(uri);
    public skill = (uri: string) => this.sProc.skill(uri);
    public introspect = (config: (x: Introspection) => void) => this.fProc.introspect(config);
    public introspectSkills = (config: (x: SkillIntrospection) => void) => this.fProc.introspectSkills(config);
    public perceive = (config: (x: Perception) => void) => this.fProc.perceive(config);
    public perceiveAction = (impulse: PerceiveActionImpulse) => this.fProc.perceiveAction(impulse);
    public perceiveData = (impulse: PerceiveDataImpulse) => this.fProc.perceiveData(impulse);
    public preserve = (config: (x: Preservation) => void) => this.fProc.preserve(config);
    public preserveCreateIdentities = (...impulses: [CreateIdentityImpulse]) => this.fProc.preserveCreateIdentities(...impulses);
    public preserveDeleteIdentities = (...impulses: [DeleteIdentityImpulse]) => this.fProc.preserveDeleteIdentities(...impulses);
    public preserveUpdateIdentities = (...impulses: [UpdateIdentityImpulse]) => this.fProc.preserveUpdateIdentities(...impulses);
    public preserveCreateTenants = (...impulses: [CreateTenantImpulse]) => this.fProc.preserveCreateTenants(...impulses);
    public preserveDeleteTenants = (...impulses: [DeleteTenantImpulse]) => this.fProc.preserveDeleteTenants(...impulses);
    public preserveUpdateTenants = (...impulses: [UpdateTenantImpulse]) => this.fProc.preserveUpdateTenants(...impulses);
    public preserveCreateUsers = (...impulses: [CreateUserImpulse]) => this.fProc.preserveCreateUsers(...impulses);
    public preserveDeleteUsers = (...impulses: [DeleteUserImpulse]) => this.fProc.preserveDeleteUsers(...impulses);
    public preserveUpdateUsers = (...impulses: [UpdateUserImpulse]) => this.fProc.preserveUpdateUsers(...impulses);
    public preserveCreateIntents = (...impulses: [CreateIntentImpulse]) => this.fProc.preserveCreateIntents(...impulses);
    public preserveDeleteIntents = (...impulses: [DeleteIntentImpulse]) => this.fProc.preserveDeleteIntents(...impulses);
    public preserveUpdateIntents = (...impulses: [UpdateIntentImpulse]) => this.fProc.preserveUpdateIntents(...impulses);
    public preserveCreatePrompts = (...impulses: [CreatePromptImpulse]) => this.fProc.preserveCreatePrompts(...impulses);
    public preserveDeletePrompts = (...impulses: [DeletePromptImpulse]) => this.fProc.preserveDeletePrompts(...impulses);
    public preserveUpdatePrompts = (...impulses: [UpdatePromptImpulse]) => this.fProc.preserveUpdatePrompts(...impulses);
    public preserveCreateStatements = (...impulses: [CreateStatementImpulse]) => this.fProc.preserveCreateStatements(...impulses);
    public preserveDeleteStatements = (...impulses: [DeleteStatementImpulse]) => this.fProc.preserveDeleteStatements(...impulses);
    public preserveUpdateStatements = (...impulses: [UpdateStatementImpulse]) => this.fProc.preserveUpdateStatements(...impulses);
    public preserveCreateFulfilments = (...impulses: [CreateFulfilmentImpulse]) => this.fProc.preserveCreateFulfilments(...impulses);
    public preserveDeleteFulfilments = (...impulses: [DeleteFulfilmentImpulse]) => this.fProc.preserveDeleteFulfilments(...impulses);
    public preserveUpdateFulfilments = (...impulses: [UpdateFulfilmentImpulse]) => this.fProc.preserveUpdateFulfilments(...impulses);
    public preserveCreateBehaviours = (...impulses: [CreateBehaviourImpulse]) => this.fProc.preserveCreateBehaviours(...impulses);
    public preserveDeleteBehaviours = (...impulses: [DeleteBehaviourImpulse]) => this.fProc.preserveDeleteBehaviours(...impulses);
    public preserveUpdateBehaviours = (...impulses: [UpdateBehaviourImpulse]) => this.fProc.preserveUpdateBehaviours(...impulses);
    public preserveCreateCodes = (...impulses: [CreateCodeImpulse]) => this.fProc.preserveCreateCodes(...impulses);
    public preserveDeleteCodes = (...impulses: [DeleteCodeImpulse]) => this.fProc.preserveDeleteCodes(...impulses);
    public preserveUpdateCodes = (...impulses: [UpdateCodeImpulse]) => this.fProc.preserveUpdateCodes(...impulses);
    public preserveCreateEdges = (...impulses: [CreateEdgeImpulse]) => this.fProc.preserveCreateEdges(...impulses);
    public preserveDeleteEdges = (...impulses: [DeleteEdgeImpulse]) => this.fProc.preserveDeleteEdges(...impulses);
    public preserveCreateSkills = (...impulses: [CreateSkillImpulse]) => this.fProc.preserveCreateSkills(...impulses);
    public preserveDeleteSkills = (...impulses: [DeleteSkillImpulse]) => this.fProc.preserveDeleteSkills(...impulses);
    public preserveUpdateSkills = (...impulses: [UpdateSkillImpulse]) => this.fProc.preserveUpdateSkills(...impulses);
    public preserveCreateSkillProvisions = (...impulses: [CreateSkillProvisionImpulse]) => this.fProc.preserveCreateSkillProvisions(...impulses);
    public preserveDeleteSkillProvisions = (...impulses: [DeleteSkillProvisionImpulse]) => this.fProc.preserveDeleteSkillProvisions(...impulses);
    public preserveUpdateSkillProvisions = (...impulses: [UpdateSkillProvisionImpulse]) => this.fProc.preserveUpdateSkillProvisions(...impulses);
    public retrieve = (config: (x: Retrieval) => void) => this.fProc.retrieve(config);
    public retrieveBehaviours = (identityId: Uuid, config: (x: Behaviour) => void, limit?: Number, offset?: Number) => this.fProc.retrieveBehaviours(identityId, config, limit, offset);
    public retrieveBehaviour = (identityId: Uuid, reference: Uuid, config: (x: Behaviour) => void) => this.fProc.retrieveBehaviour(identityId, reference, config);
    public retrieveCodes = (identityId: Uuid, config: (x: Code) => void, limit?: Number, offset?: Number) => this.fProc.retrieveCodes(identityId, config, limit, offset);
    public retrieveCode = (identityId: Uuid, reference: Uuid, config: (x: Code) => void) => this.fProc.retrieveCode(identityId, reference, config);
    public retrieveExperience = (config: (x: Experience) => void) => this.fProc.retrieveExperience(config);
    public retrieveFulfilments = (identityId: Uuid, config: (x: Fulfilment) => void, limit?: Number, offset?: Number) => this.fProc.retrieveFulfilments(identityId, config, limit, offset);
    public retrieveFulfilment = (identityId: Uuid, reference: Uuid, config: (x: Fulfilment) => void) => this.fProc.retrieveFulfilment(identityId, reference, config);
    public retrieveIdentities = (config: (x: Identity) => void, limit?: Number, offset?: Number) => this.fProc.retrieveIdentities(config, limit, offset);
    public retrieveIdentity = (identityId: Uuid, config: (x: Identity) => void) => this.fProc.retrieveIdentity(identityId, config);
    public retrieveTenant = (tenantId: Uuid, config: (x: Tenant) => void) => this.fProc.retrieveTenant(tenantId, config);
    public retrieveTenants = (config: (x: Tenant) => void, limit?: Number, offset?: Number) => this.fProc.retrieveTenants(config, limit, offset);
    public retrieveUser = (userId: Uuid, config: (x: User) => void) => this.fProc.retrieveUser(userId, config);
    public retrieveUsers = (config: (x: User) => void, limit?: Number, offset?: Number) => this.fProc.retrieveUsers(config, limit, offset);
    public retrieveIntents = (identityId: Uuid, config: (x: Intent) => void, limit?: Number, offset?: Number) => this.fProc.retrieveIntents(identityId, config, limit, offset);
    public retrieveIntent = (identityId: Uuid, reference: Uuid, config: (x: Intent) => void) => this.fProc.retrieveIntent(identityId, reference, config);
    public retrieveKnowledge = (config: (x: Knowledge) => void) => this.fProc.retrieveKnowledge(config);
    public retrieveEdges = (source: Uuid, config: (x: Edge) => void, limit?: Number, offset?: Number) => this.fProc.retrieveEdges(source, config, limit, offset);
    public retrieveEdge = (source: Uuid, target: Uuid, config: (x: Edge) => void) => this.fProc.retrieveEdge(source, target, config);
    public retrievePrompts = (identityId: Uuid, config: (x: Prompt) => void, limit?: Number, offset?: Number) => this.fProc.retrievePrompts(identityId, config, limit, offset);
    public retrievePrompt = (identityId: Uuid, reference: Uuid, config: (x: Prompt) => void) => this.fProc.retrievePrompt(identityId, reference, config);
    public retrieveStatements = (identityId: Uuid, config: (x: Statement) => void, limit?: Number, offset?: Number) => this.fProc.retrieveStatements(identityId, config, limit, offset);
    public retrieveStatement = (identityId: Uuid, reference: Uuid, config: (x: Statement) => void) => this.fProc.retrieveStatement(identityId, reference, config);
    public retrieveSkills = (tenantId: Uuid, config: (x: Skill) => void, limit?: Number, offset?: Number) => this.fProc.retrieveSkills(tenantId, config, limit, offset);
    public retrieveSkill = (tenantId: Uuid, reference: Uuid, config: (x: Skill) => void) => this.fProc.retrieveSkill(tenantId, reference, config);
    public retrieveSkillProvisions = (tenantId: Uuid, config: (x: SkillProvision) => void, limit?: Number, offset?: Number) => this.fProc.retrieveSkillProvisions(tenantId, config, limit, offset);
    public retrieveSkillProvision = (tenantId: Uuid, reference: Uuid, config: (x: SkillProvision) => void) => this.fProc.retrieveSkillProvision(tenantId, reference, config);
}
