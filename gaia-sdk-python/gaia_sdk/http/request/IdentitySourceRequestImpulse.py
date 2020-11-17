class IdentitySourceRequestImpulse:
    id: str

    def __init__(self, identity_id: str):
        self.identity_id = identity_id

    def __eq__(self, other):
        return self.identity_id == other.identity_id

    def __repr__(self):
        return {'identityId': self.identity_id}
