export class InitBinaryWriteImpulse {
    private uri: string;
    private override: boolean;

    constructor(uri: string, override: boolean) {
        this.uri = uri;
        this.override = override;
    }
}
