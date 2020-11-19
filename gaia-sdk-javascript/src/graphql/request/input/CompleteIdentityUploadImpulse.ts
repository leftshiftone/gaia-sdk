export class CompleteIdentityUploadImpulse {
    private uri: string;
    private tenantId: string;
    private identityId: string;
    private identityName: string;
    private uploadId: string;
    private chunks: Array<string>;
    private override: boolean;

    constructor(uri: string, tenantId: string, identityId: string, identityName: string, uploadId: string, chunks: Array<string>, override: boolean) {
        this.uri = uri;
        this.tenantId = tenantId;
        this.identityId = identityId;
        this.identityName = identityName;
        this.uploadId = uploadId;
        this.chunks = chunks;
        this.override = override;
    }
}
