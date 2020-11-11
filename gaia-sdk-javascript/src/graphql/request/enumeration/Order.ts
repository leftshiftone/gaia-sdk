export enum Order {
    ASC, 
    DESC
}


export function getOrderEnumClass(enumValue: Order): any {
    switch (enumValue) {
        case Order.ASC:
            return new ASC();
        case Order.DESC:
            return new DESC();
    }
}

export class ASC {
    public _typeName = "Order";
    public _isWrapper = true;
    public _wrappedValue = "ASC";

    constructor() {}
}
export class DESC {
    public _typeName = "Order";
    public _isWrapper = true;
    public _wrappedValue = "DESC";

    constructor() {}
}

