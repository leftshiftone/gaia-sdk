export class IdentityImportImpulse {
    private uri: string;
    private tenantId: string;
    private identityId: string;
    private identityName: string;
    private override: boolean;

    constructor(uri: string, tenantId: string, identityId: string, identityName: string, override: boolean) {
        this.uri = uri;
        this.tenantId = tenantId;
        this.identityId = identityId;
        this.identityName = identityName;
        this.override = override;
    }
}
