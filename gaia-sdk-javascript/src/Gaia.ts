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
import {CreateCodeImpulse} from "./graphql/request/input/CreateCodeImpulse";
import {DeleteCodeImpulse} from "./graphql/request/input/DeleteCodeImpulse";
import {UpdateCodeImpulse} from "./graphql/request/input/UpdateCodeImpulse";
import {Uuid} from "./graphql/GaiaClient";
import {CreateEdgeImpulse} from "./graphql/request/input/CreateEdgeImpulse";
import {DeleteEdgeImpulse} from "./graphql/request/input/DeleteEdgeImpulse";
import {GaiaCredentials} from "./api/GaiaCredentials";
import {Data} from "./api/Data";

export class Gaia {

    public static connect(url: string, credentials: GaiaCredentials): GaiaRef {
        return new GaiaRef(new GaiaConfig(url,credentials));
    }
}

export class GaiaConfig {
    readonly url: string;
    readonly credentials: GaiaCredentials;
    readonly functionProcessor: ISensorFunction;

    constructor(url: string, credentials: GaiaCredentials,
                functionProcessor: ISensorFunction = new HttpSensorFunction(url, credentials)) {
        this.url = url;
        this.credentials = credentials;
        this.functionProcessor = functionProcessor
    }
}

export class GaiaRef implements ISensorFunction {
    private readonly config: GaiaConfig;
    private readonly fProc: ISensorFunction;
    private readonly dataAPI = new Data();

    constructor(config: GaiaConfig) {
        this.config = config;
        this.fProc = config.functionProcessor;
    }

    public append = (dataToAppend: any) => this.dataAPI.append(dataToAppend);
    public asFile = () => this.dataAPI.asFile();
    public asStream = () => this.dataAPI.asStream();
    public data = (path: string) => this.dataAPI.createRef(path);
    public introspect = (config: (x: Introspection) => void) => this.fProc.introspect(config);
    public introspectSkills = (config: (x: SkillIntrospection) => void) => this.fProc.introspectSkills(config);
    public perceive = (config: (x: Perception) => void) => this.fProc.perceive(config);
    public perceiveAction = (impulse: PerceiveActionImpulse) => this.fProc.perceiveAction(impulse);
    public perceiveData = (impulse: PerceiveDataImpulse) => this.fProc.perceiveData(impulse);
    public preserve = (config: (x: Preservation) => void) => this.fProc.preserve(config);
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
    public remove = () => this.dataAPI.remove();
    public retrieve = (config: (x: Retrieval) => void) => this.fProc.retrieve(config);
    public retrieveBehaviours = (identityId: Uuid, config: (x: Behaviour) => void) => this.fProc.retrieveBehaviours(identityId, config);
    public retrieveBehaviour = (identityId: Uuid, reference: Uuid, config: (x: Behaviour) => void) => this.fProc.retrieveBehaviour(identityId, reference, config);
    public retrieveCodes = (identityId: Uuid, config: (x: Code) => void) => this.fProc.retrieveCodes(identityId, config);
    public retrieveCode = (identityId: Uuid, reference: Uuid, config: (x: Code) => void) => this.fProc.retrieveCode(identityId, reference, config);
    public retrieveExperience = (config: (x: Experience) => void) => this.fProc.retrieveExperience(config);
    public retrieveFulfilments = (identityId: Uuid, config: (x: Fulfilment) => void) => this.fProc.retrieveFulfilments(identityId, config);
    public retrieveFulfilment = (identityId: Uuid, reference: Uuid, config: (x: Fulfilment) => void) => this.fProc.retrieveFulfilment(identityId, reference, config);
    public retrieveIntents = (identityId: Uuid, config: (x: Intent) => void) => this.fProc.retrieveIntents(identityId, config);
    public retrieveIntent = (identityId: Uuid, reference: Uuid, config: (x: Intent) => void) => this.fProc.retrieveIntent(identityId, reference, config);
    public retrieveKnowledge = (config: (x: Knowledge) => void) => this.fProc.retrieveKnowledge(config);
    public retrieveEdges = (source: Uuid, config: (x: Edge) => void) => this.fProc.retrieveEdges(source, config);
    public retrieveEdge = (source: Uuid, target: Uuid, config: (x: Edge) => void) => this.fProc.retrieveEdge(source, target, config);
    public retrievePrompts = (identityId: Uuid, config: (x: Prompt) => void) => this.fProc.retrievePrompts(identityId, config);
    public retrievePrompt = (identityId: Uuid, reference: Uuid, config: (x: Prompt) => void) => this.fProc.retrievePrompt(identityId, reference, config);
    public retrieveStatements = (identityId: Uuid, config: (x: Statement) => void) => this.fProc.retrieveStatements(identityId, config);
    public retrieveStatement = (identityId: Uuid, reference: Uuid, config: (x: Statement) => void) => this.fProc.retrieveStatement(identityId, reference, config);

}
