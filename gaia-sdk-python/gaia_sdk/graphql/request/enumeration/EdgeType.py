from enum import Enum


class EdgeType(Enum):
    TenantIdentity = 1

    Supervisor = 2

    IdentityNerSkill = 3

    IdentityErrorStatement = 4

    IdentityUnknownBehaviour = 5

    IdentityDiscontinuableStatement = 6

    IdentityWelcomeBehaviour = 7

    UserRole = 8

    ApiKeyRole = 9

