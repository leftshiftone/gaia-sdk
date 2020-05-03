
import {CreatedCodeImpulse} from "./CreatedCodeImpulse";
import {CreatedPromptImpulse} from "./CreatedPromptImpulse";
import {CreatedStatementImpulse} from "./CreatedStatementImpulse";
import {CreatedIntentImpulse} from "./CreatedIntentImpulse";
import {CreatedBehaviourImpulse} from "./CreatedBehaviourImpulse";
import {CreatedFulfilmentImpulse} from "./CreatedFulfilmentImpulse";
import {CreateIntentImpulse} from "../input/CreateIntentImpulse";
import {CreatePromptImpulse} from "../input/CreatePromptImpulse";
import {CreateBehaviourImpulse} from "../input/CreateBehaviourImpulse";
import {CreateCodeImpulse} from "../input/CreateCodeImpulse";
import {CreateFulfilmentImpulse} from "../input/CreateFulfilmentImpulse";
import {CreateStatementImpulse} from "../input/CreateStatementImpulse";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

export class CreateKnowledge extends Array<(_:VariableRegistry) => string> {

    /**
     * creates a list of intents with the given specifications
     */
    public intents = (impulses : [CreateIntentImpulse], config: (_:CreatedIntentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new CreatedIntentImpulse();
        config(entity);
        return `intents(impulses:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * creates a list of prompts with the given specifications
     */
    public prompts = (impulses : [CreatePromptImpulse], config: (_:CreatedPromptImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new CreatedPromptImpulse();
        config(entity);
        return `prompts(impulses:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * creates a list of statements with the given specifications
     */
    public statements = (impulses : [CreateStatementImpulse], config: (_:CreatedStatementImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new CreatedStatementImpulse();
        config(entity);
        return `statements(impulses:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * creates a list of fulfilments with the given specifications
     */
    public fulfilments = (impulses : [CreateFulfilmentImpulse], config: (_:CreatedFulfilmentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new CreatedFulfilmentImpulse();
        config(entity);
        return `fulfilments(impulses:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * creates a list of behaviours with the given specifications
     */
    public behaviours = (impulses : [CreateBehaviourImpulse], config: (_:CreatedBehaviourImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new CreatedBehaviourImpulse();
        config(entity);
        return `behaviours(impulses:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * creates a list of codes with the given specifications
     */
    public codes = (impulses : [CreateCodeImpulse], config: (_:CreatedCodeImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new CreatedCodeImpulse();
        config(entity);
        return `codes(impulses:$${name1}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}
