


class SkillPracticedImpulse:
    """
    This impulse returns the result of a skill practice query request
    """
    def id(self) -> Uuid:
        return self.id
    """
    The result of the skill practice
    """
    def data(self) -> Struct:
        return self.data
