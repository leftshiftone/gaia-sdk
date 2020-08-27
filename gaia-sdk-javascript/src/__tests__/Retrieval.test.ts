import {Gaia} from "../graphql";
import {HMACCredentials} from "../api/GaiaCredentials";

const { v4: uuidv4 } = require('uuid');

describe("perception tests:", () => {

    beforeEach(() => {
        jest.setTimeout(20000);
    })

    test('test retrieve identities', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveIdentities(_ => {
                _.identityId();
                _.qualifier();
            });
            observable.subscribe(e => {
                expect(e.identityId !== undefined).toBeTruthy();
                expect(e.qualifier !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve paginated identities', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        var latestExpectedIndex = 100

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveIdentities(_ => {
                _.identityId();
                _.qualifier();
            }, 10, 100);
            observable.subscribe(e => {
                expect(e.identityId !== undefined).toBeTruthy();
                latestExpectedIndex++;
                expect(e.qualifier === "" + latestExpectedIndex).toBeTruthy()
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve identity', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        const identityId = uuidv4()

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveIdentity(identityId, _ => {
                _.identityId();
                _.qualifier();
            });
            observable.subscribe(e => {
                expect(e.identityId !== undefined).toBeTruthy();
                expect(e.qualifier !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve behaviours', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
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

    test('test retrieve paginated behaviours', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        const identityId = uuidv4()
        var latestExpectedIndex = 100

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveBehaviours(identityId,_ => {
                _.identityId();
                _.reference();
                _.qualifier();
            }, 10, 100);
            observable.subscribe(e => {
                expect(e.identityId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                latestExpectedIndex++
                expect(e.qualifier === "" + latestExpectedIndex).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve behaviour', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
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
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
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

    test('test retrieve paginated codes', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        const identityId = uuidv4()
        var latestExpectedIndex = 100

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveCodes(identityId,_ => {
                _.identityId();
                _.reference();
                _.qualifier();
            }, 10, 100);
            observable.subscribe(e => {
                expect(e.identityId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                latestExpectedIndex++
                expect(e.qualifier === "" + latestExpectedIndex).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve code', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
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
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
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

    test('test retrieve paginated intents', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        const identityId = uuidv4()
        var latestExpectedIndex = 100

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveIntents(identityId,_ => {
                _.identityId();
                _.reference();
                _.qualifier();
            }, 10, 100);
            observable.subscribe(e => {
                expect(e.identityId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                latestExpectedIndex++
                expect(e.qualifier === "" + latestExpectedIndex).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve intent', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
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
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
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

    test('test retrieve paginated prompts', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        const identityId = uuidv4()
        var latestExpectedIndex = 100

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrievePrompts(identityId,_ => {
                _.identityId();
                _.reference();
                _.qualifier();
            }, 10, 100);
            observable.subscribe(e => {
                expect(e.identityId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                latestExpectedIndex++
                expect(e.qualifier === "" + latestExpectedIndex).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve prompt', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
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
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
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

    test('test retrieve paginated fulfilments', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        const identityId = uuidv4()
        var latestExpectedIndex = 100

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveFulfilments(identityId,_ => {
                _.identityId();
                _.reference();
                _.qualifier();
            }, 10, 100);
            observable.subscribe(e => {
                expect(e.identityId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                latestExpectedIndex++
                expect(e.qualifier === "" + latestExpectedIndex).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve fulfilment', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
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
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
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

    test('test retrieve paginated statements', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        const identityId = uuidv4()
        var latestExpectedIndex = 100

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveStatements(identityId,_ => {
                _.identityId();
                _.reference();
                _.qualifier();
            }, 10, 100);
            observable.subscribe(e => {
                expect(e.identityId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                latestExpectedIndex++
                expect(e.qualifier === "" + latestExpectedIndex).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve statement', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
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
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
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

    test('test retrieve paginated edges', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        const source = uuidv4()
        var latestExpectedIndex = 100

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveEdges(source,_ => {
                _.source();
                _.target();
                _.type();
            }, 10, 100);
            observable.subscribe(e => {
                expect(e.source !== undefined).toBeTruthy();
                expect(e.target !== undefined).toBeTruthy();
                latestExpectedIndex++
                expect(e.type === "" + latestExpectedIndex).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve knowledge edge', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
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


    test('test retrieve skills', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        const tenantId = uuidv4()

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveSkills(tenantId,_ => {
                _.tenantId();
                _.reference();
            });
            observable.subscribe(e => {
                expect(e.tenantId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve paginated skills', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        const tenantId = uuidv4()
        var latestExpectedIndex = 100

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveSkills(tenantId,_ => {
                _.tenantId();
                _.reference();
                _.qualifier();
            }, 10, 100);
            observable.subscribe(e => {
                expect(e.tenantId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                latestExpectedIndex++
                expect(e.qualifier === "" + latestExpectedIndex).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve skill', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        const tenantId = uuidv4()
        const reference = uuidv4()

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveSkill(tenantId,reference, _ => {
                _.tenantId();
                _.reference();
            });
            observable.subscribe(e => {
                expect(e.tenantId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve skillProvisions', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        const tenantId = uuidv4()

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveSkillProvisions(tenantId,_ => {
                _.tenantId();
                _.reference();
            });
            observable.subscribe(e => {
                expect(e.tenantId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve paginated skillProvisions', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        const tenantId = uuidv4()
        var latestExpectedIndex = 100

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveSkillProvisions(tenantId,_ => {
                _.tenantId();
                _.reference();
                _.qualifier();
            }, 10, 100);
            observable.subscribe(e => {
                expect(e.tenantId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                latestExpectedIndex++
                expect(e.qualifier === "" + latestExpectedIndex).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve skillProvision', () => {
        const gaiaRef = Gaia.connect("http://localhost:8080", new HMACCredentials("mockedApiKey", "mockedApiSecret"));
        const tenantId = uuidv4()
        const reference = uuidv4()

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveSkillProvision(tenantId,reference, _ => {
                _.tenantId();
                _.reference();
            });
            observable.subscribe(e => {
                expect(e.tenantId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });


});
