
import {UpdatedStatementImpulse} from "./UpdatedStatementImpulse";
import {UpdatedFulfilmentImpulse} from "./UpdatedFulfilmentImpulse";
import {UpdatedBehaviourImpulse} from "./UpdatedBehaviourImpulse";
import {UpdatedIdentityImpulse} from "./UpdatedIdentityImpulse";
import {UpdatedPromptImpulse} from "./UpdatedPromptImpulse";
import {UpdatedCodeImpulse} from "./UpdatedCodeImpulse";
import {UpdatedIntentImpulse} from "./UpdatedIntentImpulse";
import {UpdateStatementImpulse} from "../input/UpdateStatementImpulse";
import {UpdateBehaviourImpulse} from "../input/UpdateBehaviourImpulse";
import {UpdateIntentImpulse} from "../input/UpdateIntentImpulse";
import {UpdateCodeImpulse} from "../input/UpdateCodeImpulse";
import {UpdatePromptImpulse} from "../input/UpdatePromptImpulse";
import {UpdateFulfilmentImpulse} from "../input/UpdateFulfilmentImpulse";
import {UpdateIdentityImpulse} from "../input/UpdateIdentityImpulse";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

export class UpdateKnowledge extends Array<(_:VariableRegistry) => string> {

    /**
     * updates a list of identities with the given specifications
     */
    public identities = (impulses: [UpdateIdentityImpulse]|undefined, config: (_:UpdatedIdentityImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new UpdatedIdentityImpulse();
        config(entity);
        return `identities(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * updates a list of intents with the given specifications
     */
    public intents = (impulses: [UpdateIntentImpulse]|undefined, config: (_:UpdatedIntentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new UpdatedIntentImpulse();
        config(entity);
        return `intents(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * updates a list of prompts with the given specifications
     */
    public prompts = (impulses: [UpdatePromptImpulse]|undefined, config: (_:UpdatedPromptImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new UpdatedPromptImpulse();
        config(entity);
        return `prompts(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * updates a list of statements with the given specifications
     */
    public statements = (impulses: [UpdateStatementImpulse]|undefined, config: (_:UpdatedStatementImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new UpdatedStatementImpulse();
        config(entity);
        return `statements(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * updates a list of fulfilments with the given specifications
     */
    public fulfilments = (impulses: [UpdateFulfilmentImpulse]|undefined, config: (_:UpdatedFulfilmentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new UpdatedFulfilmentImpulse();
        config(entity);
        return `fulfilments(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * updates a list of behaviours with the given specifications
     */
    public behaviours = (impulses: [UpdateBehaviourImpulse]|undefined, config: (_:UpdatedBehaviourImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new UpdatedBehaviourImpulse();
        config(entity);
        return `behaviours(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * updates a list of codes with the given specifications
     */
    public codes = (impulses: [UpdateCodeImpulse]|undefined, config: (_:UpdatedCodeImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new UpdatedCodeImpulse();
        config(entity);
        return `codes(impulses:${name1}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

