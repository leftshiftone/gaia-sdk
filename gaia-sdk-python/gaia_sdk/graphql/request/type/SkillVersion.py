from gaia_sdk.api.VariableRegistry import VariableRegistry


class SkillVersion(list):
    """
    A skill version is a built version of a skill created by a SkillBuildJob
    """

    def skill_ref(self):
        self.append(lambda x: "skillRef")

    def version(self):
        self.append(lambda x: "version")

    def created(self):
        self.append(lambda x: "created")

    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
