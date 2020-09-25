import validator from 'validator';

export default class VariableRegistry {
    private variables = {};
    private datatypes = Array<string>();
    private counters = {};

    public register(name:string, value:any) {
        if (value === undefined || value == null) {
            return "null"
        }

        if (this.counters[name] === undefined) {
            this.counters[name] = 0;
        }
        this.counters[name] = this.counters[name] + 1;
        const varName = name + this.counters[name];

        var clonedValue = JSON.parse(JSON.stringify(value));
        if (Array.isArray(clonedValue)) {
            clonedValue.forEach(it => delete it._typeName);
        } else {
            delete clonedValue._typeName;
        }

        this.variables[varName] = clonedValue;
        this.datatypes.push("$" + varName + ":" + this.toType(value));

        return "$" + varName;
    }

    public getVariables = () => this.variables;
    public getDatatypes = () => this.datatypes;

    private toType(value:any):string {
        switch (typeof(value)) {
            case "string": return this.resolveStringType(value);
            case "boolean": return "Boolean!";
            case "number": return "Int!";
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
            if (Array.isArray(obj)) {
                return "[" + (obj[0]._typeName && obj[0]._typeName) + "]";
            }

            // @ts-ignore
            const fallback =  obj._typeName && obj._typeName + "!";
            if (fallback === null || fallback === undefined) throw new Error('Could not extract name');

            return fallback;
        }
    }

    private resolveStringType(obj: string) {
            if(validator.isUUID(obj)){
                return "Uuid";
            }
        return "String";
    }

}

