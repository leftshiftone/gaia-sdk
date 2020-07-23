
from gaia_sdk.graphql.request.type.DeleteKnowledge import DeleteKnowledge
from gaia_sdk.graphql.request.type.UpdateKnowledge import UpdateKnowledge
from gaia_sdk.graphql.request.type.CreateKnowledge import CreateKnowledge

from typing import Callable, List
from gaia_sdk.api.VariableRegistry import VariableRegistry


class Preservation(list):
    """
    This type contains all preservation sensor impulses which are used to support
    read/write/delete memory functions in gaia.
    """

    def create(self, config: Callable[['CreateKnowledge'], None]):
        def callback(registry: VariableRegistry):
            entity = CreateKnowledge()
            config(entity)
            return "create {" + entity.render(registry) + "}"
        self.append(callback)

    def update(self, config: Callable[['UpdateKnowledge'], None]):
        def callback(registry: VariableRegistry):
            entity = UpdateKnowledge()
            config(entity)
            return "update {" + entity.render(registry) + "}"
        self.append(callback)

    def delete(self, config: Callable[['DeleteKnowledge'], None]):
        def callback(registry: VariableRegistry):
            entity = DeleteKnowledge()
            config(entity)
            return "delete {" + entity.render(registry) + "}"
        self.append(callback)

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
