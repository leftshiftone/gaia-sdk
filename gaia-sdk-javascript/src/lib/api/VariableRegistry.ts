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
        this.datatypes.push("$" + varName + ":" + this.toType(typeof(value)));

        return varName;
    }

    public getVariables = () => this.variables;
    public getDatatypes = () => this.datatypes;

    private toType(value:string):string {
        switch (value) {
            case "string": return "String!";
            default: return value;
        }
    }

}

