import {
    CreateIntentImpulse,
    DeleteIntentImpulse,
    Gaia,
    PerceiveActionImpulse,
    PerceiveDataImpulse,
    UpdateIntentImpulse
} from "../graphql";
import { v4 as uuid } from 'uuid';

describe("perception tests:", () => {

    test('test preserve create intent', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new CreateIntentImpulse(uuid(), "", "", {}, [], "");

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveCreateIntents(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test preserve update intent', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new UpdateIntentImpulse(uuid(), uuid(), "", "", {}, [], "");

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveUpdateIntents(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test preserve delete intent', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new DeleteIntentImpulse(uuid(), uuid());

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveDeleteIntents(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

});
