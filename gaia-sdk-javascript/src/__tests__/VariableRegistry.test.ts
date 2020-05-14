import VariableRegistry from "../api/VariableRegistry";

const { v4: uuidv4 } = require('uuid');

describe("perception tests:", () => {

    test('a UUID variable is identified as type Uuid', () => {
        const registry = new VariableRegistry()
        const identityIdValue = uuidv4()
        const field = "identityId"
        registry.register(field, identityIdValue)
        const datatypes= registry.getDatatypes()
        expect(datatypes[0] == "$"+field+"1:Uuid").toBeTruthy();
    })

    test('a String variable is identified as type String', () => {
        const registry = new VariableRegistry()
        const value = "something"
        const field = "fieldName"
        registry.register(field, value)
        const datatypes= registry.getDatatypes()
        expect(datatypes[0] == "$"+field+"1:String").toBeTruthy();
    })

    test('a List of String variable is identified as list Strings', () => {
        const registry = new VariableRegistry()
        const listOfString = ["something","else"]
        const field = "fieldName"
        registry.register(field, listOfString)
        const datatypes= registry.getDatatypes()
        expect(datatypes[0] == "$"+field+"1:[String]").toBeTruthy();
    })



});
