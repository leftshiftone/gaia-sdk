
from graphql.request.type.BuildInEvaluation import BuildInEvaluation
from graphql.request.type.SkillEvaluation import SkillEvaluation

from typing import Callable
from api.VariableRegistry import VariableRegistry


class Evaluation(list):

    def skill(selfconfig: (_:SkillEvaluation) => void) => this.push((registry) => {
        const entity = new SkillEvaluation();
        config(entity);
        return "skill { " + entity.render(registry) + " }";
    });
    def build_in(selfconfig: (_:BuildInEvaluation) => void) => this.push((registry) => {
        const entity = new BuildInEvaluation();
        config(entity);
        return "buildIn { " + entity.render(registry) + " }";
    });
    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
