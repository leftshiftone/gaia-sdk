import {Gaia, PerceiveActionImpulse, PerceiveDataImpulse} from "../graphql";
import { v4 as uuid } from 'uuid';

describe("perception tests:", () => {

    test('test retrieve behaviour', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new PerceiveDataImpulse("{identityId}", "{eventName}", {});

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveBehaviours(_ => {
                _.identityId();
                _.reference();
            });
            observable.subscribe(e => {
                expect(e.identityId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve code', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new PerceiveDataImpulse("{identityId}", "{eventName}", {});

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveCodes(_ => {
                _.identityId();
                _.reference();
            });
            observable.subscribe(e => {
                expect(e.identityId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve intent', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new PerceiveDataImpulse("{identityId}", "{eventName}", {});

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveIntents(_ => {
                _.identityId();
                _.reference();
            });
            observable.subscribe(e => {
                expect(e.identityId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve prompt', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new PerceiveDataImpulse("{identityId}", "{eventName}", {});

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrievePrompts(_ => {
                _.identityId();
                _.reference();
            });
            observable.subscribe(e => {
                expect(e.identityId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve fulfilment', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new PerceiveDataImpulse("{identityId}", "{eventName}", {});

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveFulfilments(_ => {
                _.identityId();
                _.reference();
            });
            observable.subscribe(e => {
                expect(e.identityId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve statement', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new PerceiveDataImpulse("{identityId}", "{eventName}", {});

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveStatements(_ => {
                _.identityId();
                _.reference();
            });
            observable.subscribe(e => {
                expect(e.identityId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve knowledge edge', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new PerceiveDataImpulse("{identityId}", "{eventName}", {});

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveKnowledgeEdge(_ => {
                _.source();
                _.target();
            });
            observable.subscribe(e => {
                expect(e.source !== undefined).toBeTruthy();
                expect(e.target !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

});
