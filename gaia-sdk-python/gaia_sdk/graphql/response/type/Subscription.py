
from gaia_sdk.graphql.response.type.Interaction import Interaction
from gaia_sdk.graphql.response.type.Introspection import Introspection
from gaia_sdk.graphql.response.type.Notification import Notification

from dataclasses import dataclass
from typing import List
Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
from gaia_sdk.graphql.request.enumeration.RuntimeState import RuntimeState
from gaia_sdk.graphql.request.enumeration.SkillState import SkillState

@dataclass
class Subscription:
    """
    the top level subscription type
    """
    dictionary: dict
    @property
    def interact(self) -> Interaction:
        return Interaction(self.dictionary.get("interact"))
    @property
    def notify(self) -> Notification:
        return Notification(self.dictionary.get("notify"))
    """
    Container element for all introspect sensor fields
    """
    @property
    def introspect(self) -> Introspection:
        return Introspection(self.dictionary.get("introspect"))
