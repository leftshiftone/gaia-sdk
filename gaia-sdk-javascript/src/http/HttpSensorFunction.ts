import {ClientOptions, GaiaClient} from "..";
import {HttpTransport} from "./HttpTransport";
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
import {GaiaRequest} from "..";
import {ISensorFunction} from "../api/ISensorFunction";
import {from, Observable, of, throwError} from "rxjs";
import {flatMap, map} from "rxjs/operators"
import {Retrieval as RetrievalOut} from "../graphql/response/type/Retrieval";
import {MutationResponse, QueryResponse} from "..";
import {Query} from "../graphql/response/type/Query";
import {Mutation} from "../graphql/response/type/Mutation";

export class HttpSensorFunction implements ISensorFunction {

    private readonly client: GaiaClient;

    constructor(url: string, apiKey: string, apiSecret: string) {
        const options = new ClientOptions(apiKey, apiSecret);
        this.client = new GaiaClient(options, new HttpTransport(url + "/api/sync"));
    }

    public retrieve(config: (x: RetrievalReq) => void): Observable<RetrievalRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(config))));
        return this.mapQ<RetrievalOut>(observable, (e) => e.retrieve!);
    }

    public retrieveKnowledge(config: (x: KnowledgeReq) => void): Observable<KnowledgeRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(r => {
            r.knowledge(config)
        }))));
        return this.mapQ<KnowledgeRes>(observable, (e) => e.retrieve!.knowledge!);
    }

    public retrieveExperience(config: (x: ExperienceReq) => void): Observable<ExperienceRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(r => r.experience(config)))));
        return this.mapQ<ExperienceRes>(observable, (e) => e.retrieve!.experience!);
    };

    public retrieveKnowledgeEdge(config: (x: KnowledgeEdgeReq) => void): Observable<KnowledgeEdgeRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(r => {
            r.knowledge(k => k.edges(config))
        }))));
        return this.flatMapQ<KnowledgeEdgeRes>(observable, (e) => e.retrieve!.knowledge!.edges!);
    }

    public retrieveIntents(config: (x: IntentReq) => void): Observable<IntentRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(g => g.intents(config))
        }))));
        return this.flatMapQ<IntentRes>(observable, (e) => e.retrieve!.knowledge!.intents!);
    }

    public retrievePrompts(config: (x: PromptReq) => void): Observable<PromptRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.prompts(config))
        }))));
        return this.flatMapQ<PromptRes>(observable, (e) => e.retrieve!.knowledge!.prompts!);
    }

    public retrieveStatements(config: (x: StatementReq) => void): Observable<StatementRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.statements(config))
        }))));
        return this.flatMapQ<StatementRes>(observable, (e) => e.retrieve!.knowledge!.statements!);
    }

    public retrieveFulfilments(config: (x: FulfilmentReq) => void): Observable<FulfilmentRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.fulfilments(config))
        }))));
        return this.flatMapQ<StatementRes>(observable, (e) => e.retrieve!.knowledge!.fulfilments!);
    }

    public retrieveCodes(config: (x: CodeReq) => void): Observable<CodeRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.codes(config))
        }))));
        return this.flatMapQ<CodeRes>(observable, (e) => e.retrieve!.knowledge!.codes!);
    }

    public retrieveBehaviours(config: (x: BehaviourReq) => void): Observable<BehaviourRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.retrieve(g => {
            g.knowledge(k => k.behaviours(config))
        }))));
        return this.flatMapQ<BehaviourRes>(observable, (e) => e.retrieve!.knowledge!.behaviours!);
    }

    public introspect(config: (x: IntrospectionReq) => void): Observable<IntrospectionRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.introspect(config))));
        return this.mapQ<IntrospectionRes>(observable, (e) => e.introspect!);
    };

    public introspectSkills(config: (x: SkillIntrospectionReq) => void): Observable<SkillIntrospectionRes> {
        const observable = from(this.client.query(GaiaRequest.query(q => q.introspect(g => g.skills(config)))));
        return this.flatMapQ<SkillIntrospectionRes>(observable, (e) => e.introspect!.skills!);
    }

    public preserve(config: (x: PreservationReq) => void): Observable<PreservationRes> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(config))));
        return this.mapM<PreservationRes>(observable, (e) => e.preserve!);
    }

    public preserveCreateIntents(...impulses: [CreateIntentImpulse]): Observable<CreatedIntentImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.create(_ => _.intents(impulses, i => i.id()))
        }))));
        return this.flatMapM<CreatedIntentImpulse>(observable, (e) => e.preserve!.create!.intents!);
    }

    public preserveUpdateIntents(...impulses: [UpdateIntentImpulse]): Observable<UpdatedIntentImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.update(_ => _.intents(impulses, i => i.id()))
        }))));
        return this.flatMapM<UpdatedIntentImpulse>(observable, (e) => e.preserve!.update!.intents!);
    }

    public preserveDeleteIntents(...impulses: [DeleteIntentImpulse]): Observable<DeletedIntentImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.preserve(p => {
            p.delete(_ => _.intents(impulses, i => i.id()))
        }))));
        return this.flatMapM<DeletedIntentImpulse>(observable, (e) => e.preserve!.delete!.intents!);
    }

    public perceive(config: (x: PerceptionReq) => void): Observable<PerceptionRes> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => q.perceive(config))));
        return this.mapM<PerceptionRes>(observable, (e) => e.perceive!);
    }

    public perceiveAction(impulse: PerceiveActionImpulse): Observable<PerceivedImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => {
            q.perceive(p => p.perceiveAction(impulse, a => a.id()))
        })));
        return this.mapM<PerceivedImpulse>(observable, (e) => e.perceive!.perceiveAction!);
    }

    public perceiveData(impulse: PerceiveDataImpulse): Observable<PerceivedImpulse> {
        const observable = from(this.client.mutation(GaiaRequest.mutation(q => {
            q.perceive(p => p.perceiveData(impulse, a => a.id()))
        })));
        return this.mapM<PerceivedImpulse>(observable, (e) => e.perceive!.perceiveData!);
    }

    private mapQ<T>(observable: Observable<QueryResponse>, mapper: (_: Query) => T): Observable<T> {
        return observable.pipe(
            map(e => JSON.parse(e as string)),
            flatMap(e => {
                if (e.errors && e.errors.length > 0)
                    return throwError(Error(e.errors[0].message));
                return of(mapper(e.data as Query));
            }))
    }

    private flatMapQ<T>(observable: Observable<QueryResponse>, mapper: (_: Query) => [T]): Observable<T> {
        return observable.pipe(
            map(e => JSON.parse(e as string)),
            flatMap(e => {
                if (e.errors && e.errors.length > 0)
                    return throwError(Error(e.errors[0].message));
                return from(mapper(e.data as Query));
            }))
    }

    private mapM<T>(observable: Observable<MutationResponse>, mapper: (_: Mutation) => T): Observable<T> {
        return observable.pipe(
            map(e => JSON.parse(e as string)),
            flatMap(e => {
                if (e.errors && e.errors.length > 0)
                    return throwError(Error(e.errors[0].message));
                return of(mapper(e.data as Mutation));
            }))
    }

    private flatMapM<T>(observable: Observable<MutationResponse>, mapper: (_: Mutation) => [T]): Observable<T> {
        return observable.pipe(
            map(e => JSON.parse(e as string)),
            flatMap(e => {
                if (e.errors && e.errors.length > 0)
                    return throwError(Error(e.errors[0].message));
                return from(mapper(e.data as Mutation));
            }))
    }

}
