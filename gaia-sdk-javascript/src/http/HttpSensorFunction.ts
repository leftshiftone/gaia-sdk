import {GaiaClient, GaiaClientBuilder, GaiaRequest} from "..";
import {Rx} from "../api/rx"
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
    StatementReq,
    StatementRes,
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
import {Uuid} from "../graphql/GaiaClient";
import {GaiaCredentials} from "../api/GaiaCredentials";
import {CreateIdentityImpulse} from "../graphql/request/input/CreateIdentityImpulse";
import {UpdateIdentityImpulse} from "../graphql/request/input/UpdateIdentityImpulse";
import {DeleteIdentityImpulse} from "../graphql/request/input/DeleteIdentityImpulse";
import {CreatedIdentityImpulse} from "../graphql/response/type/CreatedIdentityImpulse";
import {UpdatedIdentityImpulse} from "../graphql/response/type/UpdatedIdentityImpulse";
import {DeletedIdentityImpulse} from "../graphql/response/type/DeletedIdentityImpulse";

export class HttpSensorFunction implements ISensorFunction {

    private readonly client: GaiaClient;

    constructor(url: string, credentials: GaiaCredentials) {
        this.client = GaiaClientBuilder.http(url + "/api/sync")
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

    public retrieveEdges(source: Uuid, config: (x: EdgeReq) => void): Observable<EdgeRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(r => {
            r.knowledge(k => k.edges(source, config));
        }))));
        return Rx.flatMapQ<EdgeRes>(observable, (e) => e.retrieve!.knowledge!.edges!);
    }

    public retrieveEdge(source: Uuid, target: Uuid, config: (x: EdgeReq) => void): Observable<EdgeRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(r => {
            r.knowledge(k => k.edge(source, target, config));
        }))));
        return Rx.mapQ<EdgeRes>(observable, (e) => e.retrieve!.knowledge!.edge!);
    }

    public retrieveIdentities(config: (x: IdentityReq) => void): Observable<IdentityRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(g => g.identities(config));
        }))));
        return Rx.flatMapQ<IdentityRes>(observable, (e) => e.retrieve!.knowledge!.identities!);
    }

    public retrieveIdentity(identityId: Uuid, config: (x: IdentityReq) => void): Observable<IdentityRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(g => g.identity(identityId, config));
        }))));
        return Rx.mapQ<IdentityRes>(observable, (e) => e.retrieve!.knowledge!.identity!);
    }

    public retrieveIntents(identityId: Uuid, config: (x: IntentReq) => void): Observable<IntentRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(g => g.intents(identityId, config));
        }))));
        return Rx.flatMapQ<IntentRes>(observable, (e) => e.retrieve!.knowledge!.intents!);
    }

    public retrieveIntent(identityId: Uuid, reference: Uuid, config: (x: IntentReq) => void): Observable<IntentRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(g => g.intent(identityId, reference, config));
        }))));
        return Rx.mapQ<IntentRes>(observable, (e) => e.retrieve!.knowledge!.intent!);
    }

    public retrievePrompts(identityId: Uuid, config: (x: PromptReq) => void): Observable<PromptRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.prompts(identityId, config));
        }))));
        return Rx.flatMapQ<PromptRes>(observable, (e) => e.retrieve!.knowledge!.prompts!);
    }

    public retrievePrompt(identityId: Uuid, reference: Uuid, config: (x: PromptReq) => void): Observable<PromptRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.prompt(identityId, reference, config));
        }))));
        return Rx.mapQ<PromptRes>(observable, (e) => e.retrieve!.knowledge!.prompt!);
    }

    public retrieveStatements(identityId: Uuid, config: (x: StatementReq) => void): Observable<StatementRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.statements(identityId, config));
        }))));
        return Rx.flatMapQ<StatementRes>(observable, (e) => e.retrieve!.knowledge!.statements!);
    }

    public retrieveStatement(identityId: Uuid, reference: Uuid, config: (x: StatementReq) => void): Observable<StatementRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.statement(identityId, reference, config));
        }))));
        return Rx.mapQ<StatementRes>(observable, (e) => e.retrieve!.knowledge!.statement!);
    }

    public retrieveFulfilments(identityId: Uuid, config: (x: FulfilmentReq) => void): Observable<FulfilmentRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.fulfilments(identityId, config));
        }))));
        return Rx.flatMapQ<StatementRes>(observable, (e) => e.retrieve!.knowledge!.fulfilments!);
    }

    public retrieveFulfilment(identityId: Uuid, reference: Uuid, config: (x: FulfilmentReq) => void): Observable<FulfilmentRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.fulfilment(identityId, reference, config));
        }))));
        return Rx.mapQ<StatementRes>(observable, (e) => e.retrieve!.knowledge!.fulfilment!);
    }

    public retrieveCodes(identityId: Uuid, config: (x: CodeReq) => void): Observable<CodeRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.codes(identityId, config));
        }))));
        return Rx.flatMapQ<CodeRes>(observable, (e) => e.retrieve!.knowledge!.codes!);
    }

    public retrieveCode(identityId: Uuid, reference: Uuid, config: (x: CodeReq) => void): Observable<CodeRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.code(identityId, reference, config));
        }))));
        return Rx.mapQ<CodeRes>(observable, (e) => e.retrieve!.knowledge!.code!);
    }

    public retrieveBehaviours(identityId: Uuid, config: (x: BehaviourReq) => void): Observable<BehaviourRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.behaviours(identityId, config));
        }))));
        return Rx.flatMapQ<BehaviourRes>(observable, (e) => e.retrieve!.knowledge!.behaviours!);
    }

    public retrieveBehaviour(identityId: Uuid, reference: Uuid, config: (x: BehaviourReq) => void): Observable<BehaviourRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.behaviour(identityId, reference, config));
        }))));
        return Rx.mapQ<BehaviourRes>(observable, (e) => e.retrieve!.knowledge!.behaviour!);
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
            p.create(_ => _.identities(impulses, i => i.id()))
        }))));
        return Rx.flatMapM<CreatedIdentityImpulse>(observable, (e) => e.preserve!.create!.identities!);
    }

    public preserveUpdateIdentities(...impulses: [UpdateIdentityImpulse]): Observable<UpdatedIdentityImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.update(_ => _.identities(impulses, i => i.id()))
        }))));
        return Rx.flatMapM<UpdatedIdentityImpulse>(observable, (e) => e.preserve!.update!.identities!);
    }

    public preserveDeleteIdentities(...impulses: [DeleteIdentityImpulse]): Observable<DeletedIdentityImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.delete(_ => _.identities(impulses, i => i.id()))
        }))));
        return Rx.flatMapM<DeletedIdentityImpulse>(observable, (e) => e.preserve!.delete!.identities!);
    }

    public preserveCreateIntents(...impulses: [CreateIntentImpulse]): Observable<CreatedIntentImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.create(_ => _.intents(impulses, i => i.id()))
        }))));
        return Rx.flatMapM<CreatedIntentImpulse>(observable, (e) => e.preserve!.create!.intents!);
    }

    public preserveUpdateIntents(...impulses: [UpdateIntentImpulse]): Observable<UpdatedIntentImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.update(_ => _.intents(impulses, i => i.id()))
        }))));
        return Rx.flatMapM<UpdatedIntentImpulse>(observable, (e) => e.preserve!.update!.intents!);
    }

    public preserveDeleteIntents(...impulses: [DeleteIntentImpulse]): Observable<DeletedIntentImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.delete(_ => _.intents(impulses, i => i.id()))
        }))));
        return Rx.flatMapM<DeletedIntentImpulse>(observable, (e) => e.preserve!.delete!.intents!);
    }

    public preserveCreatePrompts(...impulses: [CreatePromptImpulse]): Observable<CreatedPromptImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.create(_ => _.prompts(impulses, i => i.id()))
        }))));
        return Rx.flatMapM<CreatedPromptImpulse>(observable, (e) => e.preserve!.create!.prompts!);
    }

    public preserveUpdatePrompts(...impulses: [UpdatePromptImpulse]): Observable<UpdatedPromptImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.update(_ => _.prompts(impulses, i => i.id()))
        }))));
        return Rx.flatMapM<UpdatedPromptImpulse>(observable, (e) => e.preserve!.update!.prompts!);
    }

    public preserveDeletePrompts(...impulses: [DeletePromptImpulse]): Observable<DeletedPromptImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.delete(_ => _.prompts(impulses, i => i.id()))
        }))));
        return Rx.flatMapM<DeletedPromptImpulse>(observable, (e) => e.preserve!.delete!.prompts!);
    }

    public preserveCreateStatements(...impulses: [CreateStatementImpulse]): Observable<CreatedStatementImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.create(_ => _.statements(impulses, i => i.id()))
        }))));
        return Rx.flatMapM<CreatedStatementImpulse>(observable, (e) => e.preserve!.create!.statements!);
    }

    public preserveUpdateStatements(...impulses: [UpdateStatementImpulse]): Observable<UpdatedStatementImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.update(_ => _.statements(impulses, i => i.id()))
        }))));
        return Rx.flatMapM<UpdatedStatementImpulse>(observable, (e) => e.preserve!.update!.statements!);
    }

    public preserveDeleteStatements(...impulses: [DeleteStatementImpulse]): Observable<DeletedStatementImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.delete(_ => _.statements(impulses, i => i.id()))
        }))));
        return Rx.flatMapM<DeletedStatementImpulse>(observable, (e) => e.preserve!.delete!.statements!);
    }

    public preserveCreateFulfilments(...impulses: [CreateFulfilmentImpulse]): Observable<CreatedFulfilmentImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.create(_ => _.fulfilments(impulses, i => i.id()))
        }))));
        return Rx.flatMapM<CreatedFulfilmentImpulse>(observable, (e) => e.preserve!.create!.fulfilments!);
    }

    public preserveUpdateFulfilments(...impulses: [UpdateFulfilmentImpulse]): Observable<UpdatedFulfilmentImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.update(_ => _.fulfilments(impulses, i => i.id()))
        }))));
        return Rx.flatMapM<UpdatedFulfilmentImpulse>(observable, (e) => e.preserve!.update!.fulfilments!);
    }

    public preserveDeleteFulfilments(...impulses: [DeleteFulfilmentImpulse]): Observable<DeletedFulfilmentImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.delete(_ => _.fulfilments(impulses, i => i.id()))
        }))));
        return Rx.flatMapM<DeletedFulfilmentImpulse>(observable, (e) => e.preserve!.delete!.fulfilments!);
    }

    public preserveCreateBehaviours(...impulses: [CreateBehaviourImpulse]): Observable<CreatedBehaviourImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.create(_ => _.behaviours(impulses, i => i.id()))
        }))));
        return Rx.flatMapM<CreatedBehaviourImpulse>(observable, (e) => e.preserve!.create!.behaviours!);
    }

    public preserveUpdateBehaviours(...impulses: [UpdateBehaviourImpulse]): Observable<UpdatedBehaviourImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.update(_ => _.behaviours(impulses, i => i.id()))
        }))));
        return Rx.flatMapM<UpdatedBehaviourImpulse>(observable, (e) => e.preserve!.update!.behaviours!);
    }

    public preserveDeleteBehaviours(...impulses: [DeleteBehaviourImpulse]): Observable<DeletedBehaviourImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.delete(_ => _.behaviours(impulses, i => i.id()))
        }))));
        return Rx.flatMapM<DeletedBehaviourImpulse>(observable, (e) => e.preserve!.delete!.behaviours!);
    }

    public preserveCreateCodes(...impulses: [CreateCodeImpulse]): Observable<CreatedCodeImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.create(_ => _.codes(impulses, i => i.id()))
        }))));
        return Rx.flatMapM<CreatedCodeImpulse>(observable, (e) => e.preserve!.create!.codes!);
    }

    public preserveUpdateCodes(...impulses: [UpdateCodeImpulse]): Observable<UpdatedCodeImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.update(_ => _.codes(impulses, i => i.id()))
        }))));
        return Rx.flatMapM<UpdatedCodeImpulse>(observable, (e) => e.preserve!.update!.codes!);
    }

    public preserveDeleteCodes(...impulses: [DeleteCodeImpulse]): Observable<DeletedCodeImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.delete(_ => _.codes(impulses, i => i.id()))
        }))));
        return Rx.flatMapM<DeletedCodeImpulse>(observable, (e) => e.preserve!.delete!.codes!);
    }

    public preserveCreateEdges(...impulses: [CreateEdgeImpulse]): Observable<CreatedEdgeImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.create(_ => _.edges(impulses, i => i.id()))
        }))));
        return Rx.flatMapM<CreatedEdgeImpulse>(observable, (e) => e.preserve!.create!.edges!);
    }

    public preserveDeleteEdges(...impulses: [DeleteEdgeImpulse]): Observable<DeletedEdgeImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.delete(_ => _.edges(impulses, i => i.id()))
        }))));
        return Rx.flatMapM<DeletedEdgeImpulse>(observable, (e) => e.preserve!.delete!.edges!);
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
