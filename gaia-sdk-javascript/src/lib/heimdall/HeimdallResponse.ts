interface HeimdallResponse {}
export interface HeimdallMutationResponse extends HeimdallResponse {
    data?:MutationData;
    logs?:Record<string, Array<string>>
    errors?:Array<string>;
}
interface MutationData {    
    impulse?:MutationImpulse;
    impulseContext?:MutationImpulseContext;
    impulseNotification?:MutationImpulseNotification;
    impulseLog?:MutationImpulseLog;
}
interface MutationImpulse {
    impulsePayload?:Uint8Array;
    impulseHeader?:MutationImpulseHeader;
}

interface MutationImpulseHeader {
    impulsePayload?:Uint8Array;
    impulseHeader?:MutationImpulseHeader;
}
interface MutationImpulseContext {
    impulseContextPayload?:Uint8Array;
    impulseContextHeader?:MutationImpulseContextHeader;
}

interface MutationImpulseContextHeader {
    impulseContextPayload?:Uint8Array;
    impulseContextHeader?:MutationImpulseContextHeader;
}
interface MutationImpulseNotification {
    impulseNotificationPayload?:Uint8Array;
    impulseNotificationHeader?:MutationImpulseNotificationHeader;
}

interface MutationImpulseNotificationHeader {
    impulseNotificationPayload?:Uint8Array;
    impulseNotificationHeader?:MutationImpulseNotificationHeader;
}
interface MutationImpulseLog {
    impulseLogPayload?:Uint8Array;
    impulseLogHeader?:MutationImpulseLogHeader;
}

interface MutationImpulseLogHeader {
    impulseLogPayload?:Uint8Array;
    impulseLogHeader?:MutationImpulseLogHeader;
}
