export enum OrderByField {
    id, 
    qualifier, 
    appendent, 
    createdAt, 
    updatedAt
}


export function getOrderByFieldEnumClass(enumValue: OrderByField): any {
    switch (enumValue) {
        case OrderByField.id:
            return new id();
        case OrderByField.qualifier:
            return new qualifier();
        case OrderByField.appendent:
            return new appendent();
        case OrderByField.createdAt:
            return new createdAt();
        case OrderByField.updatedAt:
            return new updatedAt();
    }
}

export class id {
    public _typeName = "OrderByField";
    public _isWrapper = true;
    public _wrappedValue = "id";

    constructor() {}
}
export class qualifier {
    public _typeName = "OrderByField";
    public _isWrapper = true;
    public _wrappedValue = "qualifier";

    constructor() {}
}
export class appendent {
    public _typeName = "OrderByField";
    public _isWrapper = true;
    public _wrappedValue = "appendent";

    constructor() {}
}
export class createdAt {
    public _typeName = "OrderByField";
    public _isWrapper = true;
    public _wrappedValue = "createdAt";

    constructor() {}
}
export class updatedAt {
    public _typeName = "OrderByField";
    public _isWrapper = true;
    public _wrappedValue = "updatedAt";

    constructor() {}
}

