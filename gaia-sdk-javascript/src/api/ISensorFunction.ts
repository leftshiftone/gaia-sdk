import {Retrieval} from "../graphql/request/type/Retrieval";
import {Retrieval as RetrievalOut} from "../graphql/response/type/Retrieval";
import {Observable} from "rxjs";
import {Experience} from "../graphql/request/type/Experience";
import {Experience as ExperienceOut} from "../graphql/response/type/Experience";
import {Knowledge} from "../graphql/request/type/Knowledge";
import {Knowledge as KnowledgeOut} from "../graphql/response/type/Knowledge";
import {KnowledgeEdge} from "../graphql/request/type/KnowledgeEdge";
import {KnowledgeEdge as KnowledgeEdgeOut} from "../graphql/response/type/KnowledgeEdge";
import {Intent} from "../graphql/request/type/Intent";
import {Prompt} from "../graphql/request/type/Prompt";
import {Statement} from "../graphql/request/type/Statement";
import {Fulfilment} from "../graphql/request/type/Fulfilment";
import {Code} from "../graphql/request/type/Code";
import {Behaviour} from "../graphql/request/type/Behaviour";
import {Intent as IntentOut} from "../graphql/response/type/Intent";
import {Prompt as PromptOut} from "../graphql/response/type/Prompt";
import {Statement as StatementOut} from "../graphql/response/type/Statement";
import {Fulfilment as FulfilmentOut} from "../graphql/response/type/Fulfilment";
import {Code as CodeOut} from "../graphql/response/type/Code";
import {Behaviour as BehaviourOut} from "../graphql/response/type/Behaviour";
import {Introspection} from "../graphql/request/type/Introspection";
import {Introspection as IntrospectionOut} from "../graphql/response/type/Introspection";
import {SkillIntrospection} from "../graphql/request/type/SkillIntrospection";
import {SkillIntrospection as SkillIntrospectionOut} from "../graphql/response/type/SkillIntrospection";
import {Preservation} from "../graphql/request/type/Preservation";
import {Preservation as PreservationOut} from "../graphql/response/type/Preservation";
import {CreateIntentImpulse} from "../graphql/request/input/CreateIntentImpulse";
import {CreatedIntentImpulse} from "../graphql/response/type/CreatedIntentImpulse";
import {UpdateIntentImpulse} from "../graphql/request/input/UpdateIntentImpulse";
import {DeleteIntentImpulse} from "../graphql/request/input/DeleteIntentImpulse";
import {UpdatedIntentImpulse} from "../graphql/response/type/UpdatedIntentImpulse";
import {DeletedIntentImpulse} from "../graphql/response/type/DeletedIntentImpulse";
import {Perception} from "../graphql/request/type/Perception";
import {Perception as PerceptionOut} from "../graphql/response/type/Perception";
import {PerceiveActionImpulse} from "../graphql/request/input/PerceiveActionImpulse";
import {PerceivedImpulse} from "../graphql/response/type/PerceivedImpulse";
import {PerceiveDataImpulse} from "../graphql/request/input/PerceiveDataImpulse";
import {
    BehaviourReq, BehaviourRes,
    CodeReq, CodeRes,
    ExperienceReq,
    ExperienceRes, FulfilmentReq, FulfilmentRes, IntentReq, IntentRes, IntrospectionReq, IntrospectionRes,
    KnowledgeEdgeReq, KnowledgeEdgeRes,
    KnowledgeReq,
    KnowledgeRes, PerceptionReq, PerceptionRes, PreservationReq, PreservationRes, PromptReq, PromptRes,
    RetrievalReq,
    RetrievalRes, SkillIntrospectionReq, SkillIntrospectionRes, StatementReq, StatementRes
} from "../graphql";

export interface ISensorFunction {
    retrieve(config: (x:RetrievalReq) => void): Observable<RetrievalRes>
    retrieveExperience(config: (x:ExperienceReq) => void): Observable<ExperienceRes>
    retrieveKnowledge(config: (x:KnowledgeReq) => void): Observable<KnowledgeRes>
    retrieveKnowledgeEdge(config: (x:KnowledgeEdgeReq) => void): Observable<KnowledgeEdgeRes>
    retrieveIntents(config: (x:IntentReq) => void): Observable<IntentRes>
    retrievePrompts(config: (x:PromptReq) => void): Observable<PromptRes>
    retrieveStatements(config: (x:StatementReq) => void): Observable<StatementRes>
    retrieveFulfilments(config: (x:FulfilmentReq) => void): Observable<FulfilmentRes>
    retrieveCodes(config: (x:CodeReq) => void): Observable<CodeRes>
    retrieveBehaviours(config: (x:BehaviourReq) => void): Observable<BehaviourRes>
    introspect(config: (x: IntrospectionReq) => void): Observable<IntrospectionRes>
    introspectSkills(config: (x: SkillIntrospectionReq) => void): Observable<SkillIntrospectionRes>
    preserve(config: (x: PreservationReq) => void): Observable<PreservationRes>
    preserveCreateIntents(...impulses: [CreateIntentImpulse]): Observable<CreatedIntentImpulse>
    preserveUpdateIntents(...impulses: [UpdateIntentImpulse]): Observable<UpdatedIntentImpulse>
    preserveDeleteIntents(...impulses: [DeleteIntentImpulse]): Observable<DeletedIntentImpulse>
    perceive(config: (x: PerceptionReq) => void): Observable<PerceptionRes>
    perceiveAction(impulse: PerceiveActionImpulse): Observable<PerceivedImpulse>
    perceiveData(impulse: PerceiveDataImpulse): Observable<PerceivedImpulse>
}
