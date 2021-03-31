from gaia_sdk.api.VariableRegistry import VariableRegistry


class TenantKeyOne(list):
    """
    This entity represents the output of a delete tenant impulse
    """

    def tenant_id(self):
        self.append(lambda x: "tenantId")

    def reference(self):
        self.append(lambda x: "reference")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
