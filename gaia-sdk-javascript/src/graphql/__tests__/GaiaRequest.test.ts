import {GaiaRequest} from "../GaiaRequest";
import {GaiaClient} from "../GaiaClient";
import {ClientOptions} from "../../api/ClientOptions";
import {ITransporter} from "../../api/ITransporter";
import {PerceiveDataImpulse} from "..";
import {Mutation} from "../request/type/Mutation";
import {HMACCredentials} from "../../api/GaiaCredentials";

describe("GaiaRequestTest", () => {

    test('simple preserve invocation', () => {
        const impulse = new PerceiveDataImpulse("", "test", {"a": "b"});

        const request = GaiaRequest.mutation((m: Mutation) => {
            m.perceive(p => {
                p.perceiveData(impulse, e => e.id());
            });
        });

        const options = new ClientOptions(new HMACCredentials("mockedApiKey", "mockedApiSecret"), "application/json");
        const client = new GaiaClient(options, new MockTransporter((_, payload) => {
            const statement = payload.statement;
            const variables = payload.variables;

            expect(statement).toEqual("mutation gaia($impulse1:PerceiveDataImpulse!) { perceive { perceiveData(impulse:$impulse1){id} } }");
            expect(variables).toEqual({"impulse1": {"eventData": {"a": "b"}, "eventName": "test", "identityId": ""}});
        }));

        client.mutation(request);
    });

});

class MockTransporter implements ITransporter {
    private callback: (options: ClientOptions, payload: any) => any;

    constructor(callback: (options: ClientOptions, payload: any) => any) {
        this.callback = callback;
    }

    transport<T>(options: ClientOptions, payload: any, urlPostfix: string = ""): Promise<T> {
        return Promise.resolve(this.callback(options, payload));
    }
}
