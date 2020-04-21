
from graphql.request.type.Fulfilment import Fulfilment
from graphql.request.type.Statement import Statement
from graphql.request.type.KnowledgeEdge import KnowledgeEdge
from graphql.request.type.Intent import Intent
from graphql.request.type.Prompt import Prompt

from typing import Callable
from api.VariableRegistry import VariableRegistry


class Knowledge(list):

    def intents(selfconfig: (_:Intent) => void) => this.push((registry) => {
        const entity = new Intent();
        config(entity);
        return "intents { " + entity.render(registry) + " }";
    });
    def prompts(selfconfig: (_:Prompt) => void) => this.push((registry) => {
        const entity = new Prompt();
        config(entity);
        return "prompts { " + entity.render(registry) + " }";
    });
    def fulfilments(selfconfig: (_:Fulfilment) => void) => this.push((registry) => {
        const entity = new Fulfilment();
        config(entity);
        return "fulfilments { " + entity.render(registry) + " }";
    });
    def statements(selfconfig: (_:Statement) => void) => this.push((registry) => {
        const entity = new Statement();
        config(entity);
        return "statements { " + entity.render(registry) + " }";
    });
    def edge(selfconfig: (_:KnowledgeEdge) => void) => this.push((registry) => {
        const entity = new KnowledgeEdge();
        config(entity);
        return "edge { " + entity.render(registry) + " }";
    });
    def render(self, registry: VariableRegistry):
        return " ".join(map(lambda e: e(registry), self))
