import VariableRegistry from '../api/VariableRegistry';
import {CreateIdentityImpulse} from '../graphql/request/input/CreateIdentityImpulse';

const { v4: uuidv4 } = require('uuid');

describe('perception tests:', () => {

    beforeEach(() => {
        jest.setTimeout(10000);
    });

    test('a UUID variable is identified as type Uuid', () => {
        const registry = new VariableRegistry();
        const identityIdValue = uuidv4();
        const field = 'identityId';
        registry.register(field, identityIdValue);
        const datatypes = registry.getDatatypes();
        expect(datatypes[0]).toEqual('$' + field + '1:Uuid!');
    });

    test('a String variable is identified as type String', () => {
        const registry = new VariableRegistry();
        const value = 'something';
        const field = 'fieldName';
        registry.register(field, value);
        const datatypes = registry.getDatatypes();
        expect(datatypes[0]).toEqual('$' + field + '1:String!');
    });

    test('a List of String variable is identified as list Strings', () => {
        const registry = new VariableRegistry();
        const listOfString = ['something', 'else'];
        const field = 'fieldName';
        registry.register(field, listOfString);
        const datatypes = registry.getDatatypes();
        expect(datatypes[0] == '$' + field + '1:[String]').toBeTruthy();
    });

    test('a List of CreateIdentityImpulse variable is identified as list CreateIdentityImpulse', () => {
        const registry = new VariableRegistry();
        const list = [new CreateIdentityImpulse('00000000-0000-0000-0000-000000000001', 'qualifier1'), new CreateIdentityImpulse('00000000-0000-0000-0000-000000000002', 'qualifier2')];
        const field = 'fieldName';
        registry.register(field, list);
        const datatypes = registry.getDatatypes();
        expect(datatypes[0]).toEqual('$' + field + '1:[CreateIdentityImpulse]');
    });

    test('a single CreateIdentityImpulse variable is identified as CreateIdentityImpulse', () => {
        const registry = new VariableRegistry();
        const field = 'fieldName';
        registry.register(field, new CreateIdentityImpulse('00000000-0000-0000-0000-000000000001','qualifier1'));
        const datatypes = registry.getDatatypes();
        expect(datatypes[0]).toEqual('$' + field + '1:CreateIdentityImpulse!');
    });

    test('an empty array cannot be registered', () => {
        expect(() => {
            const registry = new VariableRegistry();
            const field = 'fieldName';
            registry.register(field, []);
        }).toThrow(Error);
    });

    test('a null value will be registered as null without variable', () => {
        const registry = new VariableRegistry();
        const field = 'fieldName';
        const variableName = registry.register(field, null);
        const datatypes = registry.getDatatypes();
        expect(variableName).toEqual('null');
        expect(datatypes[0]).toEqual(undefined);
    });

    test('an undefined value will be registered as null without variable', () => {
        const registry = new VariableRegistry();
        const field = 'fieldName';
        const variableName = registry.register(field, undefined);
        const datatypes = registry.getDatatypes();
        expect(variableName).toEqual('null');
        expect(datatypes[0]).toEqual(undefined);
    });

});
