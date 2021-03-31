from gaia_sdk.api.VariableRegistry import VariableRegistry


class Role(list):
    """
    Represents Role information
    """

    """
    Id of the tenant
    """
    def tenant_id(self):
        self.append(lambda x: "tenantId")

    """
    Id of the role
    """
    def role_id(self):
        self.append(lambda x: "roleId")

    """
    The name of the role
    """
    def name(self):
        self.append(lambda x: "name")

    """
    The permissions of the role
    """
    def permissions(self):
        self.append(lambda x: "permissions")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
