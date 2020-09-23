
import {DeletedApiKeyImpulse} from "./DeletedApiKeyImpulse";
import {DeletedFulfilmentImpulse} from "./DeletedFulfilmentImpulse";
import {DeletedBehaviourImpulse} from "./DeletedBehaviourImpulse";
import {DeletedTenantImpulse} from "./DeletedTenantImpulse";
import {DeletedSkillProvisionImpulse} from "./DeletedSkillProvisionImpulse";
import {DeletedStatementImpulse} from "./DeletedStatementImpulse";
import {DeletedSkillImpulse} from "./DeletedSkillImpulse";
import {DeletedCodeImpulse} from "./DeletedCodeImpulse";
import {DeletedEdgeImpulse} from "./DeletedEdgeImpulse";
import {DeletedIdentityImpulse} from "./DeletedIdentityImpulse";
import {DeletedIntentImpulse} from "./DeletedIntentImpulse";
import {DeletedPromptImpulse} from "./DeletedPromptImpulse";
import {DeletedUserImpulse} from "./DeletedUserImpulse";
import {DeleteFulfilmentImpulse} from "../input/DeleteFulfilmentImpulse";
import {DeleteCodeImpulse} from "../input/DeleteCodeImpulse";
import {DeleteEdgeImpulse} from "../input/DeleteEdgeImpulse";
import {DeleteBehaviourImpulse} from "../input/DeleteBehaviourImpulse";
import {DeleteSkillImpulse} from "../input/DeleteSkillImpulse";
import {DeleteIdentityImpulse} from "../input/DeleteIdentityImpulse";
import {DeleteUserImpulse} from "../input/DeleteUserImpulse";
import {DeleteApiKeyImpulse} from "../input/DeleteApiKeyImpulse";
import {DeleteStatementImpulse} from "../input/DeleteStatementImpulse";
import {DeletePromptImpulse} from "../input/DeletePromptImpulse";
import {DeleteTenantImpulse} from "../input/DeleteTenantImpulse";
import {DeleteIntentImpulse} from "../input/DeleteIntentImpulse";
import {DeleteSkillProvisionImpulse} from "../input/DeleteSkillProvisionImpulse";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

export class DeleteKnowledge extends Array<(_:VariableRegistry) => string> {

    /**
     * deletes a list of identities with the given specifications
     */
    public identities = (impulses: [DeleteIdentityImpulse]|undefined, config: (_:DeletedIdentityImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new DeletedIdentityImpulse();
        config(entity);
        return `identities(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of tenants with the given specifications
     */
    public tenants = (impulses: [DeleteTenantImpulse]|undefined, config: (_:DeletedTenantImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new DeletedTenantImpulse();
        config(entity);
        return `tenants(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of users with the given specifications
     */
    public users = (impulses: [DeleteUserImpulse]|undefined, config: (_:DeletedUserImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new DeletedUserImpulse();
        config(entity);
        return `users(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of api keys with the given specifications
     */
    public apiKeys = (impulses: [DeleteApiKeyImpulse]|undefined, config: (_:DeletedApiKeyImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new DeletedApiKeyImpulse();
        config(entity);
        return `apiKeys(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of intents with the given specifications
     */
    public intents = (impulses: [DeleteIntentImpulse]|undefined, config: (_:DeletedIntentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new DeletedIntentImpulse();
        config(entity);
        return `intents(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of prompts with the given specifications
     */
    public prompts = (impulses: [DeletePromptImpulse]|undefined, config: (_:DeletedPromptImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new DeletedPromptImpulse();
        config(entity);
        return `prompts(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of statements with the given specifications
     */
    public statements = (impulses: [DeleteStatementImpulse]|undefined, config: (_:DeletedStatementImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new DeletedStatementImpulse();
        config(entity);
        return `statements(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of fulfilments with the given specifications
     */
    public fulfilments = (impulses: [DeleteFulfilmentImpulse]|undefined, config: (_:DeletedFulfilmentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new DeletedFulfilmentImpulse();
        config(entity);
        return `fulfilments(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of behaviours with the given specifications
     */
    public behaviours = (impulses: [DeleteBehaviourImpulse]|undefined, config: (_:DeletedBehaviourImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new DeletedBehaviourImpulse();
        config(entity);
        return `behaviours(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of codes with the given specifications
     */
    public codes = (impulses: [DeleteCodeImpulse]|undefined, config: (_:DeletedCodeImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new DeletedCodeImpulse();
        config(entity);
        return `codes(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of edges with the given specifications
     */
    public edges = (impulses: [DeleteEdgeImpulse]|undefined, config: (_:DeletedEdgeImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new DeletedEdgeImpulse();
        config(entity);
        return `edges(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of skills with the given specifications
     */
    public skills = (impulses: [DeleteSkillImpulse]|undefined, config: (_:DeletedSkillImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new DeletedSkillImpulse();
        config(entity);
        return `skills(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * deletes a list of skill provisions with the given specifications
     */
    public skillProvisions = (impulses: [DeleteSkillProvisionImpulse]|undefined, config: (_:DeletedSkillProvisionImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new DeletedSkillProvisionImpulse();
        config(entity);
        return `skillProvisions(impulses:${name1}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

