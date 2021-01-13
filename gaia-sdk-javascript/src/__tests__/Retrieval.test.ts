import {Mock} from '../mock/mock';

const {v4: uuidv4} = require('uuid');

describe('perception tests:', () => {

    test('test retrieve identities', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {identities: [{identityId: 'asdf', qualifier: 'q1', availableLanguages: {de: "Deutsch"}}]}}}})
        );
        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveIdentities(_ => {
                _.identityId();
                _.qualifier();
                _.availableLanguages();
            });
            observable.subscribe(e => {
                expect(e.identityId !== undefined).toBeTruthy();
                expect(e.qualifier !== undefined).toBeTruthy();
                expect(e.availableLanguages["de"] == "Deutsch").toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve paginated identities', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({
                data: {
                    retrieve: {
                        knowledge: {
                            identities: [{
                                identityId: 'i1',
                                qualifier: '101', availableLanguages: {de: "Deutsch"}
                            }, {identityId: 'i2', qualifier: '102', availableLanguages: {de: "Deutsch"}}, {
                                identityId: 'i3',
                                qualifier: '103', availableLanguages: {de: "Deutsch"}
                            }, {identityId: 'i4', qualifier: '104', availableLanguages: {de: "Deutsch"}}, {
                                identityId: 'i5',
                                qualifier: '105', availableLanguages: {de: "Deutsch"}
                            }, {identityId: 'i6', qualifier: '106', availableLanguages: {de: "Deutsch"}}, {
                                identityId: 'i7',
                                qualifier: '107', availableLanguages: {de: "Deutsch"}
                            }, {identityId: 'i8', qualifier: '108', availableLanguages: {de: "Deutsch"}}, {
                                identityId: 'i9',
                                qualifier: '109', availableLanguages: {de: "Deutsch"}
                            }, {identityId: 'i10', qualifier: '110', availableLanguages: {de: "Deutsch"}}]
                        }
                    }
                }
            })
        );
        let latestExpectedIndex = 100;

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveIdentities(_ => {
                _.identityId();
                _.qualifier();
                _.availableLanguages();
            }, 10, 100);
            observable.subscribe(e => {
                expect(e.identityId !== undefined).toBeTruthy();
                latestExpectedIndex++;
                expect(e.qualifier === '' + latestExpectedIndex).toBeTruthy();
                expect(e.availableLanguages["de"] == "Deutsch").toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve identity', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {identity: {identityId: 'asdf', qualifier: 'q1', availableLanguages: {de: "Deutsch"}}}}}})
        );
        const identityId = uuidv4();

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveIdentity(identityId, _ => {
                _.identityId();
                _.qualifier();
                _.availableLanguages();
            });
            observable.subscribe(e => {
                expect(e.identityId !== undefined).toBeTruthy();
                expect(e.qualifier !== undefined).toBeTruthy();
                expect(e.availableLanguages["de"] == "Deutsch").toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve tenants', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {tenants: [{tenantId: 'i1', qualifier: '101'}]}}}})
        );
        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveTenants(_ => {
                _.tenantId();
                _.qualifier();
            });
            observable.subscribe(e => {
                expect(e.tenantId !== undefined).toBeTruthy();
                expect(e.qualifier !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve paginated tenants', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({
                data: {
                    retrieve: {
                        knowledge: {
                            tenants: [{tenantId: 'i1', qualifier: '101'}, {
                                tenantId: 'i2',
                                qualifier: '102'
                            }]
                        }
                    }
                }
            })
        );
        let latestExpectedIndex = 100;

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveTenants(_ => {
                _.tenantId();
                _.qualifier();
            }, 10, 100);
            observable.subscribe(e => {
                expect(e.tenantId !== undefined).toBeTruthy();
                latestExpectedIndex++;
                expect(e.qualifier === '' + latestExpectedIndex).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve tenant', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {tenant: {tenantId: 'asdf', qualifier: 'q1'}}}}})
        );
        const tenantId = uuidv4();

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveTenant(tenantId, _ => {
                _.tenantId();
                _.qualifier();
            });
            observable.subscribe(e => {
                expect(e.tenantId !== undefined).toBeTruthy();
                expect(e.qualifier !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve users', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {users: [{userId: 'i1', username: 'name'}]}}}})
        );
        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveUsers(_ => {
                _.userId();
                _.username();
            });
            observable.subscribe(e => {
                expect(e.userId !== undefined).toBeTruthy();
                expect(e.username !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve paginated users', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({
                data: {
                    retrieve: {
                        knowledge: {
                            users: [{userId: 'i1', username: '101'}, {
                                userId: 'i2',
                                username: '102'
                            }]
                        }
                    }
                }
            })
        );
        let latestExpectedIndex = 100;

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveUsers(_ => {
                _.userId();
                _.username();
            }, 10, 100);
            observable.subscribe(e => {
                expect(e.userId !== undefined).toBeTruthy();
                latestExpectedIndex++;
                expect(e.username === "" + latestExpectedIndex).toBeTruthy()
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve user', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {user: {userId: 'i1', username: '101'}}}}})
        );
        const tenantId = uuidv4();

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveUser(tenantId, _ => {
                _.userId();
                _.username();
            });
            observable.subscribe(e => {
                expect(e.username !== undefined).toBeTruthy();
                expect(e.userId !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve roles', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {roles: [{roleId: 'i1', name: 'name', permissions: ["*"]}]}}}})
        );
        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveRoles(_ => {
                _.roleId();
                _.name();
                _.permissions();
            });
            observable.subscribe(e => {
                expect(e.roleId !== undefined).toBeTruthy();
                expect(e.name !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve paginated roles', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({
                data: {
                    retrieve: {
                        knowledge: {
                            roles: [
                                {roleId: 'i1', name: '101', permissions: ["*"]},
                                {roleId: 'i2', name: '102', permissions: ["*"]},
                                {roleId: 'i3', name: '103', permissions: ["*"]},
                                {roleId: 'i4', name: '104', permissions: ["*"]},
                                {roleId: 'i5', name: '105', permissions: ["*"]},
                            ]
                        }
                    }
                }
            })
        );
        let latestExpectedIndex = 100;

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveRoles(_ => {
                _.roleId();
                _.name();
                _.permissions();
            }, 10, 100);
            observable.subscribe(e => {
                expect(e.roleId !== undefined).toBeTruthy();
                latestExpectedIndex++;
                expect(e.name === "" + latestExpectedIndex).toBeTruthy()
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve role', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {role: {roleId: 'i1', name: '101', permissions: ["*"]}}}}})
        );
        const roleId = uuidv4();

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveRole(roleId, _ => {
                _.roleId();
                _.name();
                _.permissions();
            });
            observable.subscribe(e => {
                expect(e.roleId !== undefined).toBeTruthy();
                expect(e.name !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve behaviours', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {behaviours: [{identityId: 'i1', reference: '101'}]}}}})
        );
        const identityId = uuidv4();

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveBehaviours(identityId, _ => {
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
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({
                data: {
                    retrieve: {
                        knowledge: {
                            behaviours: [{
                                identityId: 'i1',
                                reference: '101',
                                qualifier: '101'
                            }, {identityId: 'i1', reference: '101', qualifier: '102'}]
                        }
                    }
                }
            })
        );
        const identityId = uuidv4();
        let latestExpectedIndex = 100;

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveBehaviours(identityId, _ => {
                _.identityId();
                _.reference();
                _.qualifier();
            }, 10, 100);
            observable.subscribe(e => {
                expect(e.identityId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                latestExpectedIndex++;
                expect(e.qualifier === '' + latestExpectedIndex).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve behaviour', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {behaviour: {identityId: 'i1', reference: '101'}}}}})
        );
        const identityId = uuidv4();
        const reference = uuidv4();

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveBehaviour(identityId, reference, _ => {
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
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {codes: [{identityId: 'i1', reference: '101'}]}}}})
        );
        const identityId = uuidv4();

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveCodes(identityId, _ => {
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
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({
                data: {
                    retrieve: {
                        knowledge: {
                            codes: [{
                                identityId: 'i1',
                                reference: '101',
                                qualifier: '101'
                            }, {identityId: 'i1', reference: '101', qualifier: '102'}]
                        }
                    }
                }
            })
        );
        const identityId = uuidv4();
        let latestExpectedIndex = 100;

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveCodes(identityId, _ => {
                _.identityId();
                _.reference();
                _.qualifier();
            }, 10, 100);
            observable.subscribe(e => {
                expect(e.identityId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                latestExpectedIndex++;
                expect(e.qualifier === '' + latestExpectedIndex).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve code', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {code: {identityId: 'i1', reference: '101'}}}}})
        );
        const identityId = uuidv4();
        const reference = uuidv4();

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveCode(identityId, reference, _ => {
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
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {intents: [{identityId: 'i1', reference: '101'}]}}}})
        );
        const identityId = uuidv4();

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveIntents(identityId, _ => {
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
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({
                data: {
                    retrieve: {
                        knowledge: {
                            intents: [{
                                identityId: 'i1',
                                reference: '101',
                                qualifier: '101'
                            }, {identityId: 'i1', reference: '101', qualifier: '102'}]
                        }
                    }
                }
            })
        );
        const identityId = uuidv4();
        let latestExpectedIndex = 100;

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveIntents(identityId, _ => {
                _.identityId();
                _.reference();
                _.qualifier();
            }, 10, 100);
            observable.subscribe(e => {
                expect(e.identityId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                latestExpectedIndex++;
                expect(e.qualifier === '' + latestExpectedIndex).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve intent', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {intent: {identityId: 'i1', reference: '101'}}}}})
        );
        const identityId = uuidv4();
        const reference = uuidv4();

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
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {prompts: [{identityId: 'i1', reference: '101'}]}}}})
        );
        const identityId = uuidv4();

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrievePrompts(identityId, _ => {
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
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({
                data: {
                    retrieve: {
                        knowledge: {
                            prompts: [{
                                identityId: 'i1',
                                reference: '101',
                                qualifier: '101'
                            }, {identityId: 'i1', reference: '101', qualifier: '102'}]
                        }
                    }
                }
            })
        );
        const identityId = uuidv4();
        let latestExpectedIndex = 100;

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrievePrompts(identityId, _ => {
                _.identityId();
                _.reference();
                _.qualifier();
            }, 10, 100);
            observable.subscribe(e => {
                expect(e.identityId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                latestExpectedIndex++;
                expect(e.qualifier === '' + latestExpectedIndex).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve prompt', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {prompt: {identityId: 'i1', reference: '101'}}}}})
        );
        const identityId = uuidv4();
        const reference = uuidv4();

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrievePrompt(identityId, reference, _ => {
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
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {fulfilments: [{identityId: 'i1', reference: '101'}]}}}})
        );
        const identityId = uuidv4();

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveFulfilments(identityId, _ => {
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
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({
                data: {
                    retrieve: {
                        knowledge: {
                            fulfilments: [{
                                identityId: 'i1',
                                reference: '101',
                                qualifier: '101'
                            }, {identityId: 'i1', reference: '101', qualifier: '102'}]
                        }
                    }
                }
            })
        );
        const identityId = uuidv4();
        let latestExpectedIndex = 100;

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveFulfilments(identityId, _ => {
                _.identityId();
                _.reference();
                _.qualifier();
            }, 10, 100);
            observable.subscribe(e => {
                expect(e.identityId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                latestExpectedIndex++;
                expect(e.qualifier === '' + latestExpectedIndex).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve fulfilment', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {fulfilment: {identityId: 'i1', reference: '101'}}}}})
        );
        const identityId = uuidv4();
        const reference = uuidv4();

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
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {statements: [{identityId: 'i1', reference: '101'}]}}}})
        );
        const identityId = uuidv4();

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveStatements(identityId, _ => {
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
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({
                data: {
                    retrieve: {
                        knowledge: {
                            statements: [{
                                identityId: 'i1',
                                reference: '101',
                                qualifier: '101'
                            }, {identityId: 'i1', reference: '101', qualifier: '102'}]
                        }
                    }
                }
            })
        );
        const identityId = uuidv4();
        let latestExpectedIndex = 100;

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveStatements(identityId, _ => {
                _.identityId();
                _.reference();
                _.qualifier();
            }, 10, 100);
            observable.subscribe(e => {
                expect(e.identityId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                latestExpectedIndex++;
                expect(e.qualifier === '' + latestExpectedIndex).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve statement', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {statement: {identityId: 'i1', reference: '101'}}}}})
        );
        const identityId = uuidv4();
        const reference = uuidv4();

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveStatement(identityId, reference, _ => {
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
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {edges: [{source: 'i1', target: '101'}]}}}})
        );
        const source = uuidv4();

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveEdges(source, _ => {
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
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({
                data: {
                    retrieve: {
                        knowledge: {
                            edges: [{
                                source: 'i1',
                                target: '101',
                                type: '101'
                            }, {source: 'i1', target: '101', type: '102'}]
                        }
                    }
                }
            })
        );
        const source = uuidv4();
        let latestExpectedIndex = 100;

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveEdges(source, _ => {
                _.source();
                _.target();
                _.type();
            }, 10, 100);
            observable.subscribe(e => {
                expect(e.source !== undefined).toBeTruthy();
                expect(e.target !== undefined).toBeTruthy();
                latestExpectedIndex++;
                expect(e.type === '' + latestExpectedIndex).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve knowledge edge', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {edge: {source: 'i1', target: '101'}}}}})
        );
        const source = uuidv4();
        const target = uuidv4();

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
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {skills: [{tenantId: 'i1', reference: '101'}]}}}})
        );
        const tenantId = uuidv4();

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveSkills(tenantId, _ => {
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
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({
                data: {
                    retrieve: {
                        knowledge: {
                            skills: [{
                                tenantId: 'i1',
                                reference: '101',
                                qualifier: '101'
                            }, {tenantId: 'i1', reference: '101', qualifier: '102'}]
                        }
                    }
                }
            })
        );
        const tenantId = uuidv4();
        let latestExpectedIndex = 100;

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveSkills(tenantId, _ => {
                _.tenantId();
                _.reference();
                _.qualifier();
            }, 10, 100);
            observable.subscribe(e => {
                expect(e.tenantId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                latestExpectedIndex++;
                expect(e.qualifier === '' + latestExpectedIndex).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve skill', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {skill: {tenantId: 'i1', reference: '101'}}}}})
        );
        const tenantId = uuidv4();
        const reference = uuidv4();

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveSkill(tenantId, reference, _ => {
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
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {skillProvisions: [{tenantId: 'i1', reference: '101'}]}}}})
        );
        const tenantId = uuidv4();

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveSkillProvisions(tenantId, _ => {
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
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({
                data: {
                    retrieve: {
                        knowledge: {
                            skillProvisions: [{
                                tenantId: 'i1',
                                reference: '101',
                                qualifier: '101'
                            }, {tenantId: 'i1', reference: '101', qualifier: '102'}]
                        }
                    }
                }
            })
        );
        const tenantId = uuidv4();
        let latestExpectedIndex = 100;

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveSkillProvisions(tenantId, _ => {
                _.tenantId();
                _.reference();
                _.qualifier();
            }, 10, 100);
            observable.subscribe(e => {
                expect(e.tenantId !== undefined).toBeTruthy();
                expect(e.reference !== undefined).toBeTruthy();
                latestExpectedIndex++;
                expect(e.qualifier === '' + latestExpectedIndex).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve skillProvision', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {knowledge: {skillProvision: {tenantId: 'i1', reference: '101'}}}}})
        );
        const tenantId = uuidv4();
        const reference = uuidv4();

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveSkillProvision(tenantId, reference, _ => {
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

    test('test retrieve behaviourExecution', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({data: {retrieve: {experience: {behaviourExecution: {processInstanceId: 'i1', behaviourId: '101'}}}}})
        );
        const identityId = uuidv4();
        const processInstanceId = uuidv4();

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveBehaviourExecution(identityId, processInstanceId, _ => {
                _.processInstanceId();
                _.behaviourId();
            });
            observable.subscribe(e => {
                expect(e.processInstanceId !== undefined).toBeTruthy();
                expect(e.behaviourId !== undefined).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });

    test('test retrieve paginated behaviourExecutions', () => {
        const gaiaRef = Mock.gaiaRef(() =>
            JSON.stringify({
                data: {
                    retrieve: {
                        experience: {
                            behaviourExecutions: [{
                                processInstanceId: 'i1',
                                behaviourId: '101',
                                state: '101'
                            }, {processInstanceId: 'i1', behaviourId: '101', state: '102'}]
                        }
                    }
                }
            })
        );
        const identityId = uuidv4();
        let latestExpectedIndex = 100;

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.retrieveBehaviourExecutions(identityId, _ => {
                _.processInstanceId();
                _.behaviourId();
                _.state();
            }, 10, 100, null, null);
            observable.subscribe(e => {
                expect(e.processInstanceId !== undefined).toBeTruthy();
                expect(e.behaviourId !== undefined).toBeTruthy();
                latestExpectedIndex++;
                expect(e.state === '' + latestExpectedIndex).toBeTruthy();
                resolve(e);
            }, reject);
        });
    });


});
