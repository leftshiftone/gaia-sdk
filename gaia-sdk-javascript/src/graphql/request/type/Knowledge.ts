
import Fulfilment from "./Fulfilment";
import Statement from "./Statement";
import KnowledgeEdge from "./KnowledgeEdge";
import Intent from "./Intent";
import Prompt from "./Prompt";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, Timestamp, Struct, Long} from "../../GaiaClient";

export default class Knowledge extends Array<(_:VariableRegistry) => string> {

    public intents = (config: (_:Intent) => void) => this.push((registry) => {
        const entity = new Intent();
        config(entity);
        return "intents { " + entity.render(registry) + " }";
    });

    public prompts = (config: (_:Prompt) => void) => this.push((registry) => {
        const entity = new Prompt();
        config(entity);
        return "prompts { " + entity.render(registry) + " }";
    });

    public fulfilments = (config: (_:Fulfilment) => void) => this.push((registry) => {
        const entity = new Fulfilment();
        config(entity);
        return "fulfilments { " + entity.render(registry) + " }";
    });

    public statements = (config: (_:Statement) => void) => this.push((registry) => {
        const entity = new Statement();
        config(entity);
        return "statements { " + entity.render(registry) + " }";
    });

    public edge = (config: (_:KnowledgeEdge) => void) => this.push((registry) => {
        const entity = new KnowledgeEdge();
        config(entity);
        return "edge { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

