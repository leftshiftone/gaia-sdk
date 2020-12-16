from typing import List


class IdentityImportImpulse:
    uri: str
    tenant_id: str
    identity_id: str
    identity_name: str
    override: bool

    def __init__(self, uri: str, tenant_id: str, identity_id: str, identity_name: str, override: bool):
        self.uri = uri
        self.tenant_id = tenant_id
        self.identity_id = identity_id
        self.identity_name = identity_name
        self.override = override

    def __eq__(self, other):
        return self.uri == other.uri and self.tenant_id == other.tenant_id and self.identity_id == other.identity_id \
               and self.identity_name == other.identity_name and self.override == other.override

    def __repr__(self):
        return {
            'uri': self.uri,
            'tenantId': self.tenant_id,
            'identityId': self.identity_id,
            'identityName': self.identity_name,
            'override': self.override
        }
