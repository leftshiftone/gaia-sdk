
from graphql.response.type.OnUpdated import OnUpdated
from graphql.response.type.OnDeleted import OnDeleted
from graphql.response.type.OnCreated import OnCreated


class Notification:
    def onCreated(self) -> OnCreated:
        return self.onCreated
    def onUpdated(self) -> OnUpdated:
        return self.onUpdated
    def onDeleted(self) -> OnDeleted:
        return self.onDeleted
