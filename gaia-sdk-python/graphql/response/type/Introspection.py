
from graphql.response.type.SkillIntrospection import SkillIntrospection


class Introspection:
    def cpu(self) -> String:
        return self.cpu
    def gpu(self) -> String:
        return self.gpu
    def memory(self) -> String:
        return self.memory
    def state(self) -> RuntimeState:
        return self.state
    def started(self) -> Timestamp:
        return self.started
    def skills(self) -> SkillIntrospection:
        return self.skills
