import {GaiaRequest} from "../GaiaRequest";
import Query from "../request/type/Query";
import Introspection from "../request/type/Introspection";
import {GaiaClient} from "../GaiaClient";
import {ClientOptions} from "../../api/ClientOptions";
import {ITransporter} from "../../api/ITransporter";
import {HttpTransport} from "../../http/HttpTransport";
import PerceiveDataImpulse from "../request/input/PerceiveDataImpulse";
import Mutation from "../request/type/Mutation";

describe("GaiaRequestTest", () => {

    test('builds expected queries', () => {
        const request = GaiaRequest.query((it: Query) => {
            it.introspect((introspect: Introspection) => {
                introspect.cpu();
                introspect.gpu();
                introspect.memory();
            })
        });

        const options = new ClientOptions("", "");
        const client = new GaiaClient(options, new HttpTransport("http://localhost:8080/api/sync"));

        return client.query(request).then(e => {
            console.log(e);
        }, (e) => console.error(e));
    });

    test('simple preserve invocation', () => {
        const request = GaiaRequest.mutation((m: Mutation) => {
            m.perceive(p => {
                p.perceiveData(new PerceiveDataImpulse("test", {"a":"b"}), e => e.id())
            })
        });

        const options = new ClientOptions("", "");
        const client = new GaiaClient(options, new HttpTransport("http://localhost:8080/api/sync"));

        return client.mutation(request).then(e => {
            console.log(e);
        }, (e) => console.error(e));
    });

});

class MockTransporter implements ITransporter {
    private callback: (options:ClientOptions, payload: any) => any;

    constructor(callback: (options:ClientOptions, payload: any) => any) {
        this.callback = callback;
    }

    transport<T>(options: ClientOptions, payload: any): Promise<T> {
        return Promise.resolve(this.callback(options, payload));
    }

}
