import {CreateIntentImpulse, DeleteIntentImpulse, Gaia, UpdateIntentImpulse} from "../graphql";
import {v4 as uuid} from 'uuid';
import {CreatePromptImpulse} from "../graphql/request/input/CreatePromptImpulse";
import {UpdatePromptImpulse} from "../graphql/request/input/UpdatePromptImpulse";
import {DeletePromptImpulse} from "../graphql/request/input/DeletePromptImpulse";
import {DeleteStatementImpulse} from "../graphql/request/input/DeleteStatementImpulse";
import {UpdateStatementImpulse} from "../graphql/request/input/UpdateStatementImpulse";
import {CreateStatementImpulse} from "../graphql/request/input/CreateStatementImpulse";
import {CreateFulfilmentImpulse} from "../graphql/request/input/CreateFulfilmentImpulse";
import {UpdateFulfilmentImpulse} from "../graphql/request/input/UpdateFulfilmentImpulse";
import {DeleteFulfilmentImpulse} from "../graphql/request/input/DeleteFulfilmentImpulse";
import {CreateBehaviourImpulse} from "../graphql/request/input/CreateBehaviourImpulse";
import {UpdateBehaviourImpulse} from "../graphql/request/input/UpdateBehaviourImpulse";
import {DeleteBehaviourImpulse} from "../graphql/request/input/DeleteBehaviourImpulse";
import {CreateCodeImpulse} from "../graphql/request/input/CreateCodeImpulse";
import {UpdateCodeImpulse} from "../graphql/request/input/UpdateCodeImpulse";
import {DeleteCodeImpulse} from "../graphql/request/input/DeleteCodeImpulse";

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

    test('test preserve create prompt', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new CreatePromptImpulse(uuid(), "", "", {}, [], "");

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveCreatePrompts(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test preserve update prompt', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new UpdatePromptImpulse(uuid(), uuid(), "", "", {}, [], "");

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveUpdatePrompts(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test preserve delete prompt', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new DeletePromptImpulse(uuid(), uuid());

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveDeletePrompts(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test preserve create statement', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new CreateStatementImpulse(uuid(), "", "", {}, [], "");

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveCreateStatements(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test preserve update statement', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new UpdateStatementImpulse(uuid(), uuid(), "", "", {}, [], "");

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveUpdateStatements(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test preserve delete statement', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new DeleteStatementImpulse(uuid(), uuid());

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveDeleteStatements(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test preserve create fulfilment', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new CreateFulfilmentImpulse(uuid(), "", "", {}, [], "");

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveCreateFulfilments(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test preserve update fulfilment', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new UpdateFulfilmentImpulse(uuid(), uuid(), "", "", {}, [], "");

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveUpdateFulfilments(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test preserve delete fulfilment', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new DeleteFulfilmentImpulse(uuid(), uuid());

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveDeleteFulfilments(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test preserve create behaviour', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new CreateBehaviourImpulse(uuid(), "", "", {}, [], "");

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveCreateBehaviours(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test preserve update behaviour', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new UpdateBehaviourImpulse(uuid(), uuid(), "", "", {}, [], "");

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveUpdateBehaviours(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test preserve delete behaviour', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new DeleteBehaviourImpulse(uuid(), uuid());

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveDeleteBehaviours(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test preserve create code', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new CreateCodeImpulse(uuid(), "", "", {}, [], "");

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveCreateCodes(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test preserve update code', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new UpdateCodeImpulse(uuid(), uuid(), "", "", {}, [], "");

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveUpdateCodes(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test preserve delete code', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", "{apiKey}", "{apiSecret}");
        const impulse = new DeleteCodeImpulse(uuid(), uuid());

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveDeleteCodes(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

});
