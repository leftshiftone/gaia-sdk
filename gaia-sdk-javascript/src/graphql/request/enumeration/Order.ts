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
    public _typeName = "ASC";
    constructor() {}
}
export class DESC {
    public _typeName = "DESC";
    constructor() {}
}

