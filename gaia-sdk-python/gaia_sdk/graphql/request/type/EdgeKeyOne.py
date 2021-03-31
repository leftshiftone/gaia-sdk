from gaia_sdk.api.VariableRegistry import VariableRegistry


class EdgeKeyOne(list):
    """
    This entity represents the output of an edge delete impulse
    """

    def source(self):
        self.append(lambda x: "source")

    def edge_id(self):
        self.append(lambda x: "edgeId")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
