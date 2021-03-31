from gaia_sdk.api.VariableRegistry import VariableRegistry


class ApiKeyKeyOne(list):

    def api_key_id(self):
        self.append(lambda x: "apiKeyId")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
