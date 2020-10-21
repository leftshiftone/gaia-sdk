import {CreateIntentImpulse, DeleteIntentImpulse, UpdateIntentImpulse} from '../graphql';
import {v4 as uuid} from 'uuid';
import {CreatePromptImpulse} from '../graphql/request/input/CreatePromptImpulse';
import {UpdatePromptImpulse} from '../graphql/request/input/UpdatePromptImpulse';
import {DeletePromptImpulse} from '../graphql/request/input/DeletePromptImpulse';
import {DeleteStatementImpulse} from '../graphql/request/input/DeleteStatementImpulse';
import {UpdateStatementImpulse} from '../graphql/request/input/UpdateStatementImpulse';
import {CreateStatementImpulse} from '../graphql/request/input/CreateStatementImpulse';
import {DeleteSkillImpulse} from '../graphql/request/input/DeleteSkillImpulse';
import {UpdateSkillImpulse} from '../graphql/request/input/UpdateSkillImpulse';
import {CreateSkillImpulse} from '../graphql/request/input/CreateSkillImpulse';
import {DeleteSkillProvisionImpulse} from '../graphql/request/input/DeleteSkillProvisionImpulse';
import {UpdateSkillProvisionImpulse} from '../graphql/request/input/UpdateSkillProvisionImpulse';
import {CreateSkillProvisionImpulse} from '../graphql/request/input/CreateSkillProvisionImpulse';
import {CreateFulfilmentImpulse} from '../graphql/request/input/CreateFulfilmentImpulse';
import {UpdateFulfilmentImpulse} from '../graphql/request/input/UpdateFulfilmentImpulse';
import {DeleteFulfilmentImpulse} from '../graphql/request/input/DeleteFulfilmentImpulse';
import {CreateBehaviourImpulse} from '../graphql/request/input/CreateBehaviourImpulse';
import {UpdateBehaviourImpulse} from '../graphql/request/input/UpdateBehaviourImpulse';
import {DeleteBehaviourImpulse} from '../graphql/request/input/DeleteBehaviourImpulse';
import {CreateCodeImpulse} from '../graphql/request/input/CreateCodeImpulse';
import {UpdateCodeImpulse} from '../graphql/request/input/UpdateCodeImpulse';
import {DeleteCodeImpulse} from '../graphql/request/input/DeleteCodeImpulse';
import {CreateEdgeImpulse} from '../graphql/request/input/CreateEdgeImpulse';
import {DeleteEdgeImpulse} from '../graphql/request/input/DeleteEdgeImpulse';
import {CreateIdentityImpulse} from '../graphql/request/input/CreateIdentityImpulse';
import {UpdateIdentityImpulse} from '../graphql/request/input/UpdateIdentityImpulse';
import {DeleteIdentityImpulse} from '../graphql/request/input/DeleteIdentityImpulse';
import {CreateTenantImpulse} from '../graphql/request/input/CreateTenantImpulse';
import {UpdateTenantImpulse} from '../graphql/request/input/UpdateTenantImpulse';
import {DeleteTenantImpulse} from '../graphql/request/input/DeleteTenantImpulse';
import {UpdateUserImpulse} from '../graphql/request/input/UpdateUserImpulse';
import {CreateUserImpulse} from '../graphql/request/input/CreateUserImpulse';
import {DeleteUserImpulse} from '../graphql/request/input/DeleteUserImpulse';
import {Mock} from '../mock/mock';

