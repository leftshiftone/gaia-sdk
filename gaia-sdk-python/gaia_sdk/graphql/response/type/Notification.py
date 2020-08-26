
from gaia_sdk.graphql.response.type.OnUpdated import OnUpdated
from gaia_sdk.graphql.response.type.OnDeleted import OnDeleted
from gaia_sdk.graphql.response.type.OnCreated import OnCreated

from dataclasses import dataclass
from typing import List
Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool
from gaia_sdk.graphql.request.enumeration.RuntimeState import RuntimeState
from gaia_sdk.graphql.request.enumeration.SkillState import SkillState
from gaia_sdk.graphql.request.enumeration.Order import Order
from gaia_sdk.graphql.request.enumeration.OrderByField import OrderByField
from gaia_sdk.graphql.request.enumeration.EdgeOrderByField import EdgeOrderByField

@dataclass
class Notification:
    dictionary: dict
    @property
    def on_created(self) -> OnCreated:
        return OnCreated(self.dictionary.get("onCreated"))
    @property
    def on_updated(self) -> OnUpdated:
        return OnUpdated(self.dictionary.get("onUpdated"))
    @property
    def on_deleted(self) -> OnDeleted:
        return OnDeleted(self.dictionary.get("onDeleted"))
