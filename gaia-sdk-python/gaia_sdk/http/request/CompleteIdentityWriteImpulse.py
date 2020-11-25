from typing import List


class CompleteIdentityWriteImpulse:
    uri: str
    tenant_id: str
    identity_id: str
    identity_name: str
    uploadId: str
    chunks: List[str]
    override: bool

    def __init__(self, uri: str, tenant_id: str, identity_id: str, identity_name: str,
                 upload_id: str, chunks: List[str], override: bool):
        self.uri = uri
        self.tenant_id = tenant_id
        self.identity_id = identity_id
        self.identity_name = identity_name
        self.uploadId = upload_id
        self.chunks = chunks
        self.override = override

    def __eq__(self, other):
        return self.uri == other.uri and self.tenant_id == other.tenant_id and self.identity_id == other.identity_id \
               and self.identity_name == other.identity_name and self.uploadId == other.uploadId \
               and self.chunks == other.chunks and self.override == other.override

    def __repr__(self):
        return {
            'uri': self.uri,
            'tenantId': self.tenant_id,
            'identityId': self.identity_id,
            'identityName': self.identity_name,
            'uploadId': self.uploadId,
            'chunks': self.chunks,
            'override': self.override
        }
