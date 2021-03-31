from gaia_sdk.api.VariableRegistry import VariableRegistry


class RoleKeyOne(list):

    def tenant_id(self):
        self.append(lambda x: "tenantId")

    def role_id(self):
        self.append(lambda x: "roleId")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
