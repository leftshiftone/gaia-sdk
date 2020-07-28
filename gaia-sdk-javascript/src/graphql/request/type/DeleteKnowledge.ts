
import {DeletedIdentityImpulse} from "./DeletedIdentityImpulse";
import {DeletedFulfilmentImpulse} from "./DeletedFulfilmentImpulse";
import {DeletedBehaviourImpulse} from "./DeletedBehaviourImpulse";
import {DeletedIntentImpulse} from "./DeletedIntentImpulse";
import {DeletedPromptImpulse} from "./DeletedPromptImpulse";
import {DeletedStatementImpulse} from "./DeletedStatementImpulse";
import {DeletedCodeImpulse} from "./DeletedCodeImpulse";
import {DeletedEdgeImpulse} from "./DeletedEdgeImpulse";
import {DeleteFulfilmentImpulse} from "../input/DeleteFulfilmentImpulse";
import {DeleteCodeImpulse} from "../input/DeleteCodeImpulse";
import {DeleteEdgeImpulse} from "../input/DeleteEdgeImpulse";
import {DeleteStatementImpulse} from "../input/DeleteStatementImpulse";
import {DeletePromptImpulse} from "../input/DeletePromptImpulse";
import {DeleteBehaviourImpulse} from "../input/DeleteBehaviourImpulse";
import {DeleteIntentImpulse} from "../input/DeleteIntentImpulse";
import {DeleteIdentityImpulse} from "../input/DeleteIdentityImpulse";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaFunctionClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";

export class DeleteKnowledge extends Array<(_:VariableRegistry) => string> {

    /**
     * deletes a list of identities with the given specifications
     */
    public identities = (impulses : [DeleteIdentityImpulse], config: (_:DeletedIdentityImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new DeletedIdentityImpulse();
        config(entity);
        return `identities(impulses:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of intents with the given specifications
     */
    public intents = (impulses : [DeleteIntentImpulse], config: (_:DeletedIntentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new DeletedIntentImpulse();
        config(entity);
        return `intents(impulses:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of prompts with the given specifications
     */
    public prompts = (impulses : [DeletePromptImpulse], config: (_:DeletedPromptImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new DeletedPromptImpulse();
        config(entity);
        return `prompts(impulses:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of statements with the given specifications
     */
    public statements = (impulses : [DeleteStatementImpulse], config: (_:DeletedStatementImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new DeletedStatementImpulse();
        config(entity);
        return `statements(impulses:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of fulfilments with the given specifications
     */
    public fulfilments = (impulses : [DeleteFulfilmentImpulse], config: (_:DeletedFulfilmentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new DeletedFulfilmentImpulse();
        config(entity);
        return `fulfilments(impulses:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of behaviours with the given specifications
     */
    public behaviours = (impulses : [DeleteBehaviourImpulse], config: (_:DeletedBehaviourImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new DeletedBehaviourImpulse();
        config(entity);
        return `behaviours(impulses:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of codes with the given specifications
     */
    public codes = (impulses : [DeleteCodeImpulse], config: (_:DeletedCodeImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new DeletedCodeImpulse();
        config(entity);
        return `codes(impulses:$${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of edges with the given specifications
     */
    public edges = (impulses : [DeleteEdgeImpulse], config: (_:DeletedEdgeImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new DeletedEdgeImpulse();
        config(entity);
        return `edges(impulses:$${name1}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

