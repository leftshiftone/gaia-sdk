class HeimdallResponse:
    None
class HeimdallMutationResponse extends HeimdallResponse:
    data?:MutationData;
    logs?:Record<string, Array<string>>
    errors?:Array<string>;

class MutationData    
    def impulse(self) -> 'MutationImpulse':
        return self.impulse
    def impulseContext(self) -> 'MutationImpulseContext':
        return self.impulseContext
    def impulseNotification(self) -> 'MutationImpulseNotification':
        return self.impulseNotification
    def impulseLog(self) -> 'MutationImpulseLog':
        return self.impulseLog

class MutationImpulse:
    def impulsePayload(self) -> Uint8Array:
        return self.impulsePayload
    def impulseHeader(self) -> 'MutationImpulseHeader':
        return self.impulseHeader


class MutationImpulseHeader:
    def impulsePayload(self) -> Uint8Array:
        return self.impulsePayload
    def impulseHeader(self) -> 'MutationImpulseHeader':
        return self.impulseHeader

class MutationImpulseContext:
    def impulseContextPayload(self) -> Uint8Array:
        return self.impulseContextPayload
    def impulseContextHeader(self) -> 'MutationImpulseContextHeader':
        return self.impulseContextHeader


class MutationImpulseContextHeader:
    def impulseContextPayload(self) -> Uint8Array:
        return self.impulseContextPayload
    def impulseContextHeader(self) -> 'MutationImpulseContextHeader':
        return self.impulseContextHeader

class MutationImpulseNotification:
    def impulseNotificationPayload(self) -> Uint8Array:
        return self.impulseNotificationPayload
    def impulseNotificationHeader(self) -> 'MutationImpulseNotificationHeader':
        return self.impulseNotificationHeader


class MutationImpulseNotificationHeader:
    def impulseNotificationPayload(self) -> Uint8Array:
        return self.impulseNotificationPayload
    def impulseNotificationHeader(self) -> 'MutationImpulseNotificationHeader':
        return self.impulseNotificationHeader

class MutationImpulseLog:
    def impulseLogPayload(self) -> Uint8Array:
        return self.impulseLogPayload
    def impulseLogHeader(self) -> 'MutationImpulseLogHeader':
        return self.impulseLogHeader


class MutationImpulseLogHeader:
    def impulseLogPayload(self) -> Uint8Array:
        return self.impulseLogPayload
    def impulseLogHeader(self) -> 'MutationImpulseLogHeader':
        return self.impulseLogHeader

