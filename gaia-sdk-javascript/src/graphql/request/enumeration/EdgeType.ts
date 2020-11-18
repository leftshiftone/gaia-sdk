export enum EdgeType {
    TenantIdentity, 
    Supervisor, 
    IdentityNerSkill, 
    IdentityErrorStatement, 
    IdentityUnknownBehaviour, 
    IdentityDiscontinuableStatement, 
    IdentityWelcomeBehaviour, 
    IdentityIntentDetectionSkill, 
    IdentityDisambiguationBehaviour, 
    UserRole, 
    ApiKeyRole
}


export function getEdgeTypeEnumClass(enumValue: EdgeType): any {
    switch (enumValue) {
        case EdgeType.TenantIdentity:
            return new TenantIdentity();
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
        case EdgeType.IdentityIntentDetectionSkill:
            return new IdentityIntentDetectionSkill();
        case EdgeType.IdentityDisambiguationBehaviour:
            return new IdentityDisambiguationBehaviour();
        case EdgeType.UserRole:
            return new UserRole();
        case EdgeType.ApiKeyRole:
            return new ApiKeyRole();
    }
}

export class TenantIdentity {
    public _typeName = "EdgeType";
    public _isWrapper = true;
    public _wrappedValue = "TenantIdentity";

    constructor() {}
}
export class Supervisor {
    public _typeName = "EdgeType";
    public _isWrapper = true;
    public _wrappedValue = "Supervisor";

    constructor() {}
}
export class IdentityNerSkill {
    public _typeName = "EdgeType";
    public _isWrapper = true;
    public _wrappedValue = "IdentityNerSkill";

    constructor() {}
}
export class IdentityErrorStatement {
    public _typeName = "EdgeType";
    public _isWrapper = true;
    public _wrappedValue = "IdentityErrorStatement";

    constructor() {}
}
export class IdentityUnknownBehaviour {
    public _typeName = "EdgeType";
    public _isWrapper = true;
    public _wrappedValue = "IdentityUnknownBehaviour";

    constructor() {}
}
export class IdentityDiscontinuableStatement {
    public _typeName = "EdgeType";
    public _isWrapper = true;
    public _wrappedValue = "IdentityDiscontinuableStatement";

    constructor() {}
}
export class IdentityWelcomeBehaviour {
    public _typeName = "EdgeType";
    public _isWrapper = true;
    public _wrappedValue = "IdentityWelcomeBehaviour";

    constructor() {}
}
export class IdentityIntentDetectionSkill {
    public _typeName = "EdgeType";
    public _isWrapper = true;
    public _wrappedValue = "IdentityIntentDetectionSkill";

    constructor() {}
}
export class IdentityDisambiguationBehaviour {
    public _typeName = "EdgeType";
    public _isWrapper = true;
    public _wrappedValue = "IdentityDisambiguationBehaviour";

    constructor() {}
}
export class UserRole {
    public _typeName = "EdgeType";
    public _isWrapper = true;
    public _wrappedValue = "UserRole";

    constructor() {}
}
export class ApiKeyRole {
    public _typeName = "EdgeType";
    public _isWrapper = true;
    public _wrappedValue = "ApiKeyRole";

    constructor() {}
}

