from enum import Enum


class EdgeType(Enum):
    TenantIdentity = 1

    Supervisor = 2

    IdentityNerSkill = 3

    IdentityIntentSkill = 4

    IdentityErrorStatement = 5

    IdentityUnknownBehaviour = 6

    IdentityDiscontinuableStatement = 7

    IdentityWelcomeBehaviour = 8

    UserRole = 9

    ApiKeyRole = 10

