from enum import Enum


class EdgeType(Enum):
    TenantIdentity = 1

    Supervisor = 2

    IdentityNerSkill = 3

    IdentityErrorStatement = 4

    IdentityUnknownBehaviour = 5

    IdentityDiscontinuableStatement = 6

    IdentityWelcomeBehaviour = 7

    IdentityIntentDetectionSkill = 8

    IdentityDisambiguationBehaviour = 9

    UserRole = 10

    ApiKeyRole = 11

