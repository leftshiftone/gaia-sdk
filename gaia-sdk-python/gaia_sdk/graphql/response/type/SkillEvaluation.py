
from graphql.response.type.SyncSkillEvaluation import SyncSkillEvaluation
from graphql.response.type.AsyncSkillEvaluation import AsyncSkillEvaluation


class SkillEvaluation:
    def syncEval(self) -> SyncSkillEvaluation:
        return self.syncEval
    def asyncEval(self) -> AsyncSkillEvaluation:
        return self.asyncEval
