
import {UpdatedStatementImpulse} from "./UpdatedStatementImpulse";
import {UpdatedFulfilmentImpulse} from "./UpdatedFulfilmentImpulse";
import {UpdatedBehaviourImpulse} from "./UpdatedBehaviourImpulse";
import {UpdatedPromptImpulse} from "./UpdatedPromptImpulse";
import {UpdatedCodeImpulse} from "./UpdatedCodeImpulse";
import {UpdatedIntentImpulse} from "./UpdatedIntentImpulse";
import {UpdateStatementImpulse} from "../input/UpdateStatementImpulse";
import {UpdateBehaviourImpulse} from "../input/UpdateBehaviourImpulse";
import {UpdateIntentImpulse} from "../input/UpdateIntentImpulse";
import {UpdateCodeImpulse} from "../input/UpdateCodeImpulse";
import {UpdatePromptImpulse} from "../input/UpdatePromptImpulse";
import {UpdateFulfilmentImpulse} from "../input/UpdateFulfilmentImpulse";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

export class UpdateKnowledge extends Array<(_:VariableRegistry) => string> {

    /**
     * updates a list of intents with the given specifications
     */
    public intents = (impulses : [UpdateIntentImpulse], config: (_:UpdatedIntentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new UpdatedIntentImpulse();
        config(entity);
        return `intents(impulses:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * updates a list of prompts with the given specifications
     */
    public prompts = (impulses : [UpdatePromptImpulse], config: (_:UpdatedPromptImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new UpdatedPromptImpulse();
        config(entity);
        return `prompts(impulses:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * updates a list of statements with the given specifications
     */
    public statements = (impulses : [UpdateStatementImpulse], config: (_:UpdatedStatementImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new UpdatedStatementImpulse();
        config(entity);
        return `statements(impulses:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * updates a list of fulfilments with the given specifications
     */
    public fulfilments = (impulses : [UpdateFulfilmentImpulse], config: (_:UpdatedFulfilmentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new UpdatedFulfilmentImpulse();
        config(entity);
        return `fulfilments(impulses:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * updates a list of behaviours with the given specifications
     */
    public behaviours = (impulses : [UpdateBehaviourImpulse], config: (_:UpdatedBehaviourImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new UpdatedBehaviourImpulse();
        config(entity);
        return `behaviours(impulses:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * updates a list of codes with the given specifications
     */
    public codes = (impulses : [UpdateCodeImpulse], config: (_:UpdatedCodeImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new UpdatedCodeImpulse();
        config(entity);
        return `codes(impulses:$${name1}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

