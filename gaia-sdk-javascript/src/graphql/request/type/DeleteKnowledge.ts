
import {DeletedFulfilmentImpulse} from "./DeletedFulfilmentImpulse";
import {DeletedBehaviourImpulse} from "./DeletedBehaviourImpulse";
import {DeletedIntentImpulse} from "./DeletedIntentImpulse";
import {DeletedPromptImpulse} from "./DeletedPromptImpulse";
import {DeletedStatementImpulse} from "./DeletedStatementImpulse";
import {DeletedCodeImpulse} from "./DeletedCodeImpulse";
import {DeleteFulfilmentImpulse} from "../input/DeleteFulfilmentImpulse";
import {DeleteCodeImpulse} from "../input/DeleteCodeImpulse";
import {DeleteStatementImpulse} from "../input/DeleteStatementImpulse";
import {DeletePromptImpulse} from "../input/DeletePromptImpulse";
import {DeleteBehaviourImpulse} from "../input/DeleteBehaviourImpulse";
import {DeleteIntentImpulse} from "../input/DeleteIntentImpulse";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

export class DeleteKnowledge extends Array<(_:VariableRegistry) => string> {

    /**
     * deletes a list of intents with the given specifications
     */
    public intents = (impulse : [DeleteIntentImpulse], config: (_:DeletedIntentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new DeletedIntentImpulse();
        config(entity);
        return `intents(impulse:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of prompts with the given specifications
     */
    public prompts = (impulse : [DeletePromptImpulse], config: (_:DeletedPromptImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new DeletedPromptImpulse();
        config(entity);
        return `prompts(impulse:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of statements with the given specifications
     */
    public statements = (impulse : [DeleteStatementImpulse], config: (_:DeletedStatementImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new DeletedStatementImpulse();
        config(entity);
        return `statements(impulse:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of fulfilments with the given specifications
     */
    public fulfilments = (impulse : [DeleteFulfilmentImpulse], config: (_:DeletedFulfilmentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new DeletedFulfilmentImpulse();
        config(entity);
        return `fulfilments(impulse:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of behaviours with the given specifications
     */
    public behaviours = (impulse : [DeleteBehaviourImpulse], config: (_:DeletedBehaviourImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new DeletedBehaviourImpulse();
        config(entity);
        return `behaviours(impulse:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of codes with the given specifications
     */
    public codes = (impulse : [DeleteCodeImpulse], config: (_:DeletedCodeImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulse", impulse);
        const entity = new DeletedCodeImpulse();
        config(entity);
        return `codes(impulse:$${name1}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

