from gaia_sdk.api.VariableRegistry import VariableRegistry


class Identity(list):
    """
    Represents identity information
    """

    """
    The identity id
    """
    def identity_id(self):
        self.append(lambda x: "identityId")

    """
    The tenant id
    """
    def tenant_id(self):
        self.append(lambda x: "tenantId")

    """
    The name of the identity
    """
    def qualifier(self):
        self.append(lambda x: "qualifier")

    """
    The available languages of the identity
    """
    def available_languages(self):
        self.append(lambda x: "availableLanguages")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
