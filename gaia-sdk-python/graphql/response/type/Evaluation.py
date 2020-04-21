
from graphql.response.type.BuildInEvaluation import BuildInEvaluation
from graphql.response.type.SkillEvaluation import SkillEvaluation


class Evaluation:
    def skill(self) -> SkillEvaluation:
        return self.skill
    def buildIn(self) -> BuildInEvaluation:
        return self.buildIn
