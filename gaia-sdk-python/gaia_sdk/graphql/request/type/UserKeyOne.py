from gaia_sdk.api.VariableRegistry import VariableRegistry


class UserKeyOne(list):

    def user_id(self):
        self.append(lambda x: "userId")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
