

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField


class UpdateIntentImpulse():
    """
    The specification to update an intent instance
    """
    identityId: str
    reference: str
    qualifier: str
    appendent: str
    utterance: dict
    labelList: List[str]
    version: str

    def __init__(self, identityId: str, reference: str, qualifier: str, appendent: str, utterance: dict, labelList: List[str], version: str):
        self.identityId = identityId
        self.reference = reference
        self.qualifier = qualifier
        self.appendent = appendent
        self.utterance = utterance
        self.labelList = labelList
        self.version = version

    def __eq__(self, other):
        return self.identityId == other.identityId and self.reference == other.reference and self.qualifier == other.qualifier and self.appendent == other.appendent and self.utterance == other.utterance and self.labelList == other.labelList and self.version == other.version

    def __repr__(self):
        return {'identityId': self.identityId, 'reference': self.reference, 'qualifier': self.qualifier, 'appendent': self.appendent, 'utterance': self.utterance, 'labelList': self.labelList, 'version': self.version}
