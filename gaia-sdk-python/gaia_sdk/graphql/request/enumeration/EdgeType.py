from enum import Enum


class EdgeType(Enum):
    Supervisor = 1

    IdentityNerSkill = 2

    IdentityErrorStatement = 3

    IdentityUnknownBehaviour = 4

    IdentityDiscontinuableStatement = 5

    IdentityWelcomeBehaviour = 6

