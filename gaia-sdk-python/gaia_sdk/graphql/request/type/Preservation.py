
from gaia_sdk.graphql.request.type.DeletedIntentImpulse import DeletedIntentImpulse
from gaia_sdk.graphql.request.type.CreatedIntentImpulse import CreatedIntentImpulse
from gaia_sdk.graphql.request.type.UpdatedIntentImpulse import UpdatedIntentImpulse
from gaia_sdk.graphql.request.input.CreateIntentImpulse import CreateIntentImpulse
from gaia_sdk.graphql.request.input.UpdateIntentImpulse import UpdateIntentImpulse
from gaia_sdk.graphql.request.input.DeleteIntentImpulse import DeleteIntentImpulse

from typing import Callable
from gaia_sdk.api.VariableRegistry import VariableRegistry


class Preservation(list):
    """
    This type contains all preservation sensor impulses which are used to support
    read/write/delete memory functions in gaia.
    """

    """
    creates a list of intents with the given specifications
    """
    def create_intents(self, impulses: CreateIntentImpulse, config: Callable[['CreatedIntentImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = CreatedIntentImpulse()
            config(entity)
            return f'createIntents(impulses:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    updates a list of intents with the given specifications
    """
    def update_intents(self, impulses: UpdateIntentImpulse, config: Callable[['UpdatedIntentImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = UpdatedIntentImpulse()
            config(entity)
            return f'updateIntents(impulses:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    """
    deletes a list of intents with the given specifications
    """
    def delete_intents(self, impulses: DeleteIntentImpulse, config: Callable[['DeletedIntentImpulse'], None]):
        def callback(registry: VariableRegistry):
            name1 = registry.register("impulses", impulses)
            entity = DeletedIntentImpulse()
            config(entity)
            return f'deleteIntents(impulses:${name1})' + '{' + entity.render(registry) + '}'
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
