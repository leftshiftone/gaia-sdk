
from gaia_sdk.graphql.response.type.OnCreated import OnCreated
from gaia_sdk.graphql.response.type.OnDeleted import OnDeleted
from gaia_sdk.graphql.response.type.OnUpdated import OnUpdated

Uuid = str
String = str
ISO8601 = str
Struct = dict
Float = float
Int = int
Boolean = bool


class Notification:
    dictionary: dict

    def __init__(self, dictionary: dict):
        self.dictionary = dictionary

    def __eq__(self, other):
        if type(other) is type(self):
            return self.dictionary == other.dictionary
        return False

    def __repr__(self):
        return {'dictionary': self.dictionary}

    @property
    def on_created(self) -> OnCreated:
        return OnCreated(self.dictionary.get("onCreated"))
    @property
    def on_updated(self) -> OnUpdated:
        return OnUpdated(self.dictionary.get("onUpdated"))
    @property
    def on_deleted(self) -> OnDeleted:
        return OnDeleted(self.dictionary.get("onDeleted"))
