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

        this.variables[varName] = JSON.parse(JSON.stringify(value));
        this.datatypes.push("$" + varName + ":" + this.toType(value));

        return varName;
    }

    public getVariables = () => this.variables;
    public getDatatypes = () => this.datatypes;

    private toType(value:any):string {
        console.log("Type");
        console.log(value);
        switch (typeof(value)) {
            case "string": return "String!";
            case "boolean": return "Boolean!";
            case "object":
                return this.objectName(value);
            default: return value;
        }
    }

    private objectName(obj: object) {
        try {
            // @ts-ignore
            return obj.name() + "!";
        } catch (e) {
            const fallback =  obj.constructor.name + "!";
            if (fallback === null || fallback === undefined) throw new Error('Could not extract name');
            return fallback;
        }
    }

}

