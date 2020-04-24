import {Gaia, PerceiveActionImpulse, PerceiveDataImpulse} from "../graphql";
import { v4 as uuid } from 'uuid';

describe("perception tests:", () => {

    test('test perceive data', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new PerceiveDataImpulse("{identityId}", "{eventName}", {});

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.perceiveData(impulse); // rxjs
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test perceive action', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new PerceiveActionImpulse(false, uuid(), "{eventName}", {});

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.perceiveAction(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

});
