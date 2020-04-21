import {ClientOptions} from "../api/ClientOptions";
import {GaiaClient} from "../graphql/GaiaClient";
import {HttpTransport} from "./HttpTransport";
import Retrieval from "../graphql/request/type/Retrieval";
import {GaiaRequest} from "../graphql/GaiaRequest";
import Knowledge from "../graphql/request/type/Knowledge";
import Experience from "../graphql/request/type/Experience";
import Introspection from "../graphql/request/type/Introspection";
import Preservation from "../graphql/request/type/Preservation";
import Perception from "../graphql/request/type/Perception";
import PerceiveActionImpulse from "../graphql/request/input/PerceiveActionImpulse";
import PerceiveDataImpulse from "../graphql/request/input/PerceiveDataImpulse";

// TODO: use rxjs
export class HttpSensorFunction {

    private options = new ClientOptions("", "");
    private client = new GaiaClient(this.options, new HttpTransport("http://localhost:8080/api/sync"));

    public retrieve = (config: (_:Retrieval) => void) => {
        return this.client.query(GaiaRequest.query(q => q.retrieve(config)))
    };

    public retrieveKnowledge = (config: (_:Knowledge) => void) => {
        return this.client.query(GaiaRequest.query(q => q.retrieve(e => e.knowledge(config))))
    };

    public retrieveExperience = (config: (_:Experience) => void) => {
        return this.client.query(GaiaRequest.query(q => q.retrieve(e => e.experience(config))))
    };

    public introspect = (config: (_:Introspection) => void) => {
        return this.client.query(GaiaRequest.query(q => q.introspect(config)))
    };

    public preserve = (config: (_:Preservation) => void) => {
        return this.client.mutation(GaiaRequest.mutation(m => m.preserve(config)))
    };

    public perceive = (config: (_:Perception) => void) => {
        return this.client.mutation(GaiaRequest.mutation(m => m.perceive(config)))
    };

    public perceiveAction = (impulse: PerceiveActionImpulse) => {
        return this.client.mutation(GaiaRequest.mutation(m => m.perceive(p => {
            p.perceiveAction(impulse, e => {
                e.id()
            })
        })))
    };

    public perceiveData = (impulse: PerceiveDataImpulse) => {
        return this.client.mutation(GaiaRequest.mutation(m => m.perceive(p => {
            p.perceiveData(impulse, e => {
                e.id()
            })
        })))
    };

}
