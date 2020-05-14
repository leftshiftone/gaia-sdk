import {Gaia, PerceiveDataImpulse} from "../graphql";

const { v4: uuidv4 } = require('uuid');

describe("perception tests:", () => {

    test('test retrieve behaviours', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const identityId = uuidv4()

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveBehaviours(identityId,_ => {
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

    test('test retrieve behaviour', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const identityId = uuidv4()
        const reference = uuidv4()

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveBehaviour(identityId, reference,_ => {
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

    test('test retrieve codes', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const identityId = uuidv4()

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveCodes(identityId,_ => {
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
        const identityId = uuidv4()
        const reference = uuidv4()

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveCode(identityId, reference,_ => {
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

    test('test retrieve intents', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const identityId = uuidv4()

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveIntents(identityId,_ => {
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
        const identityId = uuidv4()
        const reference = uuidv4()

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveIntent(identityId, reference, _ => {
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

    test('test retrieve prompts', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const identityId = uuidv4()

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrievePrompts(identityId,_ => {
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
        const identityId = uuidv4()
        const reference = uuidv4()

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrievePrompt(identityId, reference,_ => {
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

    test('test retrieve fulfilments', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const identityId = uuidv4()

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveFulfilments(identityId,_ => {
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
        const identityId = uuidv4()
        const reference = uuidv4()

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveFulfilment(identityId, reference, _ => {
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

    test('test retrieve statements', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const identityId = uuidv4()

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveStatements(identityId,_ => {
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
        const identityId = uuidv4()
        const reference = uuidv4()

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveStatement(identityId,reference, _ => {
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
