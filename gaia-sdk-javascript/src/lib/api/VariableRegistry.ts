export default class VariableRegistry {
    private variables = {};
    private datatypes = Array<string>();
    private counters = {};

    public register(name:string, value:any) {
        if (this.counters[name] === undefined) {
            this.counters[name] = 0;
        }
        this.counters[name] = this.counters[name] + 1;
        const varName = name + this.counters[name];

        this.variables[varName] = value;
        this.datatypes.push("$" + varName + ":" + this.toType(value));

        return varName;
    }

    public getVariables = () => this.variables;
    public getDatatypes = () => this.datatypes;

    private toType(value:any):string {
        switch (typeof(value)) {
            case "string": return "String!";
            case "boolean": return "Boolean!";
            case "object":
                return this.objectName(value);
            default: return value;
        }
    }

    private objectName(obj: object) {
        // @ts-ignore
        const name = obj.name() + "!";
        if (name === undefined || name === null) {
            const fallBackName = obj.constructor.name + "!";
            if (fallBackName === undefined || fallBackName === null) {
                throw new Error(`Could not extract name from: ${obj}}`);
            }
        }
        return name;
    }

}

