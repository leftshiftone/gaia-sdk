export enum EdgeType {
    Supervisor, 
    IdentityNerSkill, 
    IdentityErrorStatement, 
    IdentityUnknownBehaviour, 
    IdentityDiscontinuableStatement, 
    IdentityWelcomeBehaviour
}


export function getEdgeTypeEnumClass(enumValue: EdgeType): any {
    switch (enumValue) {
        case EdgeType.Supervisor:
            return new Supervisor();
        case EdgeType.IdentityNerSkill:
            return new IdentityNerSkill();
        case EdgeType.IdentityErrorStatement:
            return new IdentityErrorStatement();
        case EdgeType.IdentityUnknownBehaviour:
            return new IdentityUnknownBehaviour();
        case EdgeType.IdentityDiscontinuableStatement:
            return new IdentityDiscontinuableStatement();
        case EdgeType.IdentityWelcomeBehaviour:
            return new IdentityWelcomeBehaviour();
    }
}

export class Supervisor {
    public _typeName = "Supervisor";
    constructor() {}
}
export class IdentityNerSkill {
    public _typeName = "IdentityNerSkill";
    constructor() {}
}
export class IdentityErrorStatement {
    public _typeName = "IdentityErrorStatement";
    constructor() {}
}
export class IdentityUnknownBehaviour {
    public _typeName = "IdentityUnknownBehaviour";
    constructor() {}
}
export class IdentityDiscontinuableStatement {
    public _typeName = "IdentityDiscontinuableStatement";
    constructor() {}
}
export class IdentityWelcomeBehaviour {
    public _typeName = "IdentityWelcomeBehaviour";
    constructor() {}
}

