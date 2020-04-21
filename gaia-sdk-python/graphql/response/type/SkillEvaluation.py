
from graphql.response.type.SyncSkillEvaluation import SyncSkillEvaluation
from graphql.response.type.AsyncSkillEvaluation import AsyncSkillEvaluation


class SkillEvaluation:
    def sync(self) -> SyncSkillEvaluation:
        return self.sync
    def async(self) -> AsyncSkillEvaluation:
        return self.async
