
from graphql.request.type.DeletedIntentImpulse import DeletedIntentImpulse
from graphql.request.type.CreatedIntentImpulse import CreatedIntentImpulse
from graphql.request.type.UpdatedIntentImpulse import UpdatedIntentImpulse
from graphql.request.input.CreateIntentImpulse import CreateIntentImpulse
from graphql.request.input.UpdateIntentImpulse import UpdateIntentImpulse
from graphql.request.input.DeleteIntentImpulse import DeleteIntentImpulse

from typing import Callable
from api.VariableRegistry import VariableRegistry


class Preservation(list):
    """
    This type contains all preservation sensor impulses which are used to support
    read/write/delete memory functions in gaia.
    """

    """
    creates an intent with the given specification
    """
    def create_intent(self, impulse: CreateIntentImpulse, config: Callable[['CreatedIntentImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = CreatedIntentImpulse()
            config(entity)
            return f'createIntent(impulse:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    updates an intent with the given specification
    """
    def update_intent(self, impulse: UpdateIntentImpulse, config: Callable[['UpdatedIntentImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = UpdatedIntentImpulse()
            config(entity)
            return f'updateIntent(impulse:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    deletes an intent with the given specification
    """
    def delete_intent(self, impulse: DeleteIntentImpulse, config: Callable[['DeletedIntentImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = DeletedIntentImpulse()
            config(entity)
            return f'deleteIntent(impulse:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    creates a list of intents with the given specifications
    """
    def create_intents(self, impulse: CreateIntentImpulse, config: Callable[['CreatedIntentImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = CreatedIntentImpulse()
            config(entity)
            return f'createIntents(impulse:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    updates a list of intents with the given specifications
    """
    def update_intents(self, impulse: UpdateIntentImpulse, config: Callable[['UpdatedIntentImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = UpdatedIntentImpulse()
            config(entity)
            return f'updateIntents(impulse:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    deletes a list of intents with the given specifications
    """
    def delete_intents(self, impulse: DeleteIntentImpulse, config: Callable[['DeletedIntentImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulse", impulse)
            entity = DeletedIntentImpulse()
            config(entity)
            return f'deleteIntents(impulse:{name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
