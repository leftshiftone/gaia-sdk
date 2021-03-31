from gaia_sdk.api.VariableRegistry import VariableRegistry


class Tenant(list):
    """
    Represents tenant information
    """

    """
    The tenant id
    """
    def tenant_id(self):
        self.append(lambda x: "tenantId")

    """
    The name of the tenant
    """
    def qualifier(self):
        self.append(lambda x: "qualifier")

    """
    The list of implicit identities
    """
    def implicit_identities(self):
        self.append(lambda x: "implicitIdentities")

    """
    The list of explicit identities
    """
    def explicit_identities(self):
        self.append(lambda x: "explicitIdentities")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
