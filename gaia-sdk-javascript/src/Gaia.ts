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
import {KnowledgeEdge} from "./graphql/request/type/KnowledgeEdge";
import {Prompt} from "./graphql/request/type/Prompt";
import {Statement} from "./graphql/request/type/Statement";

export class Gaia {
    public static connect(url: string, apiKey: string, apiSecret: string): GaiaRef {
        return new GaiaRef(new GaiaConfig(url, apiKey, apiSecret));
    }
}

export class GaiaConfig {
    readonly url: string;
    readonly apiKey: string;
    readonly apiSecret: string;
    readonly functionProcessor: ISensorFunction;

    constructor(url: string, apiKey: string, apiSecret: string,
                functionProcessor: ISensorFunction = new HttpSensorFunction(url, apiKey, apiSecret)) {
        this.url = url;
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
        this.functionProcessor = functionProcessor
    }
}

export class GaiaRef implements ISensorFunction {
    private readonly config: GaiaConfig;
    private readonly fProc: ISensorFunction;

    constructor(config: GaiaConfig) {
        this.config = config;
        this.fProc = config.functionProcessor;
    }

    public introspect = (config: (x: Introspection) => void) => this.fProc.introspect(config);
    public introspectSkills = (config: (x: SkillIntrospection) => void) => this.fProc.introspectSkills(config);
    public perceive = (config: (x: Perception) => void) => this.fProc.perceive(config);
    public perceiveAction = (impulse: PerceiveActionImpulse) => this.fProc.perceiveAction(impulse);
    public perceiveData = (impulse: PerceiveDataImpulse) => this.fProc.perceiveData(impulse);
    public preserve = (config: (x: Preservation) => void) => this.fProc.preserve(config);
    public preserveCreateIntents = (...impulses: [CreateIntentImpulse]) => this.fProc.preserveCreateIntents(...impulses);
    public preserveDeleteIntents = (...impulses: [DeleteIntentImpulse]) => this.fProc.preserveDeleteIntents(...impulses);
    public preserveUpdateIntents = (...impulses: [UpdateIntentImpulse]) => this.fProc.preserveUpdateIntents(...impulses);
    public retrieve = (config: (x: Retrieval) => void) => this.fProc.retrieve(config);
    public retrieveBehaviours = (config: (x: Behaviour) => void) => this.fProc.retrieveBehaviours(config);
    public retrieveCodes = (config: (x: Code) => void) => this.fProc.retrieveCodes(config);
    public retrieveExperience = (config: (x: Experience) => void) => this.fProc.retrieveExperience(config);
    public retrieveFulfilments = (config: (x: Fulfilment) => void) => this.fProc.retrieveFulfilments(config);
    public retrieveIntents = (config: (x: Intent) => void) => this.fProc.retrieveIntents(config);
    public retrieveKnowledge = (config: (x: Knowledge) => void) => this.fProc.retrieveKnowledge(config);
    public retrieveKnowledgeEdge = (config: (x: KnowledgeEdge) => void) => this.fProc.retrieveKnowledgeEdge(config);
    public retrievePrompts = (config: (x: Prompt) => void) => this.fProc.retrievePrompts(config);
    public retrieveStatements = (config: (x: Statement) => void) => this.fProc.retrieveStatements(config);

}
