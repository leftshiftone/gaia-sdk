
import {UpdatedUserImpulse} from "./UpdatedUserImpulse";
import {UpdatedTenantImpulse} from "./UpdatedTenantImpulse";
import {UpdatedBehaviourImpulse} from "./UpdatedBehaviourImpulse";
import {UpdatedApiKeyImpulse} from "./UpdatedApiKeyImpulse";
import {UpdatedSkillImpulse} from "./UpdatedSkillImpulse";
import {UpdatedCodeImpulse} from "./UpdatedCodeImpulse";
import {UpdatedRoleImpulse} from "./UpdatedRoleImpulse";
import {UpdatedIntentImpulse} from "./UpdatedIntentImpulse";
import {UpdatedStatementImpulse} from "./UpdatedStatementImpulse";
import {UpdatedFulfilmentImpulse} from "./UpdatedFulfilmentImpulse";
import {UpdatedSkillProvisionImpulse} from "./UpdatedSkillProvisionImpulse";
import {UpdatedIdentityImpulse} from "./UpdatedIdentityImpulse";
import {UpdatedPromptImpulse} from "./UpdatedPromptImpulse";
import {UpdateBehaviourImpulse} from "../input/UpdateBehaviourImpulse";
import {UpdateSkillProvisionImpulse} from "../input/UpdateSkillProvisionImpulse";
import {UpdateUserImpulse} from "../input/UpdateUserImpulse";
import {UpdateIntentImpulse} from "../input/UpdateIntentImpulse";
import {UpdateCodeImpulse} from "../input/UpdateCodeImpulse";
import {UpdatePromptImpulse} from "../input/UpdatePromptImpulse";
import {UpdateSkillImpulse} from "../input/UpdateSkillImpulse";
import {UpdateIdentityImpulse} from "../input/UpdateIdentityImpulse";
import {UpdateStatementImpulse} from "../input/UpdateStatementImpulse";
import {UpdateApiKeyImpulse} from "../input/UpdateApiKeyImpulse";
import {UpdateRoleImpulse} from "../input/UpdateRoleImpulse";
import {UpdateTenantImpulse} from "../input/UpdateTenantImpulse";
import {UpdateFulfilmentImpulse} from "../input/UpdateFulfilmentImpulse";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";
import {EdgeType} from "../enumeration/EdgeType";

export class UpdateKnowledge extends Array<(_:VariableRegistry) => string> {
public _typeName = "UpdateKnowledge";
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
     * updates a list of tenants with the given specifications
     */
    public tenants = (impulses: [UpdateTenantImpulse]|undefined, config: (_:UpdatedTenantImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new UpdatedTenantImpulse();
        config(entity);
        return `tenants(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * updates a list of users with the given specifications
     */
    public users = (impulses: [UpdateUserImpulse]|undefined, config: (_:UpdatedUserImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new UpdatedUserImpulse();
        config(entity);
        return `users(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * updates a list of api keys with the given specifications
     */
    public apiKeys = (impulses: [UpdateApiKeyImpulse]|undefined, config: (_:UpdatedApiKeyImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new UpdatedApiKeyImpulse();
        config(entity);
        return `apiKeys(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * updates a list of roles with the given specifications
     */
    public roles = (impulses: [UpdateRoleImpulse]|undefined, config: (_:UpdatedRoleImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new UpdatedRoleImpulse();
        config(entity);
        return `roles(impulses:${name1}){` + entity.render(registry) + "}"
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

    /**
     * updates a list of skills with the given specifications
     */
    public skills = (impulses: [UpdateSkillImpulse]|undefined, config: (_:UpdatedSkillImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new UpdatedSkillImpulse();
        config(entity);
        return `skills(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * updates a list of skill provisions with the given specifications
     */
    public skillProvisions = (impulses: [UpdateSkillProvisionImpulse]|undefined, config: (_:UpdatedSkillProvisionImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new UpdatedSkillProvisionImpulse();
        config(entity);
        return `skillProvisions(impulses:${name1}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

