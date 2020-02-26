export interface HeimdallResponse {}
export interface HeimdallMutationResponse extends HeimdallResponse {
    data?:MutationData;
    logs?:Record<string, Array<string>>
    errors?:Array<string>;
}
export interface MutationData {    
    impulse?:MutationImpulse;
    impulseContext?:MutationImpulseContext;
    impulseNotification?:MutationImpulseNotification;
    impulseLog?:MutationImpulseLog;
}
export interface MutationImpulse {
    impulsePayload?:Uint8Array;
    impulseHeader?:MutationImpulseHeader;
}

export interface MutationImpulseHeader {
    identityId?:string;
    clientId?:string;
    userId?:string;
}
export interface MutationImpulseContext {
    impulseContextPayload?:Uint8Array;
    impulseContextHeader?:MutationImpulseContextHeader;
}

export interface MutationImpulseContextHeader {
    identityId?:string;
    clientId?:string;
    userId?:string;
}
export interface MutationImpulseNotification {
    impulseNotificationPayload?:Uint8Array;
    impulseNotificationHeader?:MutationImpulseNotificationHeader;
}

export interface MutationImpulseNotificationHeader {
    identityId?:string;
    clientId?:string;
    userId?:string;
}
export interface MutationImpulseLog {
    impulseLogPayload?:Uint8Array;
    impulseLogHeader?:MutationImpulseLogHeader;
}

export interface MutationImpulseLogHeader {
    identityId?:string;
    clientId?:string;
    userId?:string;
}
