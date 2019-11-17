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
    impulsePayload?:Uint8Array;
    impulseHeader?:MutationImpulseHeader;
}
export interface MutationImpulseContext {
    impulseContextPayload?:Uint8Array;
    impulseContextHeader?:MutationImpulseContextHeader;
}

export interface MutationImpulseContextHeader {
    impulseContextPayload?:Uint8Array;
    impulseContextHeader?:MutationImpulseContextHeader;
}
export interface MutationImpulseNotification {
    impulseNotificationPayload?:Uint8Array;
    impulseNotificationHeader?:MutationImpulseNotificationHeader;
}

export interface MutationImpulseNotificationHeader {
    impulseNotificationPayload?:Uint8Array;
    impulseNotificationHeader?:MutationImpulseNotificationHeader;
}
export interface MutationImpulseLog {
    impulseLogPayload?:Uint8Array;
    impulseLogHeader?:MutationImpulseLogHeader;
}

export interface MutationImpulseLogHeader {
    impulseLogPayload?:Uint8Array;
    impulseLogHeader?:MutationImpulseLogHeader;
}
