import {Gaia} from "../graphql";
import * as CryptoJS from "crypto-js";

const { v4: uuidv4 } = require('uuid');

describe("perception tests:", () => {

    //TODO create a proper test to verify the token
    test('test retrieve behaviours11', () => {
        const timestamp = 1592924470 // Math.floor(Date.now() / 1000); //todo: check if this is a UTC timestamp
        const nonce = "353823db-c12b-44b2-b0dc-c4d813c74b24"//UUID.randomUUID().toString();

        const encodedString= btoa("hi")
        let a = [encodedString,"application/json","http",timestamp,nonce].join("_")


        const hmac = CryptoJS.HmacSHA512(Buffer.from(a).toString(),"secret").toString()
        const content = btoa(hmac);
        const token = "HMAC-SHA512 " + ["apiKey",content,"application/json","http",timestamp,nonce].join("_")
         expect(token==="HMAC-SHA512 apiKey_MzE5ZjQyNzg3ZTgyZGJhNmE3YTBiNjI5ODA5MjIzMzk2YzRhMTg1MmNlOWUwYzhiYTNiZmQ0MTkxY2NlMDg1YTVlMWM0Y2UwM2QzNzNlM2NhYWIxMzcxMTU5MTQxNTJkNzFhMmEwMmY3OGIwNTZmNjA0NTJkZDJlYzg2ZDE1MjU=_application/json_http_1592924470_353823db-c12b-44b2-b0dc-c4d813c74b24").toBeTruthy()
        });



    test('test retrieve behaviours', () => {
        const gaiaRef = Gaia.connectWithHMAC("http://localhost:8080", "mockedApiKey", "mockedApiSecret");
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
        const gaiaRef = Gaia.connectWithHMAC("http://localhost:8080", "mockedApiKey", "mockedApiSecret");
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
        const gaiaRef = Gaia.connectWithHMAC("http://localhost:8080", "mockedApiKey", "mockedApiSecret");
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
        const gaiaRef = Gaia.connectWithHMAC("http://localhost:8080", "mockedApiKey", "mockedApiSecret");
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
        const gaiaRef = Gaia.connectWithHMAC("http://localhost:8080", "mockedApiKey", "mockedApiSecret");
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
        const gaiaRef = Gaia.connectWithHMAC("http://localhost:8080", "mockedApiKey", "mockedApiSecret");
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
        const gaiaRef = Gaia.connectWithHMAC("http://localhost:8080", "mockedApiKey", "mockedApiSecret");
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
        const gaiaRef = Gaia.connectWithHMAC("http://localhost:8080", "mockedApiKey", "mockedApiSecret");
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
        const gaiaRef = Gaia.connectWithHMAC("http://localhost:8080", "mockedApiKey", "mockedApiSecret");
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
        const gaiaRef = Gaia.connectWithHMAC("http://localhost:8080", "mockedApiKey", "mockedApiSecret");
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
        const gaiaRef = Gaia.connectWithHMAC("http://localhost:8080", "mockedApiKey", "mockedApiSecret");
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
        const gaiaRef = Gaia.connectWithHMAC("http://localhost:8080", "mockedApiKey", "mockedApiSecret");
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

    test('test retrieve knowledge edges', () => {
        const gaiaRef = Gaia.connectWithHMAC("http://localhost:8080", "mockedApiKey", "mockedApiSecret");
        const source = uuidv4()

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveEdges( source, _ => {
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

    test('test retrieve knowledge edge', () => {
        const gaiaRef = Gaia.connectWithHMAC("http://localhost:8080", "mockedApiKey", "mockedApiSecret");
        const source = uuidv4()
        const target = uuidv4()

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveEdge(source, target, _ => {
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
