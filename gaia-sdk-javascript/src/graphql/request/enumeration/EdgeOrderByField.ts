export enum EdgeOrderByField {
    label, 
    createdAt, 
    updatedAt
}


export function getEdgeOrderByFieldEnumClass(enumValue: EdgeOrderByField): any {
    switch (enumValue) {
        case EdgeOrderByField.label:
            return new label();
        case EdgeOrderByField.createdAt:
            return new createdAt();
        case EdgeOrderByField.updatedAt:
            return new updatedAt();
    }
}

export class label {
    public _typeName = "EdgeOrderByField";
    public _isWrapper = true;
    public _wrappedValue = "label";

    constructor() {}
}
export class createdAt {
    public _typeName = "EdgeOrderByField";
    public _isWrapper = true;
    public _wrappedValue = "createdAt";

    constructor() {}
}
export class updatedAt {
    public _typeName = "EdgeOrderByField";
    public _isWrapper = true;
    public _wrappedValue = "updatedAt";

    constructor() {}
}