describe('perception tests:', () => {

    test('test preserve create identity', () => {
        const gaiaRef = mockCreate({identities: [{id: 'asdf'}]});
        const impulse = new CreateIdentityImpulse('');

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveCreateIdentities(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve update identity', () => {
        const gaiaRef = mockUpdate({identities: [{id: 'asdf'}]});
        const impulse = new UpdateIdentityImpulse(uuid(), '');

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveUpdateIdentities(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve delete identity', () => {
        const gaiaRef = mockDelete({identities: [{id: 'asdf'}]});
        const impulse = new DeleteIdentityImpulse(uuid());

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveDeleteIdentities(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve create user', () => {
        const gaiaRef = mockCreate({users: [{id: 'asdf'}]});
        const impulse = new CreateUserImpulse('someUsername', 'somePassword', false, [], [], [], []);

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveCreateUsers(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve update user', () => {
        const gaiaRef = mockUpdate({users: [{id: 'asdf'}]});
        const impulse = new UpdateUserImpulse(uuid(), 'someUsername', 'password', false, [], [], [], []);

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveUpdateUsers(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve delete user', () => {
        const gaiaRef = mockDelete({users: [{id: 'asdf'}]});
        const impulse = new DeleteUserImpulse(uuid());

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveDeleteUsers(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve create tenant', () => {
        const gaiaRef = mockCreate({tenants: [{id: 'asdf'}]});
        const impulse = new CreateTenantImpulse('', [], []);

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveCreateTenants(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve update tenant', () => {
        const gaiaRef = mockUpdate({tenants: [{id: 'asdf'}]});
        const impulse = new UpdateTenantImpulse(uuid(), '', [], []);

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveUpdateTenants(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve delete tenant', () => {
        const gaiaRef = mockDelete({tenants: [{id: 'asdf'}]});
        const impulse = new DeleteTenantImpulse(uuid());

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveDeleteTenants(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve create intent', () => {
        const gaiaRef = mockCreate({intents: [{id: 'asdf'}]});
        const impulse = new CreateIntentImpulse(uuid(), '', '', {}, []);

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveCreateIntents(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve update intent', () => {
        const gaiaRef = mockUpdate({intents: [{id: 'asdf'}]});
        const impulse = new UpdateIntentImpulse(uuid(), uuid(), '', '', {}, []);

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveUpdateIntents(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve delete intent', () => {
        const gaiaRef = mockDelete({intents: [{id: 'asdf'}]});
        const impulse = new DeleteIntentImpulse(uuid(), uuid());

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveDeleteIntents(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve create prompt', () => {
        const gaiaRef = mockCreate({prompts: [{id: 'asdf'}]});
        const impulse = new CreatePromptImpulse(uuid(), '', '', {}, []);

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveCreatePrompts(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve update prompt', () => {
        const gaiaRef = mockUpdate({prompts: [{id: 'asdf'}]});
        const impulse = new UpdatePromptImpulse(uuid(), uuid(), '', '', {}, []);

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveUpdatePrompts(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve delete prompt', () => {
        const gaiaRef = mockDelete({prompts: [{id: 'asdf'}]});
        const impulse = new DeletePromptImpulse(uuid(), uuid());

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveDeletePrompts(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve create statement', () => {
        const gaiaRef = mockCreate({statements: [{id: 'asdf'}]});
        const impulse = new CreateStatementImpulse(uuid(), '', '', {}, []);

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveCreateStatements(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve update statement', () => {
        const gaiaRef = mockUpdate({statements: [{id: 'asdf'}]});
        const impulse = new UpdateStatementImpulse(uuid(), uuid(), '', '', {}, []);

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveUpdateStatements(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve delete statement', () => {
        const gaiaRef = mockDelete({statements: [{id: 'asdf'}]});
        const impulse = new DeleteStatementImpulse(uuid(), uuid());

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveDeleteStatements(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve create fulfilment', () => {
        const gaiaRef = mockCreate({fulfilments: [{id: 'asdf'}]});
        const impulse = new CreateFulfilmentImpulse(uuid(), '', '', {}, []);

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveCreateFulfilments(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve update fulfilment', () => {
        const gaiaRef = mockUpdate({fulfilments: [{id: 'asdf'}]});
        const impulse = new UpdateFulfilmentImpulse(uuid(), uuid(), '', '', {}, []);

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveUpdateFulfilments(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve delete fulfilment', () => {
        const gaiaRef = mockDelete({fulfilments: [{id: 'asdf'}]});
        const impulse = new DeleteFulfilmentImpulse(uuid(), uuid());

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveDeleteFulfilments(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve create behaviour', () => {
        const gaiaRef = mockCreate({behaviours: [{id: 'asdf'}]});
        const impulse = new CreateBehaviourImpulse(uuid(), '', '', '', []);

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveCreateBehaviours(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve update behaviour', () => {
        const gaiaRef = mockUpdate({behaviours: [{id: 'asdf'}]});
        const impulse = new UpdateBehaviourImpulse(uuid(), uuid(), '', '', '', []);

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveUpdateBehaviours(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve delete behaviour', () => {
        const gaiaRef = mockDelete({behaviours: [{id: 'asdf'}]});
        const impulse = new DeleteBehaviourImpulse(uuid(), uuid());

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveDeleteBehaviours(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve create code', () => {
        const gaiaRef = mockCreate({codes: [{id: 'asdf'}]});
        const impulse = new CreateCodeImpulse(uuid(), '', '', {}, '', []);

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveCreateCodes(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve update code', () => {
        const gaiaRef = mockUpdate({codes: [{id: 'asdf'}]});
        const impulse = new UpdateCodeImpulse(uuid(), uuid(), '', '', {}, '', []);

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveUpdateCodes(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve delete code', () => {
        const gaiaRef = mockDelete({codes: [{id: 'asdf'}]});
        const impulse = new DeleteCodeImpulse(uuid(), uuid());

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveDeleteCodes(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve create edge', () => {
        const gaiaRef = mockCreate({edges: [{id: 'asdf'}]});
        const impulse = new CreateEdgeImpulse(uuid(), uuid(), 'sometype', 2.7);

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveCreateEdges(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve delete edge', () => {
        const gaiaRef = mockDelete({edges: [{id: 'asdf'}]});
        const impulse = new DeleteEdgeImpulse(uuid(), uuid());

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveDeleteEdges(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve create skill', () => {
        const gaiaRef = mockCreate({skills: [{id: 'asdf'}]});
        const impulse = new CreateSkillImpulse(uuid(), '', '', [], '');

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveCreateSkills(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve update skill', () => {
        const gaiaRef = mockUpdate({skills: [{id: 'asdf'}]});
        const impulse = new UpdateSkillImpulse(uuid(), uuid(), '', '', [], '');

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveUpdateSkills(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve delete skill', () => {
        const gaiaRef = mockDelete({skills: [{id: 'asdf'}]});
        const impulse = new DeleteSkillImpulse(uuid(), uuid());

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveDeleteSkills(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve create skillProvision', () => {
        const gaiaRef = mockCreate({skillProvisions: [{id: 'asdf'}]});
        const impulse = new CreateSkillProvisionImpulse(uuid(), '', '', [], '', '', 100, 100, 1, true, 30, {});

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveCreateSkillProvisions(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve update skillProvision', () => {
        const gaiaRef = mockUpdate({skillProvisions: [{id: 'asdf'}]});
        const impulse = new UpdateSkillProvisionImpulse(uuid(), uuid(), '', '', [], '', '', 100, 100, 1, true, 30, {});

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveUpdateSkillProvisions(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });

    test('test preserve delete skillProvision', () => {
        const gaiaRef = mockDelete({skillProvisions: [{id: 'asdf'}]});
        const impulse = new DeleteSkillProvisionImpulse(uuid(), uuid());

        return new Promise((resolve, reject) => {
            const observable = gaiaRef.preserveDeleteSkillProvisions(impulse);
            observable.subscribe(e => {
                expect(e.id !== undefined).toBeTruthy();
                resolve(e);
            },                   reject);
        });
    });
});

function mockPreserve(query: object) {
    return Mock.gaiaRef(() => JSON.stringify({data: {preserve: query}}));
}

function mockCreate(query: object) {
    return mockPreserve({create: query});
}

function mockUpdate(query: object) {
    return mockPreserve({update: query});
}

function mockDelete(query: object) {
    return mockPreserve({delete: query});
}
