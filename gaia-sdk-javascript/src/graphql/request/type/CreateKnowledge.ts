
import {CreatedEdgeImpulse} from "./CreatedEdgeImpulse";
import {CreatedCodeImpulse} from "./CreatedCodeImpulse";
import {CreatedPromptImpulse} from "./CreatedPromptImpulse";
import {CreatedIntentImpulse} from "./CreatedIntentImpulse";
import {CreatedSkillImpulse} from "./CreatedSkillImpulse";
import {CreatedFulfilmentImpulse} from "./CreatedFulfilmentImpulse";
import {CreatedUserImpulse} from "./CreatedUserImpulse";
import {CreatedSkillProvisionImpulse} from "./CreatedSkillProvisionImpulse";
import {CreatedTenantImpulse} from "./CreatedTenantImpulse";
import {CreatedStatementImpulse} from "./CreatedStatementImpulse";
import {CreatedRoleImpulse} from "./CreatedRoleImpulse";
import {CreatedBehaviourImpulse} from "./CreatedBehaviourImpulse";
import {CreatedIdentityImpulse} from "./CreatedIdentityImpulse";
import {CreatedApiKeyImpulse} from "./CreatedApiKeyImpulse";
import {CreateTenantImpulse} from "../input/CreateTenantImpulse";
import {CreateSkillImpulse} from "../input/CreateSkillImpulse";
import {CreateEdgeImpulse} from "../input/CreateEdgeImpulse";
import {CreateIdentityImpulse} from "../input/CreateIdentityImpulse";
import {CreateCodeImpulse} from "../input/CreateCodeImpulse";
import {CreateFulfilmentImpulse} from "../input/CreateFulfilmentImpulse";
import {CreateStatementImpulse} from "../input/CreateStatementImpulse";
import {CreateSkillProvisionImpulse} from "../input/CreateSkillProvisionImpulse";
import {CreateRoleImpulse} from "../input/CreateRoleImpulse";
import {CreateIntentImpulse} from "../input/CreateIntentImpulse";
import {CreatePromptImpulse} from "../input/CreatePromptImpulse";
import {CreateBehaviourImpulse} from "../input/CreateBehaviourImpulse";
import {CreateUserImpulse} from "../input/CreateUserImpulse";
import {CreateApiKeyImpulse} from "../input/CreateApiKeyImpulse";

import VariableRegistry from "../../../api/VariableRegistry"
import {Uuid, ISO8601, Struct} from "../../GaiaClient";
import {RuntimeState} from "../enumeration/RuntimeState";
import {SkillState} from "../enumeration/SkillState";
import {Order} from "../enumeration/Order";
import {OrderByField} from "../enumeration/OrderByField";
import {EdgeOrderByField} from "../enumeration/EdgeOrderByField";

export class CreateKnowledge extends Array<(_:VariableRegistry) => string> {
public _typeName = "CreateKnowledge";
    /**
     * creates a list of identities with the given specifications
     */
    public identities = (impulses: [CreateIdentityImpulse]|undefined, config: (_:CreatedIdentityImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new CreatedIdentityImpulse();
        config(entity);
        return `identities(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * creates a list of tenants with the given specifications
     */
    public tenants = (impulses: [CreateTenantImpulse]|undefined, config: (_:CreatedTenantImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new CreatedTenantImpulse();
        config(entity);
        return `tenants(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * creates a list of users with the given specifications
     */
    public users = (impulses: [CreateUserImpulse]|undefined, config: (_:CreatedUserImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new CreatedUserImpulse();
        config(entity);
        return `users(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * creates a list of api keys with the given specifications
     */
    public apiKeys = (impulses: [CreateApiKeyImpulse]|undefined, config: (_:CreatedApiKeyImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new CreatedApiKeyImpulse();
        config(entity);
        return `apiKeys(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * creates a list of roles with the given specifications
     */
    public roles = (impulses: [CreateRoleImpulse]|undefined, config: (_:CreatedRoleImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new CreatedRoleImpulse();
        config(entity);
        return `roles(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * creates a list of intents with the given specifications
     */
    public intents = (impulses: [CreateIntentImpulse]|undefined, config: (_:CreatedIntentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new CreatedIntentImpulse();
        config(entity);
        return `intents(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * creates a list of prompts with the given specifications
     */
    public prompts = (impulses: [CreatePromptImpulse]|undefined, config: (_:CreatedPromptImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new CreatedPromptImpulse();
        config(entity);
        return `prompts(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * creates a list of statements with the given specifications
     */
    public statements = (impulses: [CreateStatementImpulse]|undefined, config: (_:CreatedStatementImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new CreatedStatementImpulse();
        config(entity);
        return `statements(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * creates a list of fulfilments with the given specifications
     */
    public fulfilments = (impulses: [CreateFulfilmentImpulse]|undefined, config: (_:CreatedFulfilmentImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new CreatedFulfilmentImpulse();
        config(entity);
        return `fulfilments(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * creates a list of behaviours with the given specifications
     */
    public behaviours = (impulses: [CreateBehaviourImpulse]|undefined, config: (_:CreatedBehaviourImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new CreatedBehaviourImpulse();
        config(entity);
        return `behaviours(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * creates a list of codes with the given specifications
     */
    public codes = (impulses: [CreateCodeImpulse]|undefined, config: (_:CreatedCodeImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new CreatedCodeImpulse();
        config(entity);
        return `codes(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * creates a list of edges with the given specifications
     */
    public edges = (impulses: [CreateEdgeImpulse]|undefined, config: (_:CreatedEdgeImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new CreatedEdgeImpulse();
        config(entity);
        return `edges(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * creates a list of skills with the given specifications
     */
    public skills = (impulses: [CreateSkillImpulse]|undefined, config: (_:CreatedSkillImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new CreatedSkillImpulse();
        config(entity);
        return `skills(impulses:${name1}){` + entity.render(registry) + "}"
    });

    /**
     * creates a list of skill provisions with the given specifications
     */
    public skillProvisions = (impulses: [CreateSkillProvisionImpulse]|undefined, config: (_:CreatedSkillProvisionImpulse) => void) => this.push((registry) => {
        const name1 = registry.register("impulses", impulses);
        const entity = new CreatedSkillProvisionImpulse();
        config(entity);
        return `skillProvisions(impulses:${name1}){` + entity.render(registry) + "}"
    });

    public render = (registry: VariableRegistry):String => this.map(e => e(registry)).join(" ");
}

