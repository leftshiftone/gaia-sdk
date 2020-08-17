
from gaia_sdk.graphql.request.type.Fulfilment import Fulfilment
from gaia_sdk.graphql.request.type.Behaviour import Behaviour
from gaia_sdk.graphql.request.type.Statement import Statement
from gaia_sdk.graphql.request.type.Intent import Intent
from gaia_sdk.graphql.request.type.Prompt import Prompt
from gaia_sdk.graphql.request.type.Identity import Identity
from gaia_sdk.graphql.request.type.Code import Code
from gaia_sdk.graphql.request.type.Edge import Edge

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class Knowledge(list):

    def identities(self, limit: int, offset: int, orderBy: OrderByField, order: Order, config: Callable[['Identity'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("limit", limit)
            name2 = registry.register("offset", offset)
            name3 = registry.register("orderBy", orderBy)
            name4 = registry.register("order", order)
            entity = Identity()
            config(entity)
            return f'identities(limit:{name1}, offset:{name2}, orderBy:{name3}, order:{name4})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def identity(self, identityId: str, config: Callable[['Identity'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("identityId", identityId)
            entity = Identity()
            config(entity)
            return f'identity(identityId:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def intents(self, identityId: str, limit: int, offset: int, orderBy: OrderByField, order: Order, config: Callable[['Intent'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("identityId", identityId)
            name2 = registry.register("limit", limit)
            name3 = registry.register("offset", offset)
            name4 = registry.register("orderBy", orderBy)
            name5 = registry.register("order", order)
            entity = Intent()
            config(entity)
            return f'intents(identityId:{name1}, limit:{name2}, offset:{name3}, orderBy:{name4}, order:{name5})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def intent(self, identityId: str, reference: str, config: Callable[['Intent'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("identityId", identityId)
            name2 = registry.register("reference", reference)
            entity = Intent()
            config(entity)
            return f'intent(identityId:{name1}, reference:{name2})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def prompts(self, identityId: str, limit: int, offset: int, orderBy: OrderByField, order: Order, config: Callable[['Prompt'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("identityId", identityId)
            name2 = registry.register("limit", limit)
            name3 = registry.register("offset", offset)
            name4 = registry.register("orderBy", orderBy)
            name5 = registry.register("order", order)
            entity = Prompt()
            config(entity)
            return f'prompts(identityId:{name1}, limit:{name2}, offset:{name3}, orderBy:{name4}, order:{name5})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def prompt(self, identityId: str, reference: str, config: Callable[['Prompt'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("identityId", identityId)
            name2 = registry.register("reference", reference)
            entity = Prompt()
            config(entity)
            return f'prompt(identityId:{name1}, reference:{name2})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def fulfilments(self, identityId: str, limit: int, offset: int, orderBy: OrderByField, order: Order, config: Callable[['Fulfilment'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("identityId", identityId)
            name2 = registry.register("limit", limit)
            name3 = registry.register("offset", offset)
            name4 = registry.register("orderBy", orderBy)
            name5 = registry.register("order", order)
            entity = Fulfilment()
            config(entity)
            return f'fulfilments(identityId:{name1}, limit:{name2}, offset:{name3}, orderBy:{name4}, order:{name5})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def fulfilment(self, identityId: str, reference: str, config: Callable[['Fulfilment'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("identityId", identityId)
            name2 = registry.register("reference", reference)
            entity = Fulfilment()
            config(entity)
            return f'fulfilment(identityId:{name1}, reference:{name2})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def statements(self, identityId: str, limit: int, offset: int, orderBy: OrderByField, order: Order, config: Callable[['Statement'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("identityId", identityId)
            name2 = registry.register("limit", limit)
            name3 = registry.register("offset", offset)
            name4 = registry.register("orderBy", orderBy)
            name5 = registry.register("order", order)
            entity = Statement()
            config(entity)
            return f'statements(identityId:{name1}, limit:{name2}, offset:{name3}, orderBy:{name4}, order:{name5})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def statement(self, identityId: str, reference: str, config: Callable[['Statement'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("identityId", identityId)
            name2 = registry.register("reference", reference)
            entity = Statement()
            config(entity)
            return f'statement(identityId:{name1}, reference:{name2})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def codes(self, identityId: str, limit: int, offset: int, orderBy: OrderByField, order: Order, config: Callable[['Code'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("identityId", identityId)
            name2 = registry.register("limit", limit)
            name3 = registry.register("offset", offset)
            name4 = registry.register("orderBy", orderBy)
            name5 = registry.register("order", order)
            entity = Code()
            config(entity)
            return f'codes(identityId:{name1}, limit:{name2}, offset:{name3}, orderBy:{name4}, order:{name5})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def code(self, identityId: str, reference: str, config: Callable[['Code'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("identityId", identityId)
            name2 = registry.register("reference", reference)
            entity = Code()
            config(entity)
            return f'code(identityId:{name1}, reference:{name2})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def behaviours(self, identityId: str, limit: int, offset: int, orderBy: OrderByField, order: Order, config: Callable[['Behaviour'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("identityId", identityId)
            name2 = registry.register("limit", limit)
            name3 = registry.register("offset", offset)
            name4 = registry.register("orderBy", orderBy)
            name5 = registry.register("order", order)
            entity = Behaviour()
            config(entity)
            return f'behaviours(identityId:{name1}, limit:{name2}, offset:{name3}, orderBy:{name4}, order:{name5})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def behaviour(self, identityId: str, reference: str, config: Callable[['Behaviour'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("identityId", identityId)
            name2 = registry.register("reference", reference)
            entity = Behaviour()
            config(entity)
            return f'behaviour(identityId:{name1}, reference:{name2})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def edges(self, source: str, limit: int, offset: int, orderBy: EdgeOrderByField, order: Order, config: Callable[['Edge'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("source", source)
            name2 = registry.register("limit", limit)
            name3 = registry.register("offset", offset)
            name4 = registry.register("orderBy", orderBy)
            name5 = registry.register("order", order)
            entity = Edge()
            config(entity)
            return f'edges(source:{name1}, limit:{name2}, offset:{name3}, orderBy:{name4}, order:{name5})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def edge(self, source: str, target: str, config: Callable[['Edge'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("source", source)
            name2 = registry.register("target", target)
            entity = Edge()
            config(entity)
            return f'edge(source:{name1}, target:{name2})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
