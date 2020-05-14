import {Fulfilment} from "./Fulfilment";
import {Behaviour} from "./Behaviour";
import {Statement} from "./Statement";
import {KnowledgeEdge} from "./KnowledgeEdge";
import {Intent} from "./Intent";
import {Prompt} from "./Prompt";
import {Code} from "./Code";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid} from "../../GaiaClient";

export class Knowledge extends Array<(_:VariableRegistry) => string> {

    public intents = (identityId : Uuid, config: (_:Intent) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const entity = new Intent();
        config(entity);
        return `intents(identityId:$${name1}){` + entity.render(registry) + "}"
    });

    public intent = (identityId : Uuid, reference : Uuid, config: (_:Intent) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const name2 = registry.register("reference", reference);
        const entity = new Intent();
        config(entity);
        return `intent(identityId:$${name1}reference:$${name2}){` + entity.render(registry) + "}"
    });

    public prompts = (identityId : Uuid, config: (_:Prompt) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const entity = new Prompt();
        config(entity);
        return `prompts(identityId:$${name1}){` + entity.render(registry) + "}"
    });

    public prompt = (identityId : Uuid, reference : Uuid, config: (_:Prompt) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const name2 = registry.register("reference", reference);
        const entity = new Prompt();
        config(entity);
        return `prompt(identityId:$${name1}reference:$${name2}){` + entity.render(registry) + "}"
    });

    public fulfilments = (identityId : Uuid, config: (_:Fulfilment) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const entity = new Fulfilment();
        config(entity);
        return `fulfilments(identityId:$${name1}){` + entity.render(registry) + "}"
    });

    public fulfilment = (identityId : Uuid, reference : Uuid, config: (_:Fulfilment) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const name2 = registry.register("reference", reference);
        const entity = new Fulfilment();
        config(entity);
        return `fulfilment(identityId:$${name1}reference:$${name2}){` + entity.render(registry) + "}"
    });

    public statements = (identityId : Uuid, config: (_:Statement) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const entity = new Statement();
        config(entity);
        return `statements(identityId:$${name1}){` + entity.render(registry) + "}"
    });

    public statement = (identityId : Uuid, reference : Uuid, config: (_:Statement) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const name2 = registry.register("reference", reference);
        const entity = new Statement();
        config(entity);
        return `statement(identityId:$${name1}reference:$${name2}){` + entity.render(registry) + "}"
    });

    public codes = (identityId : Uuid, config: (_:Code) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const entity = new Code();
        config(entity);
        return `codes(identityId:$${name1}){` + entity.render(registry) + "}"
    });

    public code = (identityId : Uuid, reference : Uuid, config: (_:Code) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const name2 = registry.register("reference", reference);
        const entity = new Code();
        config(entity);
        return `code(identityId:$${name1}reference:$${name2}){` + entity.render(registry) + "}"
    });

    public behaviours = (identityId : Uuid, config: (_:Behaviour) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const entity = new Behaviour();
        config(entity);
        return `behaviours(identityId:$${name1}){` + entity.render(registry) + "}"
    });

    public behaviour = (identityId : Uuid, reference : Uuid, config: (_:Behaviour) => void) => this.push((registry) => {
        const name1 = registry.register("identityId", identityId);
        const name2 = registry.register("reference", reference);
        const entity = new Behaviour();
        config(entity);
        return `behaviour(identityId:$${name1}reference:$${name2}){` + entity.render(registry) + "}"
    });

    public edges = (config: (_:KnowledgeEdge) => void) => this.push((registry) => {
        const entity = new KnowledgeEdge();
        config(entity);
        return "edges { " + entity.render(registry) + " }";
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

