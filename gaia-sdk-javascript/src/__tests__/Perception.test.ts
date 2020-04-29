import {Gaia, PerceiveActionImpulse, PerceiveDataImpulse} from "../graphql";
import { v4 as uuid } from 'uuid';

describe("perception tests:", () => {

    test('test perceive data', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new PerceiveDataImpulse("{identityId}", "{eventName}", {});

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.perceiveData(impulse);
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

    test('test perceive', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse1 = new PerceiveActionImpulse(false, uuid(), "{eventName}", {});
        const impulse2 = new PerceiveDataImpulse("{identityId}", "{eventName}", {});

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.perceive(p => {
                p.perceiveAction(impulse1, _ => _.id());
                p.perceiveData(impulse2, _ => _.id())
            });
            observable.subscribe(e => {
                expect(e !== undefined).toBeTruthy();
                expect(e.perceiveData!!.id !== undefined).toBeTruthy();
                expect(e.perceiveAction!!.id !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

});
